

    //login
function ValidateLogin() {
    var uemail = $("#email").val();
    var upass = $("#password").val();
    //login email validation
    if (uemail == "") {
        $("#email").attr('placeholder', 'please enter your email address');
        $('#lemail').addClass('placeholder bg-danger');
    }
    if (uemail) {
        $("#lemail").removeClass('placeholder bg-danger');
    }
    //login password validation
    if (upass == "") {
        $("#password").attr('placeholder', 'please enter your password');
        $('#lpassword').addClass('placeholder bg-danger');
    }
    if (upass) {
        $('#lpassword').removeClass('placeholder bg-danger');
        swal({
            title: "Login Success",
            text: "Welcom to our website",
            icon: "success",
            buttom: "OK",
        }).then(function () {
            window.location = "Users.html";
        });
    }

}
    //register 
function ValidateRegister(){
    var rfirst = $("#firstname").val();
    var rlast = $("#lastname").val();
    var rphone = $("#phone").val();
    var remail = $("#email0").val();
    var rpass = $("#password0").val();
    //register first name
    if (rfirst == "") {
        $("#firstname").attr('placeholder', 'please enter your firstname');
        $('#rfirstname').addClass('placeholder bg-danger');
    }
    if (rfirst) {
        $("#rfirstname").removeClass('placeholder bg-danger');
    }
    //register last name
    if (rlast == "") {
        $("#lastname").attr('placeholder', 'please enter your lastname');
        $('#rlastname').addClass('placeholder bg-danger');
    }
    if (rlast) {
        $("#rlastname").removeClass('placeholder bg-danger');
    }
    //register phone number
    if (rphone == "") {
        $("#phone").attr('placeholder', 'please enter your phone number');
        $('#rphone').addClass('placeholder bg-danger');
    }
    if (rphone) {
        $("#rphone").removeClass('placeholder bg-danger');
    }
    //register email
    if (remail == "") {
        $("#email0").attr('placeholder', 'please enter your email address');
        $('#remail0').addClass('placeholder bg-danger');
    }
    if (remail) {
        $("#remail0").removeClass('placeholder bg-danger');
    }
    //register password
    if (rpass == "") {
        $("#password0").attr('placeholder', 'please enter your password');
        $('#rpassword0').addClass('placeholder bg-danger');
    }
    if (rpass) {
        $("#rpassword0").removeClass('placeholder bg-danger');
        swal({
            title: "Registration Succeeded",
            text: "Welcom to our website",
            icon: "success",
            buttom: "OK",
        }).then(function () {
            window.location = "Users.html";
        });
    }
}


