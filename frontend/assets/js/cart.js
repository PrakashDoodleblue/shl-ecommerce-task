const baseurl = 'https://localhost:2083/v1/';

$(function() {

    /**
     * @DESC : Qunatity Checks [Add/Minus]
     * @params : string/Int
     * @return array/json
     */

    $('.qty-add-btn').on('click', function() {
        const quantityPlus = Number($(this).prev('input.quantity').val()) + 1;
        $(this).prev('input.quantity').val(quantityPlus);
    });

    $('.qty-minus-btn').on('click', function() {
        let quantityMinus = Number($(this).next('input.quantity').val()) - 1;
        quantityMinus = quantityMinus > 0 ? quantityMinus : 0;
        $(this).next('input.quantity').val(quantityMinus);
    });


    /*
     * DESC : Approve Reject Application     
     */
    // $('.ApproveRejectButton').click(function() {
    //     let AccountId = $(this).data('accountid');
    //     let Status = $(this).data('status');
    //     $.ajax({
    //         url: APP_URL + '/FunderApproveRejectApplication',
    //         method: 'post',
    //         headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    //         data: { Accountid: AccountId, Status: Status },
    //         beforeSend: function() {
    //             $("#loader").show(); //Laoder icon show/hide
    //         },
    //         success: function(data) {
    //             if (data.status == true) {
    //                 $.toaster(data.msg, '', 'success');
    //                 setTimeout(function() {
    //                     if (Status == 'Reject') {
    //                         window.location.href = APP_URL + '/FunderList';
    //                     } else {
    //                         location.reload(true);
    //                     }
    //                 }, 2000);
    //             }
    //             if (data.status == false) {
    //                 $.toaster(data.msg, '', 'danger');
    //                 setTimeout(function() {
    //                     location.reload(true);
    //                 }, 2000);
    //             }
    //         },
    //         complete: function() {
    //             $("#loader").hide(); //Laoder icon show/hide
    //         },
    //         error: function(error) {
    //             $("#loader").hide(); //Laoder icon show/hide
    //             console.log(error.responseJSON.message)
    //             $.toaster(error.responseJSON.message, '', 'danger');
    //         }
    //     });
    // });
});

// /**
//  * @DESC : GET ITEM LIST
//  */
// function getItemList() {
//     $.ajax({
//         url: baseurl + 'item/list',
//         method: 'get',
//         headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
//         data: { Accountid: AccountId, Status: Status },
//         beforeSend: function() {
//             $("#loader").show(); //Laoder icon show/hide
//         },
//         success: function(data) {
//             if (data.status == true) {
//                 $.toaster(data.msg, '', 'success');
//                 setTimeout(function() {
//                     if (Status == 'Reject') {
//                         window.location.href = APP_URL + '/FunderList';
//                     } else {
//                         location.reload(true);
//                     }
//                 }, 2000);
//             }
//             if (data.status == false) {
//                 $.toaster(data.msg, '', 'danger');
//                 setTimeout(function() {
//                     location.reload(true);
//                 }, 2000);
//             }
//         },
//         complete: function() {
//             $("#loader").hide(); //Laoder icon show/hide
//         },
//         error: function(error) {
//             $("#loader").hide(); //Laoder icon show/hide
//             console.log(error.responseJSON.message)
//             $.toaster(error.responseJSON.message, '', 'danger');
//         }
//     });
// }