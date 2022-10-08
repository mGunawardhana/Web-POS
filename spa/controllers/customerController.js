/*
 *
 *  * Developed by - mGunawardhana
 *  * Contact email - mrgunawardhana27368@gmail.com
 *  * what's app - 071 - 9043372
 *
 */

/** CUSTOMER PAGE OPTIONS  */

/* clear customer details */
function clearCustomerTextFields() {
    $('#cusIdTxt,#cusNameTxt,#cusAddressTxt,#cusContactTxt').val('');
}

/* load all Customer to table */
function loadAllCustomer() {
    /* removing repeating issue */
    $("#customerTableBody").empty();

    for (let i of customerDetails) {
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.contact}</td></tr>`;
        $('#customerTableBody').append(row);
    }
}

/* disabling tab */
$('#cusNameTxt,#cusAddressTxt,#cusContactTxt,#cusIdTxt').on('keydown', function (e) {
    if (e.key === "Tab") {
        e.preventDefault()
    }
})

/* save customer option */
function saveCustomer() {

    /* packing customer details into customerObject */
    let customerObject = {
        id: $('#cusIdTxt').val(),
        name: $('#cusNameTxt').val(),
        address: $('#cusAddressTxt').val(),
        contact: $('#cusContactTxt').val()
    }

    console.log(customerObject.toString())

    clearCustomerTextFields();

    /* saved notification for customer */
    savedSuccessfully();

    /* customerObject adding into customerDetails object holding Array */
    customerDetails.push(customerObject);

    loadAllCustomer()
}

/* saving customer object */
$("#addCustomerBtn").on('click', function () {
    saveCustomer()
});

/* search customer */
function searchByCustomerID(id) {
    for (let i = 0; i < customerDetails.length; i++) {
        if (customerDetails[i].id === id) {
            return customerDetails[i];
        }
    }
}

/* search by pressing enter option in customer form */
$("#srcCustomerId").on('keydown', function (e) {

    let response = searchByCustomerID($("#srcCustomerId").val());
    let key = e.which;

    if (key === 13) {
        if (response) {
            $("#cusIdTxt").val(response.id);
            $("#cusNameTxt").val(response.name);
            $("#cusAddressTxt").val(response.address);
            $('#cusContactTxt').val(response.contact);
        } else {
            clearCustomerTextFields();
            searchResultNotFound();
        }
    }
});

/* reg-x for customer id text */
validator(
    '#cusIdTxt',
    /^(C-)[0-9]{2,4}$/,
    "Your input can't be validated, Ex - C-001  ",
    '#customerIdLbl',
    '#cusNameTxt')




//
// /* reg-x for customer name text */
// $('#cusNameTxt').on('keyup', function (e) {
//     if (/^[A-z ]{3,20}$/.test($('#cusNameTxt').val())) {
//
//         $('#cusNameTxt').css('border', '3px solid green')
//         $('#customerNameLbl').text('')
//
//         if (e.key === "Enter") {
//             $('#cusAddressTxt').focus()
//         }
//
//     } else {
//
//         $('#cusNameTxt').css('border', '3px solid red');
//         $('#customerNameLbl').text("Your input can't be validated, Ex - Mahesh  ")
//     }
// })
//
// /* reg-x for customer address text */
// $('#cusAddressTxt').on('keyup', function (e) {
//     if (/^[A-z ]{4,20}$/.test($('#cusAddressTxt').val())) {
//
//         $('#cusAddressTxt').css('border', '3px solid green')
//         $('#customerAddressLbl').text('')
//
//         if (e.key === "Enter") {
//             $('#cusContactTxt').focus()
//         }
//
//     } else {
//
//         $('#cusAddressTxt').css('border', '3px solid red');
//         $('#customerAddressLbl').text("Your input can't be validated, Ex - Galle ")
//     }
// })
//
// /* reg-x for customer contact text */
// $('#cusContactTxt').on('keyup', function (e) {
//     if (/^([0-9]{10})$/.test($('#cusContactTxt').val())) {
//
//         $('#cusContactTxt').css('border', '3px solid green')
//         $('#CustomerContactLbl').text('')
//
//         if (e.key === "Enter") {
//             saveCustomer()
//             $('#cusIdTxt').focus()
//         }
//     } else {
//
//         $('#cusContactTxt').css('border', '3px solid red');
//         $('#CustomerContactLbl').text("Your input can't be validated, Ex - 0719028827 ")
//     }
// })

