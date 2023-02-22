function validate() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value;
    let nregx = /^[a-z A-Z]{2,15}$/;
    let eregx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (n == "") {
        alert("Name is mandatory!");
        return false;
    } else if (e == "") {
        alert("Email is mandatory!");
    } else if (!nregx.test(n)) {
        alert(
            "Name must only contain letters and minimum should be 2 characters!"
        );
        return false;
    } else if (!eregx.test(e)) {
        alert("Not a valid email");
        return false;
    } else {
        return true;
    }
}
