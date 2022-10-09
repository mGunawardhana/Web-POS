
// /* validator for item id text field */
// validator
// (
//     '#itemIdTxt',
//     /^I-[0-9]{2,5}$/,
//     "Your input can't be validated, Ex - I-001",
//     '#itemIdTxtLbl',
//     '#ItemNameTxt'
// )
//
// /* validator for item name text field */
// validator
// (
//     '#ItemNameTxt',
//     /^[A-z]{2,10}$/,
//     "Your input can't be validated, Ex - Burger",
//     '#itemNameTxtLbl',
//     '#itemQtyTxt'
// )
//
// /* validator for item qty text field */
// validator
// (
//     '#itemQtyTxt',
//     /^[1-9]{1,4}$/,
//     "Your input can't be validated, 10",
//     '#itemQtyTxtLbl',
//     '#unitPriceTxt'
// )
//
// /* validator for item unit price text field */
// validator
// (
//     '#unitPriceTxt',
//     /^([0-9]{2,6}.[0-9]{1,2})$/,
//     "Your input can't be validated, Ex - 120.99",
//     '#itemUnitPriceTxtLbl',
//     '#itemIdTxt',
//     'saveItem()'
//
// )

// let saveItem = function (){
//     /* packing item details into itemObject */
//     let itemObject = {
//         itemCode: $("#itemIdTxt").val(),
//         itemName: $("#ItemNameTxt").val(),
//         qty: $("#itemQtyTxt").val(),
//         unitPrice: $('#unitPriceTxt').val()
//     }
//
//     /* itemObjects adding into itemDetails main Array */
//     itemDetails.push(itemObject);
//
//     clearTextField(
//         '#ItemNameTxt,' +
//         '#itemIdTxt,' +
//         '#itemQtyTxt,' +
//         '#unitPriceTxt'
//     )
//
//     /* saved notification */
//     savedSuccessfully();
//     loadAllItems();
// }

//
// /* reg-x for item unit price text */
// $('#unitPriceTxt').on('keyup', function (e) {
//     if (/^([0-9]{2,6}.[0-9]{1,2})$/.test($('#unitPriceTxt').val())) {
//         $('#unitPriceTxt').css('border', '3px solid green')
//         $('#itemUnitPriceTxtLbl').text('')
//         if (e.key === "Enter") {
//             saveItem()
//             $('#itemIdTxt').focus()
//         }
//         $('#addItemBtn').css('disabled', false)
//     } else {
//         $('#unitPriceTxt').css('border', '3px solid red');
//         $('#itemUnitPriceTxtLbl').text("Your input can't be validated, Ex - 120.99  ")
//         $('#addItemBtn').css('disabled', true)
//     }
// })

// /* reg-x for item qty text */
// $('#itemQtyTxt').on('keyup', function (e) {
//     if (/^[1-9]{1,4}$/.test($('#itemQtyTxt').val())) {
//         $('#itemQtyTxt').css('border', '3px solid green')
//         $('#itemQtyTxtLbl').text('')
//         if (e.key === "Enter") {
//             $('#unitPriceTxt').focus()
//         }
//     } else {
//         $('#itemQtyTxt').css('border', '3px solid red');
//         $('#itemQtyTxtLbl').text("Your input can't be validated, 10 ")
//     }
// })

//
// /* reg-x for item name text */
// $('#ItemNameTxt').on('keyup', function (e) {
//     if (/^[A-z]{2,10}$/.test($('#ItemNameTxt').val())) {
//         $('#ItemNameTxt').css('border', '3px solid green')
//         $('#itemNameTxtLbl').text('')
//         if (e.key === "Enter") {
//             $('#itemQtyTxt').focus()
//         }
//     } else {
//         $('#ItemNameTxt').css('border', '3px solid red');
//         $('#itemNameTxtLbl').text("Your input can't be validated, Ex - Burger  ")
//     }
// })
// /* reg-x for item name text */
// $('#itemIdTxt').on('keyup', function (e) {
//     if (/^I-[0-9]{2,5}$/.test($('#itemIdTxt').val())) {
//         $('#itemIdTxt').css('border', '3px solid green')
//         $('#itemIdTxtLbl').text('')
//         if (e.key === "Enter") {
//             $('#ItemNameTxt').focus()
//         }
//     } else {
//         $('#itemIdTxt').css('border', '3px solid red');
//         $('#itemIdTxtLbl').text("Your input can't be validated, Ex - I-001")
//     }
// })

// /** regular expression matcher */
// function validator(txtField, regXPattern, warningText, errorLbl, nextTxtField) {
//     $(txtField).on('keyup', function (e) {
//
//             if (regXPattern.test($(txtField).val())) {
//                 $(txtField).css('border', '3px solid green');
//                 $(errorLbl).text('');
//
//                 if (e.key === "Enter" && txtField !== ("#unitPriceTxt" ||  "#cusContactTxt")) {
//                     $(nextTxtField).focus();
//
//                 } else if (e.key === "Enter" && txtField === "#unitPriceTxt") {
//
//                     saveItem();
//                     $(nextTxtField).focus();
//                     console.log(nextTxtField)
//
//                 } else if (e.key === "Enter" || txtField === "#cusContactTxt") {
//
//                     //#cusContactTxt
//
//                     alert("hello" + txtField)
//                     saveCustomer();
//
//                     $(nextTxtField).focus();
//
//                 } else {
//                     return false;
//                 }
//
//
//             } else {
//                 $(txtField).css('border', '3px solid red');
//                 $(errorLbl).text(warningText);
//             }
//         }
//     )
// }
//
