/*
 *
 *  * Developed by - mGunawardhana
 *  * Contact email - mrgunawardhana27368@gmail.com
 *  * what's app - 071 - 9043372
 *
 */

$("#Home").on('click',function () {
    $("#HomePage").show();
    $("#itemForm").hide();
    $("#customerForm").hide();
    $("#orderForm").hide();
});

$("#Customer").on('click',function () {
    $("#HomePage").hide();
    $("#itemForm").hide();
    $("#customerForm").show();
    $("#orderForm").hide();
});

$("#Item").on('click',function () {
    $("#HomePage").hide();
    $("#itemForm").show();
    $("#customerForm").hide();
    $("#orderForm").hide();
});

$("#Order").on('click',function () {
    $("#HomePage").hide();
    $("#itemForm").hide();
    $("#customerForm").hide();
    $("#orderForm").show();
});