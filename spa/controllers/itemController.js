/*
 *  * Developed by - mGunawardhana
 *  * Contact email - mrgunawardhana27368@gmail.com
 *  * what's app - 071 - 733 1792
 */

/** item code generator */
let itemIdAutoGenerator = 1;
$('#itemIdTxt').val("I-0" + itemIdAutoGenerator);


/** ITEM PAGE OPTIONS - */

/** load all items to table */
function loadAllItems() {

    /** removing table row repeating issue */
    $("#itemTblBody").empty();

    for (let i of itemDetails) {
        let row = `<tr>
                        <td>${i.itemCode}</td>
                        <td>${i.itemName}</td>
                        <td>${i.qty}</td>
                        <td>${i.unitPrice}</td>
                   </tr>`;
        $('#itemTblBody').append(row);
    }
}

/** disabling tab press */
$('#ItemNameTxt,#itemIdTxt,#itemQtyTxt,#unitPriceTxt').on('keydown', function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
})

/** validator for item id txt   */
validator('#itemIdTxt', /^I-[0-9]{1,5}$/,
    "Your input can't be validated, Ex - I-001",
    '#itemIdTxtLbl', '#ItemNameTxt'
);

/** validator for item name txt  */
validator('#ItemNameTxt', /^[A-z]{2,10}$/,
    "Your input can't be validated, Ex - Burger",
    '#itemNameTxtLbl', '#itemQtyTxt'
);

/** validator for item Qty txt  */
validator('#itemQtyTxt', /^[0-9]{1,4}$/,
    "Your input can't be validated, 10 ",
    '#itemQtyTxtLbl', '#unitPriceTxt'
);

/** validator for item unit price txt  */
validator('#unitPriceTxt', /^([0-9]{2,6}.[0-9]{1,2})$/,
    "Your input can't be validated, Ex - 120.99",
    '#itemUnitPriceTxtLbl', '#ItemNameTxt'
);

/** save object in to the array */
function saveItem() {

    /** packing item details into itemObject */
    let item = new Item(
        $("#itemIdTxt").val(),
        $("#ItemNameTxt").val(),
        $("#itemQtyTxt").val(),
        $('#unitPriceTxt').val()
    );


    /** itemObjects adding into itemDetails main Array */
    itemDetails.push(item);

    clearTextField('#ItemNameTxt,#itemIdTxt,#itemQtyTxt,#unitPriceTxt')

    /** saved notification */
    savedSuccessfully();
    loadAllItems();
    itemIdAutoGenerator++;
    $('#itemIdTxt').val("I-0" + itemIdAutoGenerator);
    loadAllItemToCombo();
}

/** save item */
$("#addItemBtn").on('click', function () {
    saveItem();
});

/** search item */
$("#srcItemID").on('keyup', function (e) {
    let response = search($("#srcItemID").val(), itemDetails);
    let key = e.which;
    if (key === 13) {
        if (response) {
            $("#itemIdTxt").val(response.itemCode);
            $("#ItemNameTxt").val(response.itemName);
            $("#itemQtyTxt").val(response.qty);
            $('#unitPriceTxt').val(response.unitPrice);
        } else {
            clearTextField('#ItemNameTxt,#itemIdTxt,#itemQtyTxt,#unitPriceTxt');
            searchResultNotFound();
        }
    }
});

/** delete item */
$('#deleteItemBtn').on('click', function () {
    deleteObj('#srcItemID', itemDetails)
    clearTextField('#ItemNameTxt,#itemIdTxt,#itemQtyTxt,#unitPriceTxt,#srcItemID');
});

/** update item */
$('#updateItemBtn').on('click', function () {
    update('#srcItemID', itemDetails, '#itemIdTxt',
        '#ItemNameTxt', '#itemQtyTxt', '#unitPriceTxt');

    clearTextField('#ItemNameTxt,#itemIdTxt,#itemQtyTxt,#unitPriceTxt,#srcItemID');
    $('#itemIdTxt').val("I-0" + itemIdAutoGenerator);
});