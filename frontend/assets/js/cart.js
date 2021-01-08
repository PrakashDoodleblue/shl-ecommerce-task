const baseurl = 'http://localhost:2082/v1/';

$(function() {

    getItemList()
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

/**
 * @DESC : GET ITEM LIST
 */
function getItemList() {
    $.ajax({
        url: baseurl + 'price/list',
        method: 'get',
        success: function(response) {
            console.log(response.data);
            if (data.status == true) {}
        }
    });
}