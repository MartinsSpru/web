const items = [];

function addTask() {
    let input = document.getElementById('input').value.trim();
    if (input) {
        items.push(input);
        renderList();
        document.getElementById('input').value = ''; // Clear the input field
    }
}

function renderList() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous output

    items.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `${item} <button onclick="deleteTask(${index})">Delete</button>`;
        listItem.setAttribute('contenteditable', 'true'); // Make the div content editable
        output.appendChild(listItem);
    });
}

function deleteTask(index) {
    items.splice(index, 1);
    renderList();
}