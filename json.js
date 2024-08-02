console.log('antes do fetch');

//sem arrow function
/* fetch('https://jsonplaceholder.typicode.com/users', console.log('executando do fetch'))
    .then(function (response) {
        console.log('pegando o response', response);
        return response.json() 
    })
    .then(function (json) {
        console.log('pegando o json', json);
        //return console.log(json);
    }) */


//com arrow function
fetch('https://ajsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error('Error:', error.message));

console.log('finalizando o fetch');

// função anônima com arrow function
() => {

}

// função anônima sem arrow function
function() {

}