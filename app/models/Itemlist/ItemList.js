class ItemList extends Model {

    static get tableName() {
        return 'SHLC02_ITEMLIST';
    }

    static get idColumn() {
        return 'itemId'
    }

}

module.exports = ItemList;