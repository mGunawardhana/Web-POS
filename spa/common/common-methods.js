/*
 *  * Developed by - mGunawardhana
 *  * Contact email - mrgunawardhana27368@gmail.com
 *  * what's app - 071 - 733 1792
 */

/** The purpose of using this script file is to minimize repetitive code. */


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
        if (arrayReferenceName[i].id === id || arrayReferenceName[i].itemCode ===id) {
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

    let SearchResult = search($(textField).val(),arrayRefNameForDelete)
    if (SearchResult != null) {

        let indexOfItem = arrayRefNameForDelete.indexOf(SearchResult)
        arrayRefNameForDelete.splice(indexOfItem, 1)

        //TODO search how to pass method like parameter and remove this waste methods
        /** this two method remove and implement one use ful method */
        loadAllItems();
        loadAllCustomer();
        return true;
    } else {
        return false
    }
}

/** this is text field clear method */
function clearTextField(txtFld){
    /**
     *  if you want to clear any kind of text field you can send it's id into this method as a parameter
     */
    $(txtFld).val('')
}

/** update customer or item */
function update(textField,arrayRef,fstTxtFld,secondTxtFld,thirdTxtFld,FourthTxtFld) {
    let caughtObj = search($(textField).val(),arrayRef);
    if (caughtObj != null) {


        //TODO item has a problem because their object properties are not equal resolve this
        caughtObj.itemCode = $(fstTxtFld).val();
        caughtObj.id = $(fstTxtFld).val();

        caughtObj.itemName = $(secondTxtFld).val();
        caughtObj.name = $(secondTxtFld).val();

        caughtObj.address = $(thirdTxtFld).val();
        caughtObj.qty = $(thirdTxtFld).val();

        caughtObj.contact = $(FourthTxtFld).val();
        caughtObj.unitPrice =$(FourthTxtFld).val();

        //TODO search how to pass method like parameter and remove this waste methods
        /** this two method remove and implement one use ful method */
        loadAllCustomer();
        loadAllItems();
        return true;
    } else {
        return false;
    }
}

/** regular expression matcher */

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


