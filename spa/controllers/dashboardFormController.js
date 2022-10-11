/*
 *
 *  * Developed by - mGunawardhana
 *  * Contact email - mrgunawardhana27368@gmail.com
 *  * what's app - 071 - 9043372
 *
 */

$("#Home").on('click',function () {
    $("#HomePage").show();
    $("#customerForm").hide();
    $("#itemForm").hide();
    $("#orderForm").hide();
    $("#orderDetailsForm").hide();
});

$("#Customer").on('click',function () {
    $("#HomePage").hide();
    $("#customerForm").show();
    $("#itemForm").hide();
    $("#orderForm").hide();
    $("#orderDetailsForm").hide();
});

$("#Item").on('click',function () {
    $("#HomePage").hide();
    $("#customerForm").hide();
    $("#itemForm").show();
    $("#orderForm").hide();
    $("#orderDetailsForm").hide();
});

$("#Order").on('click',function () {
    $("#HomePage").hide();
    $("#customerForm").hide();
    $("#itemForm").hide();
    $("#orderForm").show();
    $("#orderDetailsForm").hide();

});

$("#orderDetails").on('click',function () {
    $("#HomePage").hide();
    $("#itemForm").hide();
    $("#customerForm").hide();
    $("#orderForm").hide();
    $("#orderDetailsForm").show();
});
