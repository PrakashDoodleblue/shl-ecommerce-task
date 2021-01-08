const baseController = require('../BaseController');
const priceModel = require('../../models/Price/Price');
const { checkIfpriceIdPresent } = require('../../utils/FunctionalUtils');
const constantData = require('../../config/Constants').constants();

class Price extends baseController {

    /**
     * @DESC : Add Price
     * @param : string/Int
     * @return : array/object [json]
     */
    addPrice = async(req, res) => {
        try {
            const responseData = await priceModel.query()
                .insert(req.body);

            return resposne.out(req, res, statusCode.HTTP_OK, responseData);
        } catch (err) {
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }

    /**
     * @DESC : Price - List
     * @param : string/Int
     * @return : array/object [json]
     */
    priceList = async(req, res) => {
        try {
            const responseData = await priceModel.query()
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
     * @DESC : Upadte Price
     * @param : string/Int
     * @return : array/object [json]
     */
    updatePrice = async(req, res) => {
        try {
            const { categoryId, categoryName } = req.body;
            const responseData = await priceModel.query()
                .patchAndFetchById(categoryId, { categoryName: categoryName });

            return resposne.out(req, res, statusCode.HTTP_OK, responseData);
        } catch (err) {
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }

    /**
     * @DESC : Delete Price
     * @param : string/Int
     * @return : array/object [json]
     */
    deletePrice = async(req, res) => {
        try {
            await priceModel.query()
                // .deleteById(req.params.categoryid); //harddelete
                .where({ categoryId: req.params.categoryid })
                .update({ status: constantData.DEACTIVE_STATUS });
            return resposne.out(req, res, statusCode.HTTP_OK, false);
        } catch (err) {
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }
}

const price = new Price();
module.exports = price;