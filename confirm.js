function nutcancel(){
    window.location.href = "html.html"
}

function init(){
    var firstname = document.getElementById("confirm1");
    var mail = document.getElementById("confirm2");
    var sodienthoai = document.getElementById("confirm3");
    var nghenghiep = document.getElementById("confirm_nghiep");
    var khoahoc = document.getElementById("khoahoc");
    var payment = document.getElementById("thethanhtoan");
    var tongsotien = document.getElementById("tongsotien");

    firstname.textContent = sessionStorage.firstname + " " + sessionStorage.lastname;
    mail.textContent = sessionStorage.mail;
    sodienthoai.textContent = sessionStorage.sodienthoai;
    nghenghiep.textContent = sessionStorage.nghenghiep;
    payment.textContent = sessionStorage.payment;

    var tongtien = 0
    var khoahoccuaban = ""
    if(sessionStorage.python == "true"){
        tongtien += 449;
        khoahoccuaban += "python, ";
    }
    if(sessionStorage.java == "true"){
        tongtien += 799;
        khoahoccuaban += "java, ";
    }
    if(sessionStorage.sql == "true"){
        tongtien += 299;
        khoahoccuaban += "SQL, ";
    }
    if(sessionStorage.js == "true"){
        tongtien += 749;
        khoahoccuaban += "JS, ";
    }
    khoahoccuaban = khoahoccuaban.substring(0, khoahoccuaban.length - 2);
    khoahoc.textContent = khoahoccuaban;
    tongsotien.textContent = tongtien;

    var cancel = document.getElementById("cancel");
    cancel.onclick = nutcancel;
}
window.onload = init;