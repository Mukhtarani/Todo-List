////Todo list starts here
    function addTask(){
      var input = document.getElementById("input");
      var newTask = input.value;

        if(newTask !== ""){
            var item = document.createElement("li");
            item.innerHTML= '<input type="button" class="done" id="donebutton" value="&#x2713;" onclick="markDone(this.parentNode)"/>' + "  " + 
            '<input type="button" class="remove" id="removebutton" value="&#x2715;" onclick="remove(this.parentNode)"/>'  + "  " + 
            '<input type="button" class="important" id="importantbutton" value="&#x21;" onclick="markImportant(this.parentNode)">' + "  " + 
            newTask; 
    
            document.getElementById("todoul").appendChild(item);
            input.value = ""; //clears task from input after adding
            input.placeholder= "enter new task...";// changes placeholder
        
        }
            else{
              window.alert("Hi, enter a task!!")
             }
            
            
    }             
      
function remove(item){
    if(item.className == "finished"){
        item.remove();
    } else {window.alert("You can only remove task after it is done")}
    
}

function markDone(item){ 
    item.className = "finished";

}

function doAbout(){
    // var About = document.getElementById("divabout");
    var About = document.getElementById("forAboutText")
    About.innerHTML=  'The author of this is Mukhtar.<br> You can find me on github @mukhtarani. <br>' + " " +
                       '<h5>Use green button to mark task as done <br>Use red button to remove task after it is done<br>Use blue button to mark as important</h5>'
                       
    About.className = "aboutcolor";// applies style with class attribute aboutcolor from css
}

function clearAbout(){
    var clearabout = document.getElementById("forAboutText");
    clearabout.innerHTML = "";
}

function markImportant(item){
    item.className = "important";// applies style with class attribute important from css
}
