class Category extends Model {

    static get tableName() {
        return 'SHLC01_CATEGORY';
    }

    static get idColumn() {
        return 'categoryId'
    }

}

module.exports = Category;