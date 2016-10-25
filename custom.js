var counter = 0;
$(function(){
    $('p#add_field').click(function(){
    counter += 1;
    $('#container').append(
        '</br><strong>Item ' + counter + '</strong><br />'
        + '<input id="field_' + counter + '" name="item[]' + '" type="text" />' 
        +'<strong>quantity ' + counter + '</strong>' 
        +'<input class="qty" id="quantity' + counter + '" name="quantity[]' + '" type="text" />' 
        +'<strong>rate ' + counter + '</strong>' 
        +'<input id="rate' + counter + '" name="rate[]' + '" type="text" />' 
        +'<strong>Amount ' + counter + '</strong>' 
        +'<input id="field_' + counter + '" name="amount[]' + '" type="text" />' 
        +'<strong>img ' + counter + '</strong>' 
        +'<input id="field_' + counter + '" name="image[]' + '" type="file" />' 
        +'<strong>Gender ' + counter + '</strong>' 
        +'<input id="male_' + counter + '" name="gender' + counter +'" type="radio" value="male"/>Male' 
        +'<input id="female_' + counter + '" name="gender' + counter +'" type="radio" value="female"/>female'
        +'&nbsp;<strong>Employee ' + counter + '</strong>'
        +'<select id="emp_' + counter + '" name="emp[]'  +'">\n\
           <option value="varun">varun</option>\n\
\n\<option value="nitin">nitin</option>\n\
         </select>'
        
        );
    });
});