import "./style.css";
let tasks = [];
let main = document.getElementById("main");

main.onclick = function(e) {
    let target = e.target;
   // console.log(target.id);

    if(target.id === "confirm") {
        let task = {};
        let date = main.querySelector(".input_date").value;
        let time = main.querySelector(".input_time").value;
        let text = main.querySelector(".input_text").value;

        // check data
        let checkTasks = true;
        console.log(tasks);
        for(let i = 0;i<tasks.length;i++) {
            if(tasks[i].date == date) {
                tasks[i][time] = text;
                checkTasks = false;
            }
        }
        //
        if(checkTasks) {
        task.date = date;
        task[time] = text;
        //task.text = text;
        tasks.push(task);
    }
        
        let listContainer =  createTaskList(tasks);
        main.appendChild(listContainer);
    }





    function createTaskList(tasks) {
        updateListContainer();
        //console.log(tasks);
        let listContainer = document.createElement("div");
        listContainer.className = "list-container";

        tasks.map((elem)=> {
            createTask(listContainer,elem);
        })

        return listContainer;

    }

    function createTask(listContainer,elem) {
            let list = document.createElement("div");
            let h2 = document.createElement("h2");
            h2.innerText = elem.date;
            listContainer.appendChild(list);
            list.appendChild(h2);
            console.log(elem);

            Object.keys(elem).map((key)=>{
                if(key != "date") {
                    createOneTask(key,list,elem);
                }
            })
            
            
    }
    function createOneTask(key,list,elem) {
        let div = document.createElement("div");
        div.className = "taskDiv";
        let input = document.createElement("input");
        input.className = "taskTime";
        input.value = key;
        let input2 = document.createElement("input");
        input2.className = "taskText";
        input2.value = elem[key];
        let btn = document.createElement("button");
        btn.className = "btn-reduct";
        btn.innerHTML = "Reduct";
        let btn2 = document.createElement("button");
        btn2.className = "btn-remove";
        btn2.innerHTML = "Remove";
        div.appendChild(input);
        div.appendChild(input2);
        div.appendChild(btn);
        div.appendChild(btn2);
        list.appendChild(div);
    }

    function updateListContainer() {
        let listContainer = document.querySelector(".list-container");
        if(listContainer) {
            listContainer.remove();
        }
    }

}
//console.log(createTaskList);

