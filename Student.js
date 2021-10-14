$(document).ready(function () {

    $('#btn-add').click(function (e) {

        var coursec = $('#course_code').val();
        var coursen = $('#course_name').val();
        var studentn = $('#student_name').val();
        var studentid = $('#student_id').val();
        var semester = $('#semester_name').val();
        var date = $('#date').val();

        //validation
        if (coursec.length == 0) {
            $('#p0').show();
            var msg = $('#p0').text('Please enter Course Code ');
            $('#course_code').focus();
            return false;
        }
        else if (coursec.length > 0) {
            $('#p0').hide();
        }
        if (coursen.length == 0) {
            $('#p1').show();
            var msg = $('#p1').text('Please enter Course name');
            $('#course_name').focus();
            return false;
        }
        else if (coursen.length > 0) {
            $('#p1').hide();
        }
        if (studentn.length == 0) {
            $('#p2').show();
            var msg = $('#p2').text('Please enter Student name');
            $('#student_name').focus();
            return false;
        }
        else if (studentn.length > 0) {
            $('#p2').hide();
        }
        if (studentid.length == 0) {
            $('#p3').show();
            var msg = $('#p3').text('Please enter student id');
            $('#student_id').focus();
            return false;
        }
        else if (studentid.length > 0) {
            $('#p3').hide();
        }
        if (semester.length == 0) {
            $('#p4').show();
            var msg = $('#p4').text('Please enter semester');
            $('#semester_name').focus();
            return false;
        }
        else if (semester.length > 0) {
            $('#p4').hide();
        }
        if (date.length == 0) {
            $('#p4').show();
            var msg = $('#p4').text('Please enter date');
            $('#date').focus();
            return false;
        }
        else if (date.length > 0) {
            $('#p4').hide();
        }


        // add
        $('tbody').append('<tr id="sortable_row" data-coursecode=' + coursec + ' data-coursename=' + coursen + ' data-studentname=' + studentn + ' data-studentid=' + studentid + ' data-semestername=' + semester + ' data-date=' + date + ' ><td>' + coursec + '</td>  <td>' + coursen + '</td>  <td>' + studentn + '</td>  <td>' + studentid + '</td>  <td>' + semester + '</td><td>' + date + '</td><td><button id="butedit"  class="btn btn-outline-primary " type="submit">edit</button> <button id="butdelete" class="btn btn-outline-primary ml-3" type="submit">delete</button></td>  </tr>');
        $("input[id='course_code']").val('');
        $("input[id='course_name']").val('');
        $("input[id='student_name']").val('');
        $("input[id='student_id']").val('');
        $("input[id='semester_name']").val('');
        $("input[id='date']").val('');

        e.preventDefault();
    });
});

// search
$(document).ready(function () {
    $("#insearch").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#studenttable tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//sort by name
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("studenttable");
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
    $("#studenttable").on('click', '#butdelete', function () {
        $(this).closest('tr').remove();

    });

    //edit
    $("body").on("click", "#butedit", function () {
        var coursecode = $(this).parents("tr").attr('data-coursecode');
        var coursename = $(this).parents("tr").attr('data-coursename');
        var studentname = $(this).parents("tr").attr('data-studentname');
        var studentid = $(this).parents("tr").attr('data-studentid');
        var semestername = $(this).parents("tr").attr('data-semestername');
        var date = $(this).parents("tr").attr('data-date');

        $(this).parents("tr").find("td:eq(0)").html('<input id="edit_coursecode" value="' + coursecode + '">');
        $(this).parents("tr").find("td:eq(1)").html('<input id="edit_coursename" value="' + coursename + '">');
        $(this).parents("tr").find("td:eq(2)").html('<input id="edit_studentname" value="' + studentname + '">');
        $(this).parents("tr").find("td:eq(3)").html('<input id="edit_studentid" value="' + studentid + '">');
        $(this).parents("tr").find("td:eq(4)").html('<input id="edit_semestername" value="' + semestername + '">');
        $(this).parents("tr").find("td:eq(5)").html('<input id="edit_date" value="' + date + '">');




        $(this).parents("tr").find("td:eq(6)").prepend("<button id='butsave'  class='btn btn - outline - primary mr - 3 ' type='submit'>Save</button> <button id='butcancel'  class='btn btn - outline - primary mr - 3 ' type='submit'>Cancel</button>");
        $(this).hide();
    });


    $("body").on("click", "#butcancel", function () {
        var coursecode = $(this).parents("tr").attr('data-coursecode');
        var coursename = $(this).parents("tr").attr('data-coursename');
        var studentname = $(this).parents("tr").attr('data-studentname');
        var studentid = $(this).parents("tr").attr('data-studentid');
        var semestername = $(this).parents("tr").attr('data-semestername');
        var date = $(this).parents("tr").attr('data-date');

        $(this).parents("tr").find("td:eq(0)").text(coursecode);
        $(this).parents("tr").find("td:eq(1)").text(coursename);
        $(this).parents("tr").find("td:eq(2)").text(studentname);
        $(this).parents("tr").find("td:eq(3)").text(studentid);
        $(this).parents("tr").find("td:eq(4)").text(semestername);
        $(this).parents("tr").find("td:eq(5)").text(date);

        $(this).parents("tr").find("#butedit").show();
        $(this).parents("tr").find("#butsave").remove();
        $(this).parents("tr").find("#butcancel").remove();
    });

    $("body").on("click", "#butsave", function () {
        var coursecode = $(this).parents("tr").find("input[id='edit_coursecode']").val();
        var coursename = $(this).parents("tr").find("input[id='edit_coursename']").val();
        var studentname = $(this).parents("tr").find("input[id='edit_studentname']").val();
        var studentid = $(this).parents("tr").find("input[id='edit_studentid']").val();
        var semestername = $(this).parents("tr").find("input[id='edit_semestername']").val();
        var date = $(this).parents("tr").find("input[id='edit_date']").val();

        $(this).parents("tr").find("td:eq(0)").text(coursecode);
        $(this).parents("tr").find("td:eq(1)").text(coursename);
        $(this).parents("tr").find("td:eq(2)").text(studentname);
        $(this).parents("tr").find("td:eq(3)").text(studentid);
        $(this).parents("tr").find("td:eq(4)").text(semestername);
        $(this).parents("tr").find("td:eq(5)").text(date);

        $(this).parents("tr").attr('data-companyname', coursecode);
        $(this).parents("tr").attr('data-carname', coursename);
        $(this).parents("tr").attr('data-cylander', studentname);
        $(this).parents("tr").attr('data-date', studentid);
        $(this).parents("tr").attr('data-price', semestername);
        $(this).parents("tr").attr('data-price', date);

        $(this).parents("tr").find("#butedit").show();
        $(this).parents("tr").find("#butcancel").remove();
        $(this).parents("tr").find("#butsave").remove();
    });
});
