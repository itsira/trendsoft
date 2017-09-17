function table_generate(aValue) {

    $.getJSON( "../data.json", function( data ) {

        var item1 = [];
        var item2 = [];
        var item3 = [];
        var item4 = [];

        $.each(data['item1'], function(key, val) {
            item1.push("<td id='" + key + "'>" + val + "</td>");
        });
        $.each(data['item2'], function(key, val) {
            item2.push("<td id='" + key + "'>" + val + "</td>");
        });
        $.each(data['item3'], function(key, val) {
            item3.push("<td id='" + key + "'>" + val + "</td>");
        });
        $.each(data['item4'], function(key, val) {
            item4.push("<td id='" + key + "'>" + val + "</td>");
        });

        for (var i = 0; i < aValue / 4; i++) {
            $(".table-result table").append("" +
                "<tr>"+item1+"<td class='control_button'' style='cursor: pointer; width: 20px; color: #009bff;'>•••</td></tr>" +
                "<tr>"+item2+"<td class='control_button'' style='cursor: pointer; width: 20px; color: #009bff;'>•••</td></tr>" +
                "<tr>"+item3+"<td class='control_button'' style='cursor: pointer; width: 20px; color: #009bff;'>•••</td></tr>" +
                "<tr>"+item4+"<td class='control_button'' style='cursor: pointer; width: 20px; color: #009bff;'>•••</td></tr>");
        }
    });

}

$(".add_task_form").hide();
function add_new_task() {
    $(".add_task_button, .add_task ").on("click", function () {
        $(".add_task_form").show(500);
        $(".add_task_form img").on("click", function () {
            $(".add_task_form").hide(500);
        });
    });
}

function count_signs_on_page() {
    var aValue = 20;
    table_generate(aValue);

    $(".task-count-view > a").on("click", function () {
        $(".table-result table").html("<thead><th>T</th><th>Тикет</th><th>Название</th><th>П</th><th>Статус</th><th>Решение</th><th>Создано</th><th>Обновлено</th><th>Дедлайн</th><th></th></thead>");
        if ($(this).text() == "все") {
            aValue = $(".task_count").text();
        } else {
            aValue = $(this).text();
        }
        table_generate(aValue);

        $.each($(".task-count-view > a"), function () {
            if ($(this).hasClass("no-active")) {
            $(this).removeClass("no-active");
        }
        } );

        $(this).addClass("no-active");
        
    });

}

function sort() {
    $("ul.all-tasks > li > a").on("click", function () {

        $.each($("ul.all-tasks > li > a"), function () {
            if ($(this).hasClass("no-active")) {
                $(this).removeClass("no-active");
            }
        });
        $(this).addClass("no-active");

    //  Отображать либо "Открытые", либо "Выполненные" задачи

    });

}

$(document).ready(function () {

    add_new_task();
    count_signs_on_page();
    sort();

});

