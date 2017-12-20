// function start() {
//     var cells;
//  for (var y = 0; y <= 9; y++) {
//             cells = ['', '', '', '', '', '', '', '', '', ]
//             var cell = cells[y];

//     var table = document.getElementById("playground");



//     for (var i = 0; i < 3; i++) {
//         var row = document.createElement("tr");

//     for (var x = 0; x < 3; x++) {
//             var td = document.createElement("td");
        
    
//             // td.id='cell'
//             td.onclick = document.getElementById('result').innerHTML = cell
//         }
//         // document.getElementById('result')=td.onclick}


//         // col.innerHTML = cell;

//         row.appendChild(td);
// }
//         table.appendChild(row);
//         // document.getElementById('result').innerHTML=col.id
//     }

    $(document).ready(function() {
           var cells;
           var moves=[];
           function refresh() {
               $("#playground").empty();
               var table = $("<table>")///create.element
               var tr;
               
               $.each(cells, function(i) //for petlja
                   {if (!(i % 3) ) {
                       tr = $("<tr>");
                   };
                   var td = $("<td>");//create td
                   td.attr("id", "cell_" + i);
                   td.html(cells[i]);//inner html
                   td.click(function() {
                       $("#result").text("You've clicked on cell number "
                        + $(this).attr("id").split("_")[1] + ".");
                     if (cells[$(this).attr("id")]) {
                        return;
                    }
                    
                    if (!moves.length % 2) {
                        $("#" + $(this).attr("id")).attr("class", "x");
                        moves.push("x");
                        cells[$(this).attr("id")] = "x";
                    } else {
                        $("#" + $(this).attr("id")).attr("class", "o");
                        moves.push("o");
                        cells[$(this).attr("id")] = "o";
                    }
                     checkWin()
                     remove();
                   })
                   table.append(tr.append(td));
               });
               $("#playground").append(table);
           }
           function remove(){

           }
            function checkWin(){
             if($('#cell_0').hasClass('x') && $('#cell_1').hasClass('x')&&$('#cell_2').hasClass('x'))
           {alert('X wins!')}
         else if($('#cell_0').hasClass('o') && $('#cell_1').hasClass('o')&&$('#cell_2').hasClass('o'))
          {alert('O wins!')}
         if($('#cell_3').hasClass('x') && $('#cell_4').hasClass('x')&&$('#cell_5').hasClass('x'))
           {alert('X wins!')}
         else if($('#cell_3').hasClass('o') && $('#cell_1').hasClass('o')&&$('#cell_5').hasClass('o'))
          {alert('O wins!')}
         if($('#cell_6').hasClass('x') && $('#cell_7').hasClass('x')&&$('#cell_2').hasClass('x'))
           {alert('X wins!')}
         else if($('#cell_6').hasClass('o') && $('#cell_8').hasClass('o')&&$('#cell_8').hasClass('o'))
          {alert('O wins!')}
         if($('#cell_0').hasClass('x') && $('#cell_4').hasClass('x')&&$('#cell_8').hasClass('x'))
           {alert('X wins!')}
         else if($('#cell_0').hasClass('o') && $('#cell_4').hasClass('o')&&$('#cell_8').hasClass('o'))
          {alert('O wins!')}
         if($('#cell_2').hasClass('x') && $('#cell_4').hasClass('x')&&$('#cell_6').hasClass('x'))
           {alert('X wins!')}
         else if($('#cell_2').hasClass('o') && $('#cell_4').hasClass('o')&&$('#cell_6').hasClass('o'))
          {alert('O wins!')}
         if($('#cell_0').hasClass('x') && $('#cell_3').hasClass('x')&&$('#cell_6').hasClass('x'))
           {alert('X wins!')}
         else if($('#cell_0').hasClass('o') && $('#cell_3').hasClass('o')&&$('#cell_6').hasClass('o'))
          {alert('O wins!')}
         if($('#cell_1').hasClass('x') && $('#cell_4').hasClass('x')&&$('#cell_7').hasClass('x'))
           {alert('X wins!')}
         else if($('#cell_1').hasClass('o') && $('#cell_4').hasClass('o')&&$('#cell_7').hasClass('o'))
          {alert('O wins!')}
         if($('#cell_2').hasClass('x') && $('#cell_5').hasClass('x')&&$('#cell_8').hasClass('x'))
           {alert('X wins!')}
         else if($('#cell_2').hasClass('o') && $('#cell_5').hasClass('o')&&$('#cell_8').hasClass('o'))
          {alert('O wins!')}
            }

           $("#start").click(function() {
               cells = ["", "", "", "", "", "", "", "", ""];
               refresh();
              
           })

       })