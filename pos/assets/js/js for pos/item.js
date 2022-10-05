let itemDetails = [];

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

/** ITEM PAGE OPTIONS - */

/* clear item details */
function clearItemTextFields() {
    $('#itemIdTxt,#ItemNameTxt,#itemQtyTxt,#unitPriceTxt').val('');
}

/* load all items to table */
function loadAllItems() {
    /* removing table row repeating issue */
    $("#itemTblBody").empty();

    for (let i of itemDetails) {
        let row = `<tr>
                        <td>${i.id}</td>
                        <td>${i.name}</td>
                        <td>${i.qty}</td>
                        <td>${i.unitPrice}</td>
                   </tr>`;
        $('#itemTblBody').append(row);
    }
}

/* disabling tab press */
$('#ItemNameTxt,#itemIdTxt,#itemQtyTxt,#unitPriceTxt').on('keydown', function (e) {
    if (e.key === "Tab") {
        e.preventDefault()
    }
})

/* save item details */
function saveItem() {

    /* packing item details into itemObject */
    let itemObject = {
        id: $("#itemIdTxt").val(),
        name: $("#ItemNameTxt").val(),
        qty: $("#itemQtyTxt").val(),
        unitPrice: $('#unitPriceTxt').val()
    }

    clearItemTextFields()

    /* itemObjects adding into itemDetails main Array */
    itemDetails.push(itemObject);

    loadAllItems()

    /* saved notification */
    savedSuccessfully();
}

/* adding item details to array */
$("#addItemBtn").on('click', function () {
    saveItem()
});

/* search item */
function searchByItemID(id) {
    for (let i = 0; i < itemDetails.length; i++) {
        if (itemDetails[i].id === id) {
            return itemDetails[i];
        }
    }
}

/* search by pressing enter option in item form */
$("#srcItemID").on('keyup', function (e) {
    let response = searchByItemID($("#srcItemID").val());
    let key = e.which;
    if (key === 13) {
        if (response) {
            $("#itemIdTxt").val(response.id);
            $("#ItemNameTxt").val(response.name);
            $("#itemQtyTxt").val(response.qty);
            $('#unitPriceTxt').val(response.unitPrice);
        } else {
            clearItemTextFields();
            searchResultNotFound();
        }
    }
});

/* reg-x for item id text */
$('#itemIdTxt').on('keyup', function (e) {

    if (/^I-[0-9]{2,5}$/.test($('#itemIdTxt').val())) {
        $('#itemIdTxt').css('border', '3px solid green')
        $('#itemIdTxtLbl').text('')
        if (e.key === "Enter") {
            $('#ItemNameTxt').focus()
        }
    } else {
        $('#itemIdTxt').css('border', '3px solid red');
        $('#itemIdTxtLbl').text("Your input can't be validated, Ex - I-001  ")

    }
})

/* reg-x for item name text */
$('#ItemNameTxt').on('keyup', function (e) {
    if (/^[A-z]{2,10}$/.test($('#ItemNameTxt').val())) {
        $('#ItemNameTxt').css('border', '3px solid green')
        $('#itemNameTxtLbl').text('')
        if (e.key === "Enter") {
            $('#itemQtyTxt').focus()
        }
    } else {
        $('#ItemNameTxt').css('border', '3px solid red');
        $('#itemNameTxtLbl').text("Your input can't be validated, Ex - Burger  ")
    }
})

/* reg-x for item qty text */
$('#itemQtyTxt').on('keyup', function (e) {
    if (/^[1-9]{1,4}$/.test($('#itemQtyTxt').val())) {
        $('#itemQtyTxt').css('border', '3px solid green')
        $('#itemQtyTxtLbl').text('')
        if (e.key === "Enter") {
            $('#unitPriceTxt').focus()
        }
    } else {
        $('#itemQtyTxt').css('border', '3px solid red');
        $('#itemQtyTxtLbl').text("Your input can't be validated, Ex - 0 < x  ")
    }
})

/* reg-x for item unit price text */
$('#unitPriceTxt').on('keyup', function (e) {
    if (/^([0-9]{2,6}.[0-9]{1,2})$/.test($('#unitPriceTxt').val())) {
        $('#unitPriceTxt').css('border', '3px solid green')
        $('#itemUnitPriceTxtLbl').text('')
        if (e.key === "Enter") {
            saveItem()
            $('#itemIdTxt').focus()
        }
    } else {
        $('#unitPriceTxt').css('border', '3px solid red');
        $('#itemUnitPriceTxtLbl').text("Your input can't be validated, Ex - 120.99  ")
    }
})






