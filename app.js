function init() {

    let input = prompt("What would you like to do?");
    const todos = [];

    while (input !== 'quit' && input !== 'q') {
        if (input === 'list') {
            console.log('***********');
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i}: ${todos[i]}`);
            }
            console.log('***********');
        } else if (input === 'new') {
            const newTodo = prompt("What ToDo would you like to add?")
            todos.push(newTodo);
            console.log(`${newTodo} has been added to the list!`);
        } else if (input === 'delete') {
            const index = parseInt(prompt('Enter index to delete:'))
            if (!Number.isNaN(index)) {
                const deleted = todos.splice(index, 1);
                console.log(`${deleted[0]} has been deleted.`);
            } else {
                console.log("Invalid index.")
            }
        }
        input = prompt("What would you like to do?");
    }
}

document.getElementById('start').addEventListener('click', init);
