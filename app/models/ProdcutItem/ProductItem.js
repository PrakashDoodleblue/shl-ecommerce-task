const productcategoryModel = require('../Category/Category');
const itemListModel = require('../Itemlist/ItemList');
class ProductItem extends Model {

    static get tableName() {
        return 'SHLC06_PRODUCTITEM';
    }

    static get idColumn() {
        return 'prodcutItemId'
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

module.exports = ProductItem;