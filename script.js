function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    fetch('http://localhost:9000/Livros', {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa(login + ':' + senha)
        }
    })
        .then(response => {
            if (response.status === 200) {
                Swal.fire('Você logou!');
                window.location.href = 'Menu.html';
            } else {
                Swal.fire('Usuário ou senha incorreto');
            }
        })
        .catch(error => {
            console.error('Erro na solicitação: ' + error);
        });
}
