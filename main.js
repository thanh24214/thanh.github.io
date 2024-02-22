function savedata(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var mail = document.getElementById("mail").value;
    var sodienthoai = document.getElementById("sodienthoai").value;
    var payment = document.getElementById("chonthethanhtoan").value;

    sessionStorage.firstname = firstname;
    sessionStorage.lastname = lastname;
    sessionStorage.mail = mail;
    sessionStorage.sodienthoai = sodienthoai;
    sessionStorage.payment = payment;

    var idnghenghiep = document.getElementById("idnghenghiep").getElementsByTagName("input");

    for(var i=0;i<idnghenghiep.length;i++){
        if(idnghenghiep[i].checked == true){
            sessionStorage.nghenghiep = idnghenghiep[i].value;
        }
    }

    var python = document.getElementById("python").checked;
    var java = document.getElementById("java").checked;
    var sql = document.getElementById("sql").checked;
    var js = document.getElementById("js").checked;

    sessionStorage.python = python;
    sessionStorage.java = java;
    sessionStorage.sql = sql;
    sessionStorage.js = js;

    var errormsg1 = ""
    var errormsg2 = ""
    var errormsg3 = ""
    var errormsg4 = ""
    if(firstname == ""){
        errormsg1 += "vui lòng điền tên vào";
    }
    if(lastname == ""){
        errormsg2 += "vui lòng điền họ vào"
    }
    if(firstname == ""){
        document.getElementById("errormsg").textContent = errormsg1;
        return false
    }
    if(lastname == ""){
        document.getElementById("errormsg").textContent = errormsg2;
        return false
    }


}
function prefilldata(){
    if(sessionStorage.firstname != null){
        document.getElementById("firstname").value = sessionStorage.firstname;
        document.getElementById("lastname").value = sessionStorage.lastname;
        document.getElementById("mail").value = sessionStorage.mail;
        document.getElementById("sodienthoai").value = sessionStorage.sodienthoai;

    if(sessionStorage.nghenghiep == "đại học"){
        document.getElementById("daihoc").checked = true;
    }
    if(sessionStorage.nghenghiep == "trung học"){
        document.getElementById("trunghoc").checked = true;
    }
    if(sessionStorage.nghenghiep == "làm việc"){
        document.getElementById("lamviec").checked = true;
    }
    if(sessionStorage.nghenghiep == "về hưu"){
        document.getElementById("vehuu").checked = true;
    }

    if(sessionStorage.python == "true"){
        document.getElementById("python").checked = true;
    }
    if(sessionStorage.java == "true"){
        document.getElementById("java").checked = true;
    }
    if(sessionStorage.sql == "true"){
        document.getElementById("sql").checked = true;
    }
    if(sessionStorage.js == "true"){
        document.getElementById("js").checked = true;
    }
    document.getElementById("chonthethanhtoan").value = sessionStorage.payment;
    }
}

function init(){
    var thanhtoan = document.getElementById("thanhtoan");
    thanhtoan.onsubmit = savedata;
    prefilldata();
}
window.onload = init