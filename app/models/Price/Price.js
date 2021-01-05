const { isSchema } = require('joi');
const BaseModel = require('../../../knexfile');
const schema = BaseModel.defaultSchema.BaseModel;
const productcategoryModel = require('../Category/Category');
const itemListModel = require('../Itemlist/ItemList');
class Price extends Model {

    static get tableName() {
        return 'SHLC03_PRODUCTPRICE';
    }

    static get idColumn() {
        return 'priceId'
    }

    static get relationMappings() {
        return {
            productcategory: {
                relation: Model.HasManyRelation,
                modelClass: productcategoryModel,
                join: {
                    from: 'SHLC01_CATEGORY.categoryId',
                    to: 'SHLC03_PRODUCTPRICE.productCategoryId'
                }
            },
            ItemList: {
                relation: Model.HasOneRelation,
                modelClass: itemListModel,
                join: {
                    from: 'SHLC02_ITEMLIST.itemId',
                    to: 'SHLC03_PRODUCTPRICE.ItemlistId'
                }
            }
        }
    }


}

module.exports = Price;