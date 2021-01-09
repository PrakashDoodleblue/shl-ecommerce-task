const baseController = require('../BaseController');
const categoryModel = require('../../models/Category/Category');
const { checkIfcategoryIdPresent } = require('../../utils/FunctionalUtils');
const constantData = require('../../config/Constants').constants();

class Category extends baseController {

    /**
     * @DESC : Add Category
     * @param : string/Int
     * @return : array/object [json]
     */
    addCategory = async(req, res) => {
        try {
            const responseData = await categoryModel.query()
                .insert(req.body)
                .select('categoryid', 'categoryName');

            return resposne.out(req, res, statusCode.HTTP_OK, responseData);
        } catch (err) {
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }

    /**
     * @DESC : Category - List
     * @param : string/Int
     * @return : array/object [json]
     */
    categoryList = async(req, res) => {
        try {
            const responseData = await categoryModel.query()
                .where(checkIfcategoryIdPresent(req))
                .select('categoryid', 'categoryName');
            return resposne.out(req, res, statusCode.HTTP_OK, responseData);
        } catch (err) {
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }

    /**
     * @DESC : Upadte Category
     * @param : string/Int
     * @return : array/object [json]
     */
    updateCategory = async(req, res) => {
        try {
            const { categoryId, categoryName } = req.body;
            const responseData = await categoryModel.query()
                .patchAndFetchById(categoryId, { categoryName: categoryName });

            return resposne.out(req, res, statusCode.HTTP_OK, responseData);
        } catch (err) {
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }

    /**
     * @DESC : Delete Category
     * @param : string/Int
     * @return : array/object [json]
     */
    deleteCategory = async(req, res) => {
        try {
            await categoryModel.query()
                // .deleteById(req.params.categoryid); //harddelete
                .where({ categoryId: req.params.categoryid })
                .update({ status: constantData.DEACTIVE_STATUS });
            return resposne.out(req, res, statusCode.HTTP_OK, false);
        } catch (err) {
            return resposne.out(req, res, statusCode.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }
}

const category = new Category();
module.exports = category;