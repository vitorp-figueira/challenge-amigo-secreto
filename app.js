let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;

    if(!nomeAmigo) {
        alert('Digite o nome de um Amigo!');
        return;
    }

    if ((amigos).includes(nomeAmigo)) {
        alert(`${nomeAmigo} já foi incluido na Lista!`);
        return;
    }
    resultado.innerHTML = '';
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    atualizarLista();
}

function atualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function apagarLista () {
    amigos = [];
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não é possivel sortear, nenhum amigo foi adicionado!');
        return;
    } else {
        if (amigos.length === 1) {
            alert('Não é possivel sortear, apenas 01 amigo foi adicionado!');
            return;
        }
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `E o amigo sorteado foi: ${sorteado}`;

    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = '';
    apagarLista();
}