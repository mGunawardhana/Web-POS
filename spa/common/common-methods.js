/*
 *  * Developed by - mGunawardhana
 *  * Contact email - mrgunawardhana27368@gmail.com
 *  * what's app - 071 - 9043372
 */

/** SWEAT ALERTS */

/** sweat alert for saved successfully */
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

/** sweat alerts for search result not found */
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

/** search any Object in arraylist */
function search(id,arrayReferenceName) {

    /**
     * arrayReferenceName - Enter the reference name of the array you want to select object
     * id - Enter the ID you want to search here.
     */

    for (let i = 0; i < arrayReferenceName.length; i++) {
        if (arrayReferenceName[i].id === id) {
            return arrayReferenceName[i];
        }
    }
}

/** delete any object in arraylist */
function deleteObj(textField,arrayRefNameForDelete){

    /**
     * arrayRefNameForDelete - Enter the reference name of the array you want to select object
     * textField - Enter the ID here in the text field where you type the ID you want to select.
     */

    let itemSearchResult = search($(textField).val(),arrayRefNameForDelete)
    if (itemSearchResult != null) {

        let indexOfItem = arrayRefNameForDelete.indexOf(itemSearchResult)
        arrayRefNameForDelete.splice(indexOfItem, 1)
        loadAllItems()
        return true;

    } else {
        return false
    }

}










// /** update customer or item */
// function update(){
// let searchValue =
// }
//
// function updateCustomer(customerID) {
//     let customer = searchCustomer(customerID);
//     if (customer != null) {
//         customer.id = $("#txtCustomerID").val();
//         customer.name = $("#txtCustomerName").val();
//         customer.address = $("#txtCustomerAddress").val();
//         customer.salary = $("#txtCustomerSalary").val();
//         loadAllCustomers();
//         return true;
//     } else {
//         return false;
//     }
//
// }

/** regular expression matcher */
/*
function validator(txtField,regXPattern,warningText,errorLbl,nextTxtField){
    $(txtField).on('keyup', function (e) {
        if (regXPattern.test($(txtField).val())) {
            $(txtField).css('border', '3px solid green')
            $(errorLbl).text('')
            if (e.key === "Enter") {
                $(nextTxtField).focus()
            }
        } else {
            $(txtField).css('border', '3px solid red');
            $(errorLbl).text(warningText)
        }
    })
}
*/

