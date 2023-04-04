function changename(params) {
    const a = document.getElementById("js");
    const inputvalue = document.getElementById ("inputfield").value;
    a.innerHTML = inputvalue;
    if (inputvalue !="Majidadi")  {
        alert("its is not Majidadi");
    }
}