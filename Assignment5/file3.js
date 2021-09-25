function DeleteRow(ID) {
           var x = confirm("Are you sure you want to delete?");
  if (x)
      document.getElementById(ID).remove(); 
  else
    return false;
             
          }

     var url,oldName,OldAddr,OldRating;
     var ID_seq=3;
     
     var loadFile = function(event) {
	        var image = document.getElementById("img");
	        url = URL.createObjectURL(event.target.files[0]);
     };

     function UpdateRow(ID) {
     	     var Name = document.getElementById("name").value;
             var Adress = document.getElementById("adress").value;
             
             if(document.getElementById("rating").value > 5){
             	document.getElementById("rating").value = 5
             }
             if(document.getElementById("rating").value < 1){
             	document.getElementById("rating").value = 1
             }
             var Rating = document.getElementById("rating").value;
             //var Picture = document.getElementById("img").value;
             //var image = document.getElementById('output');
             var td = document.getElementById(ID);
             td.getElementsByTagName("td")[0].innerHTML=Name;
             td.getElementsByTagName("td")[1].innerHTML=Adress;
             td.getElementsByTagName("td")[2].innerHTML=Rating;
             //td.getElementsByTagName("td")[3].src=image.src;
             td.getElementsByTagName("td")[3].innerHTML="<img src=\"" + url + "\" alt=\"img\" width=\"100\" height=\"100\">";
              var submit = document.getElementById("Submit");
              var reset = document.getElementById("Reset");
              reset.value="ResetRow";
              submit.value = "Submit";
              submit.setAttribute( "onClick", "GetValues();" );
              reset.setAttribute("type","button");
              reset.setAttribute("style", "background-color: #d99c18;");
              reset.setAttribute("onClick", "ResetRow("+ID+");");
             //alert(submit.onclick);
     }
     
     function ResetRow(ID)
     {
     	     var td = document.getElementById(ID);
             td.getElementsByTagName("td")[0].innerHTML=oldName;
             td.getElementsByTagName("td")[1].innerHTML=OldAddr;
             td.getElementsByTagName("td")[2].innerHTML=OldRating;
             oldName="";
             OldAddr="";
             OldRating="";
             var reset = document.getElementById("Reset");
             reset.value="Reset";
             reset.setAttribute("type","reset");
             //reset.setAttribute("style", "background-color: #d99c18;");
             reset.setAttribute("onClick", "");
             //<input type="reset" id="Reset" value="Reset" />
     }
     function NewUpdate(ID){
             var td = document.getElementById(ID);
             oldName=td.getElementsByTagName("td")[0].innerHTML;
             OldAddr=td.getElementsByTagName("td")[1].innerHTML;
             OldRating=td.getElementsByTagName("td")[2].innerHTML;
             document.getElementById("name").value =  td.getElementsByTagName("td")[0].innerHTML;
             document.getElementById("adress").value = td.getElementsByTagName("td")[1].innerHTML;
             document.getElementById("rating").value = td.getElementsByTagName("td")[2].innerHTML;
             document.getElementById("img").src = td.getElementsByTagName("td")[3].innerHTML;
             
             var submit = document.getElementById("Submit");
             submit.value = "UpdateRow";
             submit.setAttribute( "onClick", "UpdateRow("+ID+");" );
             //alert(submit.onclick);
             
     	     
     }

     function GetValues() {
     	     var Name = document.getElementById("name").value;
             var Adress = document.getElementById("adress").value;
             if(document.getElementById("rating").value > 5){
             	document.getElementById("rating").value = 5
             }
             if(document.getElementById("rating").value < 1){
             	document.getElementById("rating").value = 1
             }
             var Rating = document.getElementById("rating").value;
             //var Rating = document.getElementById("rating").value;
             //var Picture = document.getElementById("img").value;
             var table = document.getElementById("myTable");
  	     var len = table.rows.length;
  	     var row = table.insertRow(len);
             row.className = 'heading';
             //row.id="\""+ID_seq+"\"";
             row.id=ID_seq;
  	     var cell1 = row.insertCell(0);
  	     var cell2 = row.insertCell(1);
             var cell3 = row.insertCell(2);
             var cell4 = row.insertCell(3);
             var cell5 = row.insertCell(4);
             //var cell6 = row.insertCell(5);
  	     cell1.innerHTML = Name;
  	     cell2.innerHTML = Adress;
             cell3.innerHTML = Rating;
             cell4.innerHTML = "<img src=\"" + url + "\" alt=\"img\" width=\"100\" height=\"100\">";
             cell5.innerHTML = "<button type=\"update\" onclick=\"NewUpdate('"+row.id+"')\">Update</button> <button type=\"delete\" onclick =\"DeleteRow('"+row.id+"')\">Delete</button>";
             ID_seq++;
           }
           
       function search() {
    	  var input, input_value, found, table, tr, td, i, j;
    	  input = document.getElementById("searchbar");
          input_value = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td");
          for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(input_value) > -1) {
                found = true;
            }
        }
         if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }    
}

function search1() {
    	  var input, input_value, found, table, tr, td, i, j;
    	  input = document.getElementById("searchbar");
          input_value = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td");
          //for (j = 0; j < td.length; j++) {
            if (td[0].innerHTML.toUpperCase().includes(input_value)) {
                found = true;
            }
        //}
         if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
      }    
  }
 
    function sortTable() {
          var table, rows, switching, i, x, y, shouldSwitch;
          table = document.getElementById("myTable");
          switching = true;
  
          while (switching) {
              switching = false;
              rows = table.rows;
              for (i = 1; i < (rows.length - 1); i++) {
                  shouldSwitch = false;
                  x = rows[i].getElementsByTagName("td")[2];
                  y = rows[i + 1].getElementsByTagName("td")[2];
                  if (x.innerHTML < y.innerHTML) {
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
