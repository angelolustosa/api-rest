/* const listAllTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then(data =>  console.log(data))
} */

// 1 - Exibir um obj com qtd e data
/* const listAllTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then(data => console.log({
            qtd: data.length,
            data: data
        }))
} */

// 2 - Exibir um obj com qtd e data somente de um usuário específico
/* const listAllTodosByIdUser = (id) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then(data => {
            let dataFiltered = data.filter(i => i.userId === id )
            console.log({
                qtd: dataFiltered.length,
                data: dataFiltered
            })
        })
} */
//listAllTodosByIdUser(10);

// 3 - Exibir um obj com qtd e data somente de um id específico
/* const listAllTodosById = id => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data =>  console.log(data) )
} */


// 4 - Criar um recurso utilizando o REST API do jsonplaceholder
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        userId: 2,
        title: "Vamos para a festa de amanha",
        body: "Quero ir com minha família e amigos!"
    })
})
    .then(response => response.json())
    .then(json => console.log(JSON.stringify(json, null, 4) ))