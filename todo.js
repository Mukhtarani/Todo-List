////Todo list starts here
function addTask(){
    var input = document.getElementById("input");
    var newTask = input.value;
    if(newTask != ""){
        var item = document.createElement("li");
        item.innerHTML= '<input type="button" class="done" id="donebutton" value="&#x2713;" onclick="markDone(this.parentNode)"/>' + "  " + 
        '<input type="button" class="remove" id="removebutton" value="&#x2715;" onclick="remove(this.parentNode)"/>'  + "  " +
        '<input type="button" class="important" id="importantbutton" value="&#x21;" onclick="markImportant(this.parentNode)">' + "  " +
        newTask; 

        document.getElementById("todoul").appendChild(item);
        input.value = " ";
        // input.placeholder= "enter new task..."; // not working
        
    }             
}

function remove(item){
    if(item.className == "finished"){
        item.remove();
    }
    
}

function markDone(item){ 
    item.className = "finished";

}

function doAbout(){
    // var About = document.getElementById("divabout");
    var About = document.getElementById("forAboutText")
    About.innerHTML=  'The author of this is Mukhtar.<br> You can find me on github @mukhtarani. <br>' + " " +
                       '<h5>Use green button to mark task as done <br>Use red button to remove task after it is done<br>Use blue button to mark as important</h5>'
                       
    About.className = "aboutcolor";
}

function clearAbout(){
    var clearabout = document.getElementById("forAboutText");
    clearabout.innerHTML = " ";
}

function markImportant(item){
    item.className = "important";
}
