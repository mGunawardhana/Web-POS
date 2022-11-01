/*
 *
 *  * Developed by - mGunawardhana
 *  * Contact email - mrgunawardhana27368@gmail.com
 *  * what's app - 071 - 9043372
 *
 */

/** default options */
$("#itemForm,#header,#HomePage").hide();

/** initializing user name */
const userName = 'maneesha';

/** initializing password */
const pwd = "123";

/** user name and password checker */
$('#loginBtn').on('click', function () {
    if (userName === $('#usernameTxt').val()) {
        if (pwd === $('#passwordTxt').val()) {
    $('#loginPage').hide();
    $("#header,#HomePage").show();
        }
    }
});

/** click event for Home button */
$("#Home").on('click', function () {
    $("#customerForm,#itemForm,#orderForm,#orderDetailsForm").hide();
    $("#HomePage").show();
});

/** click event for Customer button */
$("#Customer").on('click', function () {
    $("#HomePage,#itemForm,#orderForm,#orderDetailsForm").hide();
    $("#customerForm").show();
});

/** click event for Item button */
$("#Item").on('click', function () {
    $("#HomePage,#customerForm,#orderForm,#orderDetailsForm").hide();
    $("#itemForm").show();
});

/** click event for Order button */
$("#Order").on('click', function () {
    $("#HomePage,#customerForm,#itemForm,#orderDetailsForm").hide();
    $("#orderForm").show();
});

/** click event for Order Details button */
$("#orderDetails").on('click', function () {
    $("#HomePage,#itemForm,#customerForm,#orderForm").hide();
    $("#orderDetailsForm").show();
});


// /** button moving */
// $('#passwordTxt').on('keypress', function (e) {
    // let btn = document.querySelector(".btnFunny");
    // let position;

//     if ((pwd != $('#passwordTxt').val()) && (userName === $('#usernameTxt').val()) ) {
//
//         // btn.addEventListener('mouseover', function () {
//         //     position ? (position = 0) : (position = 200);
//         //     btn.style.transform = `translate(${position}px,0px)`;
//         //     btn.style.transition = "all 0.3s ease";
//         // });
//
//     } else {
//         //
//         // btn.preventDefault();
//         // btn.removeEventListener('mouseover',function (){
//         //     position ? (position = 0) : (position = 200);
//         //     btn.style.transform = `translate(${position}px,0px)`;
//         //     btn.style.transition = "all 0.3s ease";
//         // });
//         return false;
//     }
// });
//
