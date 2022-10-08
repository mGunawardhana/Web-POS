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

