$(document).ready(function() {
    var cells;
    var moves;
    var comp;

    function refresh() {
        $("#playground").empty();
        var table = $("<table>") ///create.element
        var tr;

        $.each(cells, function(i) //for petlja
            {
                if (!(i % 3)) {
                    tr = $("<tr>");
                };
                var td = $("<td>"); //create td
                td.attr("id", "cell_" + i);
                td.html(cells[i]); //inner html
                td.click(function() {
                    $("#result").text("You've clicked on cell number " +
                        $(this).attr("id").split("_")[1] + ".");
                    if (cells[$(this).attr("id")]) {
                        return;
                    }

                    if (moves.length % 2 == 0) {
                        $("#" + $(this).attr("id")).attr("class", "x");
                        moves.push("x");
                        cells[$(this).attr("id")] = "x";
                    } else {

                        $("#" + $(this).attr("id")).attr("class", "o");
                        moves.push("o");
                        cells[$(this).attr("id")] = "o";
                    }
                    checkWin()


                })
                table.append(tr.append(td));
            });
        $("#playground").append(table);
    }

    function remove() {

    }

    // function checkWin() {
    //     var winningCombinations = [

    //         ['cell_0', 'cell_1', 'cell_2'],
    //         [3, 4, 5],
    //         [6, 7, 8],

    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],


    //         [0, 4, 8],
    //         [2, 4, 6],
    //     ];

    //     $.each(winningCombinations, function() {

    //         if ($(this).hasClass('x')) { alert('X wins!') }
    //     })


    // })

    function checkWin() {
        if ($('#cell_0').hasClass('x') && $('#cell_1').hasClass('x') && $('#cell_2').hasClass('x')) { alert('X wins!') } else if ($('#cell_0').hasClass('o') && $('#cell_1').hasClass('o') && $('#cell_2').hasClass('o')) { alert('O wins!') }
        if ($('#cell_3').hasClass('x') && $('#cell_4').hasClass('x') && $('#cell_5').hasClass('x')) { alert('X wins!') } else if ($('#cell_3').hasClass('o') && $('#cell_1').hasClass('o') && $('#cell_5').hasClass('o')) { alert('O wins!') }
        if ($('#cell_6').hasClass('x') && $('#cell_7').hasClass('x') && $('#cell_8').hasClass('x')) { alert('X wins!') } else if ($('#cell_6').hasClass('o') && $('#cell_8').hasClass('o') && $('#cell_8').hasClass('o')) { alert('O wins!') }
        if ($('#cell_0').hasClass('x') && $('#cell_4').hasClass('x') && $('#cell_8').hasClass('x')) { alert('X wins!') } else if ($('#cell_0').hasClass('o') && $('#cell_4').hasClass('o') && $('#cell_8').hasClass('o')) { alert('O wins!') }
        if ($('#cell_2').hasClass('x') && $('#cell_4').hasClass('x') && $('#cell_6').hasClass('x')) { alert('X wins!') } else if ($('#cell_2').hasClass('o') && $('#cell_4').hasClass('o') && $('#cell_6').hasClass('o')) { alert('O wins!') }
        if ($('#cell_0').hasClass('x') && $('#cell_3').hasClass('x') && $('#cell_6').hasClass('x')) { alert('X wins!') } else if ($('#cell_0').hasClass('o') && $('#cell_3').hasClass('o') && $('#cell_6').hasClass('o')) { alert('O wins!') }
        if ($('#cell_1').hasClass('x') && $('#cell_4').hasClass('x') && $('#cell_7').hasClass('x')) { alert('X wins!') } else if ($('#cell_1').hasClass('o') && $('#cell_4').hasClass('o') && $('#cell_7').hasClass('o')) { alert('O wins!') }
        if ($('#cell_2').hasClass('x') && $('#cell_5').hasClass('x') && $('#cell_8').hasClass('x')) { alert('X wins!') } else if ($('#cell_2').hasClass('o') && $('#cell_5').hasClass('o') && $('#cell_8').hasClass('o')) { alert('O wins!') }
    }

    $("#start").click(function() {
        cells = ["", "", "", "", "", "", "", "", ""];
        moves = [];
        refresh();


    })
})