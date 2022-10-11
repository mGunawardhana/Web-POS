/*
 *  * Developed by - mGunawardhana
 *  * Contact email - mrgunawardhana27368@gmail.com
 *  * what's app - 071 - 9043372
 */

/** customer id generator */
let customerIdAutoGenerator = 1;
$('#cusIdTxt').val("C-0"+customerIdAutoGenerator);

/** CUSTOMER PAGE OPTIONS  */

/** load all Customer to table */
function loadAllCustomer() {

    /** removing repeating issue */
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

/** disabling tab */
$('#cusNameTxt,#cusAddressTxt,#cusContactTxt,#cusIdTxt').on('keydown', function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
})

/** validator for customer id txt ^(C-0)[0-9]{1,4}$ */
validator(
    '#cusIdTxt', /^(C-0)[0-9]{1,4}$/,
    "Your input can't be validated, Ex - C-001",
    '#customerIdLbl', '#cusNameTxt'
)

/** validator for customer name txt */
validator(
    '#cusNameTxt', /^[A-z]{3,30}$/,
    "Your input can't be validated, Ex - mr.Gunawardhana",
    '#customerNameLbl', '#cusAddressTxt'
)

/** validator for customer address txt */
validator(
    '#cusAddressTxt', /^[A-z]{3,30}$/,
    "Your input can't be validated, Ex - Galle ",
    '#customerAddressLbl', '#cusContactTxt'
)

/** validator for customer contact txt */
validator(
    '#cusContactTxt', /^(07([1245678])|091)(-)[0-9]{7}$/,
    "Your input can't be validated, Ex - 0719028827",
    '#CustomerContactLbl', '#cusNameTxt'
)

/** save customer option */
function saveCustomer() {

    /** packing customer details into customerObject */
    let customerObject = {
        id: $('#cusIdTxt').val(),
        name: $('#cusNameTxt').val(),
        address: $('#cusAddressTxt').val(),
        contact: $('#cusContactTxt').val()
    }

    /** customerObject adding into customerDetails object holding Array */
    customerDetails.push(customerObject);

    clearTextField('#cusNameTxt,#cusAddressTxt,#cusContactTxt,#cusIdTxt');

    /** saved notification for customer */
    savedSuccessfully();

    loadAllCustomer();
    customerIdAutoGenerator++;
    $('#cusIdTxt').val("C-0"+customerIdAutoGenerator);
    loadAllCustomersToCombo();
}

/** saving customer object */
$("#addCustomerBtn").on('click', function () {
    saveCustomer();
});

/** search by pressing enter option in customer form */
$("#srcCustomerId").on('keydown', function (e) {
    let response = search($("#srcCustomerId").val(), customerDetails);
    let key = e.which;
    if (key === 13) {
        if (response) {
            $("#cusIdTxt").val(response.id);
            $("#cusNameTxt").val(response.name);
            $("#cusAddressTxt").val(response.address);
            $("#cusContactTxt").val(response.contact);
        } else {
            clearTextField('#cusNameTxt,#cusAddressTxt,#cusContactTxt,#cusIdTxt');
            searchResultNotFound();
        }
    }
});

/** delete customer */
$('#deleteCustomerBtn').on('click', function () {
    deleteObj('#srcCustomerId', customerDetails);
    clearTextField('#cusNameTxt,#cusAddressTxt,#cusContactTxt,#cusIdTxt,#srcCustomerId');
})

/** update customer */
$('#updateCustomerBtn').on('click',function (){
    update(
        '#srcCustomerId', customerDetails, '#cusIdTxt',
        '#cusNameTxt', '#cusAddressTxt', '#cusContactTxt'
    );
    clearTextField('#cusNameTxt,#cusAddressTxt,#cusContactTxt,#cusIdTxt,#srcCustomerId');
    $('#cusIdTxt').val("C-0"+customerIdAutoGenerator);
})