import "./style.css";
let tasks = [];
let main = document.getElementById("main");

main.onclick = function(e) {
    let target = e.target;

    if(target.id === "confirm") {
        let task = {};
        let date = main.querySelector(".input_date").value;
        let time = main.querySelector(".input_time").value;
        let text = main.querySelector(".input_text").value;
        if(!validateDate(date)){
            return false;
        };
        if(!validateTime(time)){
            return false;
        }

        let checkTasks = true;
        console.log(tasks);
        for(let i = 0;i<tasks.length;i++) {
            if(tasks[i].date == date) {
                let keys = Object.keys(tasks[i]);
                for(let i = 0;i<keys.length;i++) {
                    if(keys[i] == time) {
                        alert("The time is already set, you can edit it");
                        return false;
                    }
                }
                tasks[i][time] = text;
                checkTasks = false;
            }
        }
        if(checkTasks) {
           task.date = date;
           task[time] = text;
           tasks.push(task);
        }
        
        let listContainer =  createTaskList(tasks);
        main.appendChild(listContainer);
    }

    else if (target.className == "btn-reduct") {
        let input = main.querySelector(".taskTime");
        input.disabled =false;
        let input2 = main.querySelector(".taskText");
        input2.disabled =false;
    }
    else if (target.className == "btn-remove") {
         updateTasks(target.parentNode);
         updateDOMList(target);        
    }

    function updateDOMList(target) {
        target.parentNode.remove();
        let list = main.querySelectorAll(".task-container");
        for(let i = 0;i<list.length;i++) {
            console.log(list[i]);
            let checkList = list[i].querySelectorAll(".taskDiv");
            console.log(checkList);
            if(checkList.length == 0) {
                list[i].remove();
            }
        }

    }


    function validateTime(time) {
        let pattern = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
        if (pattern.test(time)) {
            return true
        } else {
            alert("Invalide date: dat should be in HH:MM format!");
        }
        return false;
    }
    function validateDate(date) {
        let arrD = date.split(".");
        arrD[1] -= 1;
        let d = new Date(arrD[2], arrD[1], arrD[0]);
        if ((d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0])) {
        return true;
        } else {
            alert("Введена некорректная дата!");
            return false;
        }
    }



    function updateTasks(elem) {
        for(let i = 0; i< tasks.length;i++) {
            if(tasks[i].date == elem.parentNode.querySelector("h2").innerHTML) {
                let check = elem.querySelector(".taskTime").value;
                for(let key in tasks[i]) {
                    if(key == check) {
                        delete tasks[i][key];
                        for(let i =0;i<tasks.length;i++) {
                            console.log(tasks[i]);
                            if(Object.keys(tasks[i]).length>=1) {
                                tasks.splice(i,1);
                                i--;
                            }
                        }
                    }
                }
              
            }
        }
    }

    function createTaskList(tasks) {
        updateListContainer();
        
        let listContainer = document.createElement("div");
        listContainer.className = "list-container";

        tasks.map((elem)=> {
            createTask(listContainer,elem);
        })

        return listContainer;

    }

    function createTask(listContainer,elem) {
            let list = document.createElement("div");
            list.className = "task-container";
            let h2 = document.createElement("h2");
            h2.innerText = elem.date;
            listContainer.appendChild(list);
            list.appendChild(h2);
            

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
        input.disabled = true;
        let input2 = document.createElement("input");
        input2.className = "taskText";
        input2.value = elem[key];
        input2.disabled = true;
        let btn = document.createElement("button");
        btn.className = "btn-reduct";
        btn.innerHTML = "<i class='fa fa-edit'></i>Edit";
        let btn2 = document.createElement("button");
        btn2.className = "btn-remove";
        btn2.innerHTML = "<i class='fa fa-trash'></i>Delete";
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


