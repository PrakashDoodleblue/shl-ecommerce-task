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
            req.body.itemcode = "SHLPR" + Math.floor(new Date().valueOf() * Math.random());
            const responseData = await productItemModel.query()
                .insert(req.body);

            return resposne.out(req, res, statusCode.HTTP_OK, responseData);
        } catch (err) {
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
}

const productitem = new ProductItem();
module.exports = productitem;