const baseController = require('../BaseController');
const itemListModel = require('../../models/Itemlist/ItemList');
const { checkIfitemIdPresent, checkIfitemImagePresent } = require('../../utils/FunctionalUtils');
const constantData = require('../../config/Constants').constants();

class ItemList extends baseController {

    /**
     * @DESC : Add Item
     * @param : string/Int
     * @return : array/object [json]
     */
    addItem = async(req, res) => {
        try {
            const responseData = await itemListModel.query()
                .insert({ itemName: req.body.itemName, itemImage: req.file.path });

            return resposne.out(req, res, statusCode.HTTP_OK, responseData);
        } catch (err) {
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }

    /**
     * @DESC : Item - List
     * @param : string/Int
     * @return : array/object [json]
     */
    itemList = async(req, res) => {
        try {

            const responseData = await itemListModel.query()
                .where(checkIfitemIdPresent(req))
                .select('itemId', 'itemName', rawquery('CONCAT("' + itemImageurl + '", itemImage) as imageurl'));

            return resposne.out(req, res, statusCode.HTTP_OK, responseData);
        } catch (err) {
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }

    /**
     * @DESC : Upadte Item
     * @param : string/Int
     * @return : array/object [json]
     */
    updateItem = async(req, res) => {
        try {
            const responseData = await itemListModel.query()
                .patchAndFetchById(req.body.itemId, checkIfitemImagePresent(req));

            return resposne.out(req, res, statusCode.HTTP_OK, responseData);
        } catch (err) {
            console.log(err);
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }

    /**
     * @DESC : Delete Item
     * @param : string/Int
     * @return : array/object [json]
     */
    deleteItem = async(req, res) => {
        try {
            await itemListModel.query()
                .where({ itemId: req.params.itemid })
                .update({ status: constantData.DEACTIVE_STATUS });
            return resposne.out(req, res, statusCode.HTTP_OK, false);
        } catch (err) {
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }
}

const itemlist = new ItemList();
module.exports = itemlist;