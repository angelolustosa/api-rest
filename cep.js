//Consumir a api de cep viaCep e criar uma função no qual eu passo o cep e retorno no console os dados do endereço
const consultaCep = cep => {
    fetch(`https://viacep.com.br/ws/${cep}/json`)
   .then(response => response.json())
   .then(data => console.log(data))
}

consultaCep("60351760")