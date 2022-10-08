/*
 *  * Developed by - mGunawardhana
 *  * Contact email - mrgunawardhana27368@gmail.com
 *  * what's app - 071 - 733 1792
 */

/** ITEM PAGE OPTIONS - */

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

/* reg-x for item name text */
$('#itemIdTxt').on('keyup', function (e) {
    if (/^I-[0-9]{2,5}$/.test($('#itemIdTxt').val())) {
        $('#itemIdTxt').css('border', '3px solid green')
        $('#itemIdTxtLbl').text('')
        if (e.key === "Enter") {
            $('#ItemNameTxt').focus()
        }
    } else {
        $('#itemIdTxt').css('border', '3px solid red');
        $('#itemIdTxtLbl').text("Your input can't be validated, Ex - I-001")
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
        $('#itemQtyTxtLbl').text("Your input can't be validated, 10 ")
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
        $('#addItemBtn').css('disabled', false)
    } else {
        $('#unitPriceTxt').css('border', '3px solid red');
        $('#itemUnitPriceTxtLbl').text("Your input can't be validated, Ex - 120.99  ")
        $('#addItemBtn').css('disabled', true)
    }
})

/* save object in to the array */
function saveItem() {

    /* packing item details into itemObject */
    let itemObject = {
        id: $("#itemIdTxt").val(),
        name: $("#ItemNameTxt").val(),
        qty: $("#itemQtyTxt").val(),
        unitPrice: $('#unitPriceTxt').val()
    }

    /* itemObjects adding into itemDetails main Array */
    itemDetails.push(itemObject);

    clearTextField('#ItemNameTxt,#itemIdTxt,#itemQtyTxt,#unitPriceTxt')

    /* saved notification */
    savedSuccessfully();

    loadAllItems()
}

/* save item */
$("#addItemBtn").on('click', function () {
    saveItem()
});

/* search item */
$("#srcItemID").on('keyup', function (e) {
    let response = search($("#srcItemID").val(), itemDetails);
    let key = e.which;
    if (key === 13) {
        if (response) {
            $("#itemIdTxt").val(response.id);
            $("#ItemNameTxt").val(response.name);
            $("#itemQtyTxt").val(response.qty);
            $('#unitPriceTxt').val(response.unitPrice);
        } else {
            clearTextField('#ItemNameTxt,#itemIdTxt,#itemQtyTxt,#unitPriceTxt')
            searchResultNotFound();
        }
    }
});

/* delete item */
$('#deleteItemBtn').on('click', function () {
    deleteObj('#srcItemID', itemDetails)
    clearTextField('#ItemNameTxt,#itemIdTxt,#itemQtyTxt,#unitPriceTxt')
    $('#srcItemID').val('')
})






