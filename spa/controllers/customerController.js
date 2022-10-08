/*
 *  * Developed by - mGunawardhana
 *  * Contact email - mrgunawardhana27368@gmail.com
 *  * what's app - 071 - 9043372
 */

/** CUSTOMER PAGE OPTIONS  */

/* load all Customer to table */
function loadAllCustomer() {

    /* removing repeating issue */
    $("#customerTableBody").empty();

    for (let i of customerDetails) {
        let row = `<tr>
                        <td>${i.id}</td>
                        <td>${i.name}</td>
                        <td>${i.address}</td>
                        <td>${i.contact}</td>
                   </tr>`;
        $('#customerTableBody').append(row);
    }
}

/* disabling tab */
$('#cusNameTxt,#cusAddressTxt,#cusContactTxt,#cusIdTxt').on('keydown', function (e) {
    if (e.key === "Tab") {
        e.preventDefault()
    }
})

/* reg-x for customer name text */
$('#cusIdTxt').on('keyup', function (e) {
    if (/^(C-0)[0-9]{2,4}$/.test($('#cusIdTxt').val())) {
        $('#cusIdTxt').css('border', '3px solid green')
        $('#customerIdLbl').text('')
        if (e.key === "Enter") {
            $('#cusNameTxt').focus()
        }
    } else {
        $('#cusIdTxt').css('border', '3px solid red');
        $('#customerIdLbl').text("Your input can't be validated, Ex - C-001 ")
    }
})

/* reg-x for customer name text */
$('#cusNameTxt').on('keyup', function (e) {
    if (/^[A-z]{3,30}$/.test($('#cusNameTxt').val())) {
        $('#cusNameTxt').css('border', '3px solid green')
        $('#customerNameLbl').text('')
        if (e.key === "Enter") {
            $('#cusAddressTxt').focus()
        }
    } else {
        $('#cusNameTxt').css('border', '3px solid red');
        $('#customerNameLbl').text("Your input can't be validated, Ex - mr.Gunawardhana ")
    }
})

/* reg-x for customer address text */
$('#cusAddressTxt').on('keyup', function (e) {
    if (/^[A-z]{3,30}$/.test($('#cusAddressTxt').val())) {
        $('#cusAddressTxt').css('border', '3px solid green')
        $('#customerAddressLbl').text('')
        if (e.key === "Enter") {
            $('#cusContactTxt').focus()
        }
    } else {
        $('#cusAddressTxt').css('border', '3px solid red');
        $('#customerAddressLbl').text("Your input can't be validated, Ex - Galle ")
    }
})

/* reg-x for customer contact text */
$('#cusContactTxt').on('keyup', function (e) {
    if (/^(07([1245678])|091)(-)[0-9]{7}$/.test($('#cusContactTxt').val())) {
        $('#cusContactTxt').css('border', '3px solid green')
        $('#CustomerContactLbl').text('')
        if (e.key === "Enter") {
            saveCustomer()
            $('#cusIdTxt').focus()
        }
    } else {
        $('#cusContactTxt').css('border', '3px solid red');
        $('#CustomerContactLbl').text("Your input can't be validated, Ex - 0719028827 ")
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

    /* customerObject adding into customerDetails object holding Array */
    customerDetails.push(customerObject);

    clearTextField('#cusNameTxt,#cusAddressTxt,#cusContactTxt,#cusIdTxt')

    /* saved notification for customer */
    savedSuccessfully();

    loadAllCustomer()
}

/* saving customer object */
$("#addCustomerBtn").on('click', function () {
    saveCustomer()
});

/* search by pressing enter option in customer form */
$("#srcCustomerId").on('keydown', function (e) {
    let response = search($("#srcCustomerId").val(), customerDetails);
    let key = e.which;
    if (key === 13) {
        if (response) {
            $("#cusIdTxt").val(response.id);
            $("#cusNameTxt").val(response.name);
            $("#cusAddressTxt").val(response.address);
            $('#cusContactTxt').val(response.contact);
        } else {
            clearTextField('#cusNameTxt,#cusAddressTxt,#cusContactTxt,#cusIdTxt')
            searchResultNotFound();
        }
    }
});

/* delete customer */
$('#deleteCustomerBtn').on('click', function () {
    deleteObj('#srcCustomerId', customerDetails)
    clearTextField('#cusNameTxt,#cusAddressTxt,#cusContactTxt,#cusIdTxt,#srcCustomerId')
})

/* update customer */
$('#updateCustomerBtn').on('click',function (){
    update(
        '#srcCustomerId',
        customerDetails,
        '#cusIdTxt',
        '#cusNameTxt',
        '#cusAddressTxt',
        '#cusContactTxt'
    )
    clearTextField('#cusNameTxt,' +
        '#cusAddressTxt,' +
        '#cusContactTxt,' +
        '#cusIdTxt,' +
        '#srcCustomerId'
    )
})