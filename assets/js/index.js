let taskList = JSON.parse(localStorage.getItem("taskList"));

let add = () => {
    let inp = document.getElementById("input");
    if (inp.value !== "") {
        taskList.push(inp.value);
        localStorage.setItem("taskList", JSON.stringify(taskList));
        displayItems();
    };
};


// this function for to use Enter button , to put input value in li element
let el = document.getElementById("input");
el.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        add();
    }
});


// This function take input value from local storage after page refresh

let displayItems = () => {
    let itemsFromStorage = JSON.parse(localStorage.getItem("taskList"));
    const ul = document.getElementById("ul");
    ul.innerHTML = '';

    if (itemsFromStorage != undefined) {
        for (let i = 0; i < itemsFromStorage.length; i++) {
            const newLi = document.createElement("li");

            // Creating button for delete value of input value
            const deleteButton = document.createElement("button");
            deleteButton.textContent = 'x';

            deleteButton.onclick = () => {
                deleteButton.parentNode.remove();
                deleted();
            };

            newLi.appendChild(document.createTextNode(itemsFromStorage[i]));
            newLi.appendChild(deleteButton);
            ul.appendChild(newLi);

        }
        items = itemsFromStorage;

    }
};

let clearInput = () => {
    document.getElementById("input").value = "";
};

// Add a  mark done when clicking on a list item
let list = document.getElementById('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);


// Function  is for delete  from local storage key  
const deleted = (index) => {
    localStorage.getItem("taskList", JSON.stringify(taskList));
    taskList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

displayItems();





