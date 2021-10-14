//Add with validation
$(document).ready(function () {

    $('#btn-add').click(function (e) {

        var company = $('#Company_name').val();
        var car = $('#Car_name').val();
        var cylander = $('#Cylander_nb').val();
        var date = $('#date').val();
        var price = $('#price').val();

        //validation
        if (company.length == 0) {
            $('#p0').show();
            var msg = $('#p0').text('Please enter Company name ');
            $('#Company_name').focus();
            return false;
        }
        else if (company.length > 0) {
            $('#p0').hide();
        }
        if (car.length == 0) {
            $('#p1').show();
            var msg = $('#p1').text('Please enter Car name');
            $('#Car_name').focus();
            return false;
        }
        else if (car.length > 0) {
            $('#p1').hide();
        }
        if (cylander.length == 0) {
            $('#p2').show();
            var msg = $('#p2').text('Please enter Cylander numver');
            $('#Cylander_nb').focus();
            return false;
        }
        else if (cylander.length > 0) {
            $('#p2').hide();
        }
        if (date.length == 0) {
            $('#p3').show();
            var msg = $('#p3').text('Please enter date');
            $('#date').focus();
            return false;
        }
        else if (date.length > 0) {
            $('#p3').hide();
        }
        if (price.length == 0) {
            $('#p4').show();
            var msg = $('#p4').text('Please enter Price');
            $('#price').focus();
            return false;
        }
        else if (price.length > 0) {
            $('#p4').hide();
        }

        // add
        $('tbody').append('<tr id="sortable_row" data-companyname=' + company + ' data-carname=' + car + ' data-cylander=' + cylander + ' data-date=' + date + ' data-price=' + price + ' ><td>' + company + '</td>  <td>' + car + '</td>  <td>' + cylander + '</td>  <td>' + date + '</td>  <td>' + price + '</td><td><button id="butedit"  class="btn btn-outline-primary " type="submit">edit</button> <button id="butdelete" class="btn btn-outline-primary ml-3" type="submit">delete</button></td>  </tr>');
        $("input[id='Company_name']").val('');
        $("input[id='Car_name']").val('');
        $("input[id='Cylander_nb']").val('');
        $("input[id='date']").val('');
        $("input[id='price']").val('');

        e.preventDefault();
    });
});
// search
$(document).ready(function () {
    $("#insearch").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#cartable tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
//sort by name
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("cartable");
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
    $("#cartable").on('click', '#butdelete', function () {
        $(this).closest('tr').remove();

    });

    //edit
    $("body").on("click", "#butedit", function () {
        var company = $(this).parents("tr").attr('data-companyname');
        var car = $(this).parents("tr").attr('data-carname');
        var cylander = $(this).parents("tr").attr('data-cylander');
        var date = $(this).parents("tr").attr('data-date');
        var price = $(this).parents("tr").attr('data-price');

        $(this).parents("tr").find("td:eq(0)").html('<input id="edit_companyname" value="' + company + '">');
        $(this).parents("tr").find("td:eq(1)").html('<input id="edit_carname" value="' + car + '">');
        $(this).parents("tr").find("td:eq(2)").html('<input id="edit_cylander" value="' + cylander + '">');
        $(this).parents("tr").find("td:eq(3)").html('<input id="edit_date" value="' + date + '">');
        $(this).parents("tr").find("td:eq(4)").html('<input id="edit_price" value="' + price + '">');




        $(this).parents("tr").find("td:eq(5)").prepend("<button id='butsave'  class='btn btn - outline - primary mr - 3 ' type='submit'>Save</button> <button id='butcancel'  class='btn btn - outline - primary mr - 3 ' type='submit'>Cancel</button>");
        $(this).hide();
    });


    $("body").on("click", "#butcancel", function () {
        var company = $(this).parents("tr").attr('data-companyname');
        var car = $(this).parents("tr").attr('data-carname');
        var cylander = $(this).parents("tr").attr('data-cylander');
        var date = $(this).parents("tr").attr('data-date');
        var price = $(this).parents("tr").attr('data-price');

        $(this).parents("tr").find("td:eq(0)").text(company);
        $(this).parents("tr").find("td:eq(1)").text(car);
        $(this).parents("tr").find("td:eq(2)").text(cylander);
        $(this).parents("tr").find("td:eq(3)").text(date);
        $(this).parents("tr").find("td:eq(4)").text(price);

        $(this).parents("tr").find("#butedit").show();
        $(this).parents("tr").find("#butsave").remove();
        $(this).parents("tr").find("#butcancel").remove();
    });

    $("body").on("click", "#butsave", function () {
        var copany = $(this).parents("tr").find("input[id='edit_companyname']").val();
        var car = $(this).parents("tr").find("input[id='edit_carname']").val();
        var cylander = $(this).parents("tr").find("input[id='edit_cylander']").val();
        var date = $(this).parents("tr").find("input[id='edit_date']").val();
        var price = $(this).parents("tr").find("input[id='edit_price']").val();

        $(this).parents("tr").find("td:eq(0)").text(copany);
        $(this).parents("tr").find("td:eq(1)").text(car);
        $(this).parents("tr").find("td:eq(2)").text(cylander);
        $(this).parents("tr").find("td:eq(3)").text(date);
        $(this).parents("tr").find("td:eq(4)").text(price);

        $(this).parents("tr").attr('data-companyname', copany);
        $(this).parents("tr").attr('data-carname', car);
        $(this).parents("tr").attr('data-cylander', cylander);
        $(this).parents("tr").attr('data-date', date);
        $(this).parents("tr").attr('data-price', price);

        $(this).parents("tr").find("#butedit").show();
        $(this).parents("tr").find("#butcancel").remove();
        $(this).parents("tr").find("#butsave").remove();
    });
});
