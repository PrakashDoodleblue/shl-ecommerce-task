//DESC : Category Routes Defined Here
const categoryController = require('../controller/Category/Category');
router.post('/category/add', categoryController.addCategory);
router.get('/category/list/:categoryid?', categoryController.categoryList);
router.put('/category/update', categoryController.updateCategory);
router.delete('/category/delete/:categoryid', categoryController.deleteCategory);

//DESC: ItemList Routes Defined Here
const itemListController = require('../controller/Itemlist/ItemList');
router.post('/items/add', fileUpload.single('itemImage'), itemListController.addItem);
router.get('/items/list/:itemid?', itemListController.itemList);
router.put('/items/update', fileUpload.single('itemImage'), itemListController.updateItem);
router.delete('/items/delete/:itemid', itemListController.deleteItem);

//DESC: Price List Routes Defined Here
const priceController = require('../controller/Price/Price');
router.post('/price/add', priceController.addPrice);
router.get('/price/list/:priceid?', priceController.priceList);
router.put('/price/update', priceController.updatePrice);
router.delete('/price/delete/:priceid', priceController.deletePrice);

//DESC: Product Item List Routes Defined Here
const productItemController = require('../controller/ProdcutItem/ProductItem');
router.post('/product/add', productItemController.addProductItem);
// router.get('/price/list/:priceid?', priceController.priceList);
// router.put('/price/update', priceController.updatePrice);
// router.delete('/price/delete/:priceid', priceController.deletePrice);
module.exports = router;