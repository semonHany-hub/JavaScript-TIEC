
let tasks=[];//it's literal creation,but (new Array();) is constructor creation.
input=document.querySelector('input');
button=document.querySelector('.add');

getTasks();
tasks.forEach(function(task) {
listCreation(task)});

console.log(tasks);
button.addEventListener("click", function(e) {
    if(input.value=="") 
        {
            alert=document.createElement("div");
            alert.className="alert_empty";
            alert.textContent="Please, enter a task";
            document.querySelector("form div").append(alert);
            setTimeout(function() {
                alert.style.display="none"}, 3000);
        }
    else
        {
            let task=e.currentTarget.parentElement.children[0].value;
            e.preventDefault();
            tasks.push(task);
            listCreation(task);
            setTasks(tasks);
            let alert=document.createElement("div");
            alert.className="alert_addition";
            alert.textContent="The task "+ task+" added successfully";
            document.querySelector("form div").append(alert);
            setTimeout(function(){
                alert.style.display="none"/*= alert.remove()*/}, 3000);

            e.currentTarget.parentElement.getElementsByTagName("ul")[0].className="list";
        }
    })


function setTasks(tasks)
{
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function getTasks()
{
    tasks = JSON.parse(localStorage.getItem("tasks"));
    return tasks;
}


function listCreation(task)
{
    let taskdiv=document.createElement("div");
    taskdiv.className="taskdiv";

    let li = document.createElement("li");
    li.textContent = task;
    document.querySelector("ul").appendChild(taskdiv);
    document.querySelector("ul div").appendChild(li);

    let deletionButton=document.createElement("button");
    deletionButton.type="button";
    deletionButton.textContent="X";
    document.querySelector("ul div").append(deletionButton);

    deletionButton.addEventListener("click",function(e){
        deleteTask(e.currentTarget.parentElement.children[0]);
      });
}


function deleteTask(task) //task is the li element
{
    let tasks=JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(tasks.indexOf(task.textContent), 1);

   let alert=document.createElement("div");
   alert.className="alert_removal";
   alert.textContent="The task "+task.textContent+" removed successfully";
   task.parentElement.children[1].remove();
   task.remove();
   localStorage.setItem("tasks", JSON.stringify(tasks));
   document.querySelector("form div").append(alert);
   setTimeout(function(){
       alert.style.display="none";//يعمل على أزالة العنصر
   }, 3000);
}

/*JSON(java script object notation) is a constructor which is a mean of communication between server, client and databases server.
before this notation we were using XML which is a markup language uses tags like HTML but it's typeless*/
//localstorage and document.cookie are a space in the browser(client side) where cookies and some other data are stored