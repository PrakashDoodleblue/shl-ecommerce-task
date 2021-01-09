const baseController = require('../BaseController');
const productItemModel = require('../../models/ProdcutItem/ProductItem');
const { checkIfpriceIdPresent } = require('../../utils/FunctionalUtils');
const constantData = require('../../config/Constants').constants();

class ProductItem extends baseController {

    /**
     * @DESC : Add ProductItem
     * @param : string/Int
     * @return : array/object [json]
     */
    addProductItem = async(req, res) => {
        try {
            const ItemExists = await productItemModel.query()
                .where({ prodcutItemListId: req.body.prodcutItemListId, productCategoryId: req.body.productCategoryId })
                .select('prodcutItemId');

            if (ItemExists.length) {
                await productItemModel.query()
                    .where({ prodcutItemId: ItemExists[0].prodcutItemId, status: 1 })
                    .update({ quantity: req.body.quantity });
            } else {
                req.body.itemcode = "SHLPR" + Math.floor(new Date().valueOf() * Math.random());
                await productItemModel.query()
                    .insert(req.body);
            }
            const productData = await productItemModel.query()
                .where('status', 1)
                .select('prodcutItemId', 'prodcutItemListId', 'quantity', 'Itemprice');

            //price calculation
            const totalprice = ProductItem.prototype._priceCalculation(productData);

            return resposne.out(req, res, statusCode.HTTP_OK, { totalAmount: totalprice, totalItems: productData.length });
        } catch (err) {
            console.log(err);
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }

    /**
     * @DESC : ProductItem - List
     * @param : string/Int
     * @return : array/object [json]
     */
    productItemList = async(req, res) => {
        try {
            const responseData = await productItemModel.query()
                .where(checkIfpriceIdPresent(req))
                .select('priceId', 'productCategoryId', 'ItemlistId', 'price')
                .withGraphFetched('[productcategory,ItemList]')
                .modifiers('productcategory', (builder) => {
                    builder.select('categoryId,categoryName')
                }).modifiers('ItemList', (builder) => {
                    builder.select('itemId', 'itemName')
                });

            return resposne.out(req, res, statusCode.HTTP_OK, responseData);
        } catch (err) {
            console.log(err);
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }

    /**
     * @DESC : Upadte ProductItem
     * @param : string/Int
     * @return : array/object [json]
     */
    updateProductItem = async(req, res) => {
        try {
            const { categoryId, categoryName } = req.body;
            const responseData = await productItemModel.query()
                .patchAndFetchById(categoryId, { categoryName: categoryName });

            return resposne.out(req, res, statusCode.HTTP_OK, responseData);
        } catch (err) {
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }

    /**
     * @DESC : Delete ProductItem
     * @param : string/Int
     * @return : array/object [json]
     */
    deleteProductItem = async(req, res) => {
        try {
            await productItemModel.query()
                // .deleteById(req.params.categoryid); //harddelete
                .where({ categoryId: req.params.categoryid })
                .update({ status: constantData.DEACTIVE_STATUS });
            return resposne.out(req, res, statusCode.HTTP_OK, false);
        } catch (err) {
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }

    _priceCalculation(productData) {

        var totalprice, ItemAprice, ItemBprice, otherItemPrice = 0.00;

        productData.forEach(itemvalue => {

            if (itemvalue.prodcutItemListId == 1 && itemvalue.quantity >= 3) {
                ItemAprice = Number(itemvalue.Itemprice - 5) * itemvalue.quantity;
            } else if (itemvalue.prodcutItemListId == 1 && itemvalue.quantity < 3) {
                ItemAprice = Number(itemvalue.Itemprice) * itemvalue.quantity;
            } else {
                ItemAprice = ItemAprice > 0 ? ItemAprice : 0.00;
            }

            if (itemvalue.prodcutItemListId == 2 && itemvalue.quantity >= 2) {
                ItemBprice = Number(itemvalue.Itemprice - 2.5) * itemvalue.quantity;
            } else if (itemvalue.prodcutItemListId == 2 && itemvalue.quantity < 2) {
                ItemBprice = Number(itemvalue.Itemprice) * itemvalue.quantity;
            } else {
                ItemBprice = ItemBprice > 0 ? ItemBprice : 0.00;
            }

            if (itemvalue.prodcutItemListId != 1 && itemvalue.prodcutItemListId != 2) {
                otherItemPrice = Number(itemvalue.Itemprice) * itemvalue.quantity;
            }

        });
        totalprice = ItemAprice + ItemBprice + otherItemPrice;
        totalprice = totalprice >= 150 ? totalprice - 20 : totalprice;

        return totalprice;
    }
}

const productitem = new ProductItem();
module.exports = productitem;