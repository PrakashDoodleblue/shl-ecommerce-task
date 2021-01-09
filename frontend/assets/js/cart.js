const APP_URL = 'http://localhost:2082/api/v1/'; //TODO will configure

$(function() {

    /**
     * @DESC : Qunatity Checks [Add/Minus]
     * @params : string/Int
     * @return array/json
     */

    $('.qty-add-btn').on('click', function() {
        const quantityPlus = Number($(this).prev('input.quantity').val()) + 1;
        $(this).prev('input.quantity').val(quantityPlus);
        $(this).data().quantity = quantityPlus;
        priceCalculation($(this).data()); //callback

    });

    $('.qty-minus-btn').on('click', function() {
        let quantityMinus = Number($(this).next('input.quantity').val()) - 1;
        quantityMinus = quantityMinus > 0 ? quantityMinus : 0;
        $(this).next('input.quantity').val(quantityMinus);
        if (quantityMinus > 0) {
            $(this).data().quantity = quantityMinus;
            priceCalculation($(this).data()); //callback
        }
    });
});

/**
 * @DESC : Price Calculation
 * @param:string/int
 * @returns array/json
 */
function priceCalculation(requestData) {
    const requestpayload = {
        productCategoryId: requestData.categoryid,
        prodcutItemListId: requestData.itemid,
        productpriceId: requestData.priceid,
        quantity: requestData.quantity,
        Itemprice: requestData.price
    }

    $.ajax({
        url: APP_URL + 'product/add',
        method: 'post',
        data: requestpayload,
        success: function(response) {
            if (response.status) {
                $('.temp-amt').text(response.data.totalAmount);
                $('.tem-total-amt').text(response.data.totalAmount);
                $('.cart-count').text(response.data.totalItems);
            }
        }
    });
}