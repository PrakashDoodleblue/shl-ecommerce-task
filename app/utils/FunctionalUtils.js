const constantData = require('../config/Constants').constants();

class FunctionalUtils {

    checkIfcategoryIdPresent(req) {
        let _where = { status: constantData.ACTIVE_STATUS };
        if (req.params.categoryid) {
            _where.categoryId = Number(req.params.categoryid);
        }
        return _where;
    }

    checkIfitemIdPresent(req) {
        let _where = { status: constantData.ACTIVE_STATUS };
        if (req.params.itemid) {
            _where.itemid = Number(req.params.itemid);
        }
        return _where;
    }

    checkIfitemImagePresent(req) {
        let _where = { itemName: req.body.itemName };
        if (req.file) {
            _where.itemImage = req.file.path;
        }
        return _where;
    }

    checkIfpriceIdPresent(req) {
        let _where = { status: constantData.ACTIVE_STATUS };
        if (req.params.priceid) {
            _where.priceId = Number(req.params.priceid);
        }
        return _where;
    }

}


const functionalutils = new FunctionalUtils();
module.exports = functionalutils;