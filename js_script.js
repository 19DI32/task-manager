let tasks = [];
let main = document.getElementById("main");

main.onclick = function(e) {
    let target = e.target;
    console.log(target.id);

    if(target.id === "confirm") {
        let task = {};
        let date = main.querySelector(".input_date").value;
        let time = main.querySelector(".input_time").value;
        let text = main.querySelector(".input_text").value;

        // check data
        console.log(date);
        //

        task.date = date;
        task[time] = text;
        //task.text = text;
        tasks.push(task);
        
        let listContainer =  createTaskList(tasks);
        main.appendChild(listContainer);
    }





    function createTaskList(tasks) {
        updateListContainer();
        console.log(tasks);
        let listContainer = document.createElement("div");
        listContainer.className = "list-container";

        tasks.map((elem)=> {
            let list = document.createElement("div");
            let h2 = document.createElement("h2");
            h2.innerText = elem.date;
            listContainer.appendChild(list);
            list.appendChild(h2);
        })

        return listContainer;

    }

    function updateListContainer() {
        let listContainer = document.querySelector(".list-container");
        if(listContainer) {
            listContainer.remove();
        }
    }

}
//console.log(createTaskList);

