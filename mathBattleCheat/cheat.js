

function play(){
    var id= setInterval(fetch,3)
    
    function fetch(){
        var x= parseInt(document.querySelectorAll("#task_x")[0].innerText)
        var y=  parseInt(document.querySelectorAll("#task_y")[0].innerText)
        var op=document.querySelectorAll("#task_op")[0].innerText
        var ans=parseInt(document.querySelectorAll("#task_res")[0].innerText)
        var real=0

        if (op=="-"){
             real= x-y 
            }
        else if (op=="+"){
            real=x+y }
        else if (op=="/"){
            real=x/y }
        else {
            real=x*y }
        
        if (real==ans){
            document.querySelectorAll("#button_correct")[0].click()
        }
        else{
            document.querySelectorAll("#button_wrong")[0].click()}
        
    }}