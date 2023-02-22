function LoadList() 
{
    $.ajax({
        type: "GET", 
        url: 'index.php', 
        success: function (response) {

            $("#dvtable").empty();

            
            // Parse the json result
           var res =JSON.parse(response);

            var html = "";

            html+="<table class='table table-striped table-bordered table -sm' cellspacing='0' width='100%' id='tblstudent'> "+   
            "<thead class='thead-dark'> "+
            "<tr>    "+
            "<th>S.NO</th>    "+
            "<th>NAME</th> "+
            "<th>AGE</th> "+
            "<th>CLASS</th>"+
            "<th>RANK</th>     "+
            "</tr>    "+
            "</thead>    "+
            "<tbody id='tblbody'>";
           
            
            if(res.length>0) {

              
               
                // Loop the parsed JSON
                $.each(res, function(key,value) {
                     html+="<tr><td>"+value.SNO+"</td>"+
                           "<td>"+value.NAME+"</td>"+
                          "<td>"+value.AGE+"</td>"+
                          "<td>"+value.CLASS+"</td>"+
                          "<td>"+value.AGE+"</td></tr>";  
                });
               
            } else {
                
            }



            html+= "</tbody></table>";
            $("#dvtable").append(html);

            $('#tblstudent').DataTable({

            });
            
         
        }
    });

    // var table = $('#tblstudent').DataTable({
    //     "paging": true,
    //     "lengthChange": true,
    //     "searching": true,
    //     "ordering": true,
    //     "info": true,
    //     "autoWidth": true,

     
    // });
}
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
           
            event.preventDefault()
            event.stopPropagation()
          }
          else
          {
            if (form.checkValidity()) {
                submitdata();
                alert("Submit Successfully..!");
              }
            
            
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


function resetForm() 
{
    $('#form').find('input:text').val('');
}


$(document).ready(function() {

    LoadList();

});


function submitdata()
{
    var name = $('#name').val();
    var age = $('#age').val();
    var stdclass = $('#class').val();
    var rank = $('#rank').val();
    if(name!="" && age!="" && stdclass!="" && rank!=""){
        $.ajax({
            url: "connect.php",
            type: "POST",
            data: {
                Name: name,
                Age: age,
                Stdentclass: stdclass,
                Rank: rank				
            },
            cache: false,
            success: function(dataResult){
                var dataResult = JSON.parse(dataResult);
                if(dataResult==200){
    
                    $('#form').find('input:text').val('');
                       // error message
                    // $("#msg").html(
                    //     "<span class='alert alert-success' id='error'>"
                    //     + "Please Choose atleast one</span>");
                                                            
               // alert("Submit Successfully..!");
                						
                }
                else{
                    // alert("Error occured..!");
                }
                LoadList();
            }
        });
        }
        else{
            // alert('Please fill all the field !');
           
        }
   return false;
}




