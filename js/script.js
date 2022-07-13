



var form = document.querySelector('#task-form');
var taskInput = document.querySelector('#new-task');
var filter = document.querySelector('#filter');
var taskList = document.querySelector('#tasks');
var clearBtn = document.querySelector('#clear-task');




//add event listener

form.addEventListener('submit' , jubo1);
taskList.addEventListener('click' , jubo2);
clearBtn.addEventListener('click' , jubo3);
filter.addEventListener('keyup' , jubo4);

document.addEventListener('DOMContentLoaded' , getTask);




//add functions

function jubo1(p1)
{
    if(taskInput.value == "")
    {
        alert ("please fill up the new task input filled");
    }
    else
    {
        var a = document.createElement('li');
        a.appendChild(document.createTextNode(taskInput.value ));

        taskList.appendChild(a);


        
        var crossBtn = document.createElement('a');
        crossBtn.setAttribute('href','#');
        crossBtn.appendChild(document.createTextNode(" x"));

        a.appendChild(crossBtn);


        storeTaskInLocalStore(taskInput.value);

        taskInput.value = "";
    }

    p1.preventDefault();
}







function jubo2(p1)
{
 if(p1.target.hasAttribute('href'))
 {
     if(confirm("are you sure"))
     {
        var parnt = p1.target.parentElement;
        parnt.remove();

        removeFromLocalStorage(parnt);
     }
    
 }
}







function jubo3(p1)
{
    taskList.innerHTML = "";


    localStorage.clear();
}







function jubo4(p1)
{
    var text = p1.target.value.toLowerCase();
    var arr = document.querySelectorAll('li');

    arr.forEach
    (
        function(par1)
        {
            var item = par1.textContent;
            if(item.toLowerCase().indexOf(text) != -1)
            {
                par1.style.display = 'block';
            }
            else
            {
                par1.style.display = 'none';
            }
        }
    );
}





//store task in local storage

function storeTaskInLocalStore(rec)
{
    var tasks;
    if(localStorage.getItem('tasks')==null)
    {
        tasks=[];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(rec);

    localStorage.setItem('tasks' , JSON.stringify(tasks))
}








function getTask()
{
    var tasks;
    if(localStorage.getItem('tasks')==null)
    {
        tasks=[];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } 



    tasks.forEach
    (
        function(pa)
        {
            var a = document.createElement('li');
            a.appendChild(document.createTextNode(pa));
    
            taskList.appendChild(a);
    
    
            
            var crossBtn = document.createElement('a');
            crossBtn.setAttribute('href','#');
            crossBtn.appendChild(document.createTextNode(" x"));
    
            a.appendChild(crossBtn);
        }
    );


}









function removeFromLocalStorage(rec)
{
    var tasks;
    if(localStorage.getItem('tasks')==null)
    {
        tasks=[];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }


    var parnt = rec;
    parnt.removeChild(parnt.lastChild); //<a>X</a> 
    

    tasks.forEach
    (
        function(p1,p2)
        {
            if(parnt.textContent.trim()===p1)
            {
                tasks.splice(p2,1)
            }
        }
    );

    localStorage.setItem('tasks' , JSON.stringify(tasks));

}