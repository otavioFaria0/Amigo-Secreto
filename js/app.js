//Array para armazenas os nomes adicionados 
let arrayNomes =[];

function adicionar() { //Botão adicionar
    //Recebe e confere os valores dos Campos e armazena na Array 
    let nome = document.getElementById('nome-amigo').value;
    if (nome!==''){
       
        if (!arrayNomes.includes(`${nome}`)){
        arrayNomes.push(nome);
        atualizarListaAmigos();
       
        } else {
            alert(`${nome} já foi adicionado à lista.`);
        }
    } else {
        alert ('Voce deve adicionar algum nome');
    }
    //Após preencher um nome, deixa o espaço livre para inserir o próximo
    limparCampos('nome-amigo'); 
}

function atualizarListaAmigos() {
    let paragrafoLista = document.getElementById('lista-amigos');
    paragrafoLista.innerHTML = '';

    arrayNomes.forEach((nome, index) => {
        let span = document.createElement('span');
        span.textContent = nome;
        span.style.cursor = 'pointer';

        span.addEventListener('click', function () {
            removerAmigo(index);
        });

     paragrafoLista.appendChild(span);

        if (index < arrayNomes.length - 1) {
         paragrafoLista.appendChild(document.createTextNode(', '));
        }
    });
}

function removerAmigo(indice) {
    arrayNomes.splice(indice, 1);
    atualizarListaAmigos();
}


function reiniciar() { //Botão reiniciar, limpa os dados armazenados e a tela
    arrayNomes=[];
    let amigosIncluidos=document.getElementById('lista-amigos');
    amigosIncluidos.innerHTML=`${arrayNomes}`;
    let sorteioFinal = document.getElementById('lista-sorteio');
    sorteioFinal.innerHTML = '';
}

function sortear() { //Botão sortear
    //Verifica se há 2 ou mais nomes, em quantidade par 
    if (arrayNomes.length%2||arrayNomes.length<=2) {
        alert ('Voce não pode sortear com essa quantidade de nomes.');
    } else {
        //Embaralha os nomes armazenados na Array
        for (let i = 0; i < arrayNomes.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayNomes[i], arrayNomes[j]] = [arrayNomes[j], arrayNomes[i]];
        }

        //Limpa a tela para caso a pessoa faça varios sorteios
        let sorteioFinal = document.getElementById('lista-sorteio');
        sorteioFinal.innerHTML = '';

        //Loop para pegar a Array embaralhada e colocar na tela cada resultado individual
        let contador = 0
        while (contador < arrayNomes.length-1) {
            let sorteioFinal=document.getElementById('lista-sorteio');
            sorteioFinal.innerHTML+=`<br>${arrayNomes[contador]} --> ${arrayNomes[contador+1]}</br>`; 
            contador++;
        }
        
        //Medida para mostrar corretamente a ultima linha de sorteio sem repetição
        sorteioFinal=document.getElementById('lista-sorteio');
        sorteioFinal.innerHTML+= `<br>${arrayNomes[arrayNomes.length-1]} --> ${arrayNomes[0]}</br>`;
    }
}

function limparCampos(id) {
    document.getElementById(`${id}`).value='';
}