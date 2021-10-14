//Add with validation
$(document).ready(function () {

    $('#btn-add').click(function (e) {

        var fname = $('#firstname').val();
        var lname = $('#lastname').val();
        var gender = $('#gender').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var password = $('#password').val();

        //validation
        if (fname.length == 0) {
            $('#p0').show();
            var msg = $('#p0').text('Please enter your Firstname');
            $('#firstname').focus();
            return false;
        }
        else if (fname.length > 0) {
            $('#p0').hide();
        }
        if (lname.length == 0) {
            $('#p1').show();
            var msg = $('#p1').text('Please enter your Lastname');
            $('#lastname').focus();
            return false;
        }
        else if (lname.length > 0) {
            $('#p1').hide();
        }
        if (gender.length == 0) {
            $('#p2').show();
            var msg = $('#p2').text('Please enter your Gender');
            $('#gender').focus();
            return false;
        }
        else if (gender.length > 0) {
            $('#p2').hide();
        }
        if (phone.length == 0) {
            $('#p3').show();
            var msg = $('#p3').text('Please enter your Phone Number');
            $('#phone').focus();
            return false;
        }
        else if (phone.length > 0) {
            $('#p3').hide();
        }
        if (email.length == 0) {
            $('#p4').show();
            var msg = $('#p4').text('Please enter your Email Address');
            $('#email').focus();
            return false;
        }
        else if (email.length > 0) {
            $('#p4').hide();
        }
        if (password.length == 0) {
            $('#p5').show();
            var msg = $('#p5').text('Please enter your Password');
            $('#password').focus();
            return false;
        }
        else if (password.length > 0) {
            $('#p5').hide();
        }

        // add
        $('tbody').append('<tr id="sortable_row"  data-firstname=' + fname + ' data-lastname=' + lname + ' data-gender=' + gender + ' data-phone=' + phone + ' data-email=' + email + ' data-password=' + password + '  ><td>' + fname + '</td>  <td>' + lname + '</td>  <td>' + gender + '</td>  <td>' + phone + '</td>  <td>' + email + '</td>  <td>'
            + password + '</td><td><button id="butedit"  class="btn btn-outline-primary " type="submit">edit</button> <button id="butdelete" class="btn btn-outline-primary ml-3" type="submit">delete</button></td>  </tr>');
        $("input[id='firstname']").val('');
        $("input[id='lastname']").val('');
        $("input[id='gender']").val('');
        $("input[id='phone']").val('');
        $("input[id='email']").val('');
        $("input[id='password']").val('');
        e.preventDefault();
    });
});

// search
$(document).ready(function () {
    $("#insearch").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#usertable tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
    //sort by name
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("usertable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}


$(function () {
    // delete
    $("#usertable").on('click', '#butdelete', function () {
        $(this).closest('tr').remove();

    });

     //edit
    $("body").on("click", "#butedit", function () {
        var fname = $(this).parents("tr").attr('data-firstname');
        var lname = $(this).parents("tr").attr('data-lastname');
        var gender = $(this).parents("tr").attr('data-gender');
        var phone = $(this).parents("tr").attr('data-phone');
        var email = $(this).parents("tr").attr('data-email');
        var password = $(this).parents("tr").attr('data-password');

        $(this).parents("tr").find("td:eq(0)").html('<input id="edit_fname" value="' + fname + '">');
        $(this).parents("tr").find("td:eq(1)").html('<input id="edit_lname" value="' + lname + '">');
        $(this).parents("tr").find("td:eq(2)").html('<select id="edit_gender" class="form-control" value="' + gender + '">' + "<option> Male</option >" + '' + "<option>Female</option>" + '</select >');
        $(this).parents("tr").find("td:eq(3)").html('<input id="edit_phone" value="' + phone + '">');
        $(this).parents("tr").find("td:eq(4)").html('<input id="edit_email" value="' + email + '">');
        $(this).parents("tr").find("td:eq(5)").html('<input id="edit_password" value="' + password + '">');



        $(this).parents("tr").find("td:eq(6)").prepend("<button id='butsave'  class='btn btn - outline - primary mr - 3 ' type='submit'>Save</button> <button id='butcancel'  class='btn btn - outline - primary mr - 3 ' type='submit'>Cancel</button>");
        $(this).hide();
    });


    $("body").on("click", "#butcancel", function () {
        var fname = $(this).parents("tr").attr('data-firstname');
        var lname = $(this).parents("tr").attr('data-lastname');
        var gender = $(this).parents("tr").attr('data-gender');
        var phone = $(this).parents("tr").attr('data-phone');
        var email = $(this).parents("tr").attr('data-email');
        var password = $(this).parents("tr").attr('data-password');

        $(this).parents("tr").find("td:eq(0)").text(fname);
        $(this).parents("tr").find("td:eq(1)").text(lname);
        $(this).parents("tr").find("td:eq(2)").text(gender);
        $(this).parents("tr").find("td:eq(3)").text(phone);
        $(this).parents("tr").find("td:eq(4)").text(email);
        $(this).parents("tr").find("td:eq(5)").text(password);

        $(this).parents("tr").find("#butedit").show();
        $(this).parents("tr").find("#butsave").remove();
        $(this).parents("tr").find("#butcancel").remove();
    });

    $("body").on("click", "#butsave", function () {
        var fname = $(this).parents("tr").find("input[id='edit_fname']").val();
        var lname = $(this).parents("tr").find("input[id='edit_lname']").val();
        var gender = $(this).parents("tr").find("select[id='edit_gender']").val();
        var phone = $(this).parents("tr").find("input[id='edit_phone']").val();
        var email = $(this).parents("tr").find("input[id='edit_email']").val();
        var password = $(this).parents("tr").find("input[id='edit_password']").val();

        $(this).parents("tr").find("td:eq(0)").text(fname);
        $(this).parents("tr").find("td:eq(1)").text(lname);
        $(this).parents("tr").find("td:eq(2)").text(gender);
        $(this).parents("tr").find("td:eq(3)").text(phone);
        $(this).parents("tr").find("td:eq(4)").text(email);
        $(this).parents("tr").find("td:eq(5)").text(password);

        $(this).parents("tr").attr('data-firstname', fname);
        $(this).parents("tr").attr('data-lastname', lname);
        $(this).parents("tr").attr('data-gender', gender);
        $(this).parents("tr").attr('data-phone', phone);
        $(this).parents("tr").attr('data-email', email);
        $(this).parents("tr").attr('data-password', password);

        $(this).parents("tr").find("#butedit").show();
        $(this).parents("tr").find("#butcancel").remove();
        $(this).parents("tr").find("#butsave").remove();
    }); 
});













