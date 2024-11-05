let toDoList = []
const listOfTask = () => {
    let nameOfTask = document.getElementById('nameoftask').value
    let description = document.getElementById('description').value 
    // console.log(nameOfTask);
    // console.log(description);
    toDoList.push({'eachTask' : nameOfTask, 'desc': description})
    console.log(toDoList);
    document.getElementById('input-text').innerHTML = ''
    toDoList.forEach(element => {
        document.getElementById("input-text").innerHTML += `
         <div class="input-text p-2 rounded-3 mb-2" >
                    <h4>${element.eachTask}</h4>
                    <h6 class="py-2">${element.desc}</h6>
                    <div class="task-button d-flex gap-2">
                        <button class="btn btn-success fs-5" type="submit"><i class="fa-solid fa-check"></i></button>
                        <button class="btn btn-danger" type="submit"><i class="fa-solid fa-trash"></i></button>
                    </div>
            </div>`
    });
}