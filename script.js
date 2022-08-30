function buttonClick(val){
    document.getElementById('text-1').value += val;
    
}
function clearButton() {
    document.getElementById('text-1').value = "";
}
function ceButton() {
    var str =document.getElementById('text-1').value.slice(0,-1) 
    document.getElementById('text-1').value = str ;
}

function equalToButton() {
    
    var text = document.getElementById('text-1').value
    
   
    var result = eval(text)
    document.getElementById('text-1').value = result;
    if(typeof(result)==='undefined'){
        document.getElementById('text-1').value='0'
    }
    }

    

