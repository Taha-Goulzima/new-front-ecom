function vaidateProductTitleInput(title) {
    if (!title) {
        document.getElementById("productName").style.borderColor = "red";
        document.getElementById("error").textContent='the valeus could not be empty';
        return false;
    }
    return true;
}

function validateEditProductTitileInput(title) {
     if (!title) {
       document.getElementById("editinput").style.borderColor = "red";
       document.getElementById("error").textContent =
           "the valeus could not be empty";
         console.log('hello')
       return false;
     }
     return true;
}