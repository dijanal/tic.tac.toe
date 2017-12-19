// function start() {
//     var cells='';
    
    
//     var table = document.getElementById("playground");



//     for (var i = 0; i < 3; i++) {
//         var row = document.createElement("tr");

//         for (var x = 0; x < 3; x++) {
//         	  var td = document.createElement("td");
//               for (var y = 0; y <= 9; y++) {
//         var cell = cells[y];
//             td.id='cell'
//             td.onclick=document.getElementById('cell').innerHTML=cell
//             document.getElementById('result')=td.onclick}

          
//             // col.innerHTML = cell;

//             row.appendChild(td);
//         }
//         table.appendChild(row);
// document.getElementById('result').innerHTML=col.id
//     }
// }
$(document).ready(function() {
       var cells;

       function refresh() {
           $("#playground").remove("table");
           var table = $("<table>")///create.element
           var tr;
           $.each(cells, function(i) //for petlja
               {if (!(i % 3) || !tr) {
                   tr = $("<tr>");
               };
               var td = $("<td>");//create td
               td.attr("id", "cell_" + i);
               td.html(cells[i]);//inner html
               td.click(function() {
                   $("#result").text("You've clicked on cell number " + $(this).attr("id").split("_")[1] + ".");
               })
               table.append(tr.append(td));
           });
           $("#playground").append(table);
       }

       $("#start").click(function() {
           cells = ["", "", "", "", "", "", "", "", ""];
           refresh();
       })

   })