let customerDetails = [];

/** SWEAT ALERTS */
/* sweat alert for saved successfully */
function savedSuccessfully() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        background: '#0B9F43FF',
        color: '#ffffff',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'saved in successfully'
    })
}

/* sweat alerts for search result not found */
function searchResultNotFound() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        background: '#ff4757',
        color: '#ffffff',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'error',
        title: "search result not found !"
    })
}

/** CUSTOMER PAGE OPTIONS  */

/* clear customer details */
function clearCustomerTextFields() {
    $('#cusID,#cusName,#cusAddress,#cusContact').val('');
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
$('#cusName,#cusAddress,#cusContact,#cusID').on('keydown', function (e) {
    if (e.key === "Tab") {
        e.preventDefault()
    }
})

/* shift next text field */
$('#cusID').on('keydown', function (e) {
    if (e.key === "Enter") {
        $('#cusName').focus()
    }
})
$('#cusName').on('keydown', function (e) {
    if (e.key === "Enter") {
        $('#cusAddress').focus()
    }
})
$('#cusAddress').on('keydown', function (e) {
    if (e.key === "Enter") {
        $('#cusContact').focus()
    }
})
$('#cusContact').on('keydown', function (e) {
    if (e.key === "Enter") {
        saveCustomer()
        $('#cusID').focus()
    }

})

/* save customer option */
function saveCustomer() {


    /* packing customer details into customerObject */
    let customerObject = {
        id: $('#cusID').val(),
        name: $('#cusName').val(),
        address: $('#cusAddress').val(),
        contact: $('#cusContact').val()
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
            $("#cusID").val(response.id);
            $("#cusName").val(response.name);
            $("#cusAddress").val(response.address);
            $('#cusContact').val(response.contact);
        } else {
            clearCustomerTextFields();
            searchResultNotFound();
        }
    }
});

let validatorPatternCustomerId = /^(C-)[0-9]{1,2}$/;
let validatorPatternCustomerName = /^[A-z ]{3,20}$/;
let validatorPatternCustomerAddress = /^[A-z ]{4,20}$/;
let validatorPatternCustomerContact = /^([0-9]{10})$/;






