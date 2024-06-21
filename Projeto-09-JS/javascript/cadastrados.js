let filmesLista = document.getElementById('lista');

let items = JSON.parse(localStorage.getItem('items'));

if(items == null){
    items = []
    localStorage.setItem('items', JSON.stringify(items))
};

items.forEach(item => {
    adicionarFilme(item)
});

function adicionarFilme(novoFilme){

  

    let itemElement = document.createElement('li');

    let itemText = document.createElement('p');
    itemText.innerText = `Nome Original: ${novoFilme.nomeOriginal}\nNome Brasileiro: ${novoFilme.nomeBrasileiro}\nDiretor: ${novoFilme.nomeDiretor}\nData de Estreia: ${novoFilme.data}\nClassificação Indicativa: ${novoFilme.classificacao}\nGênero: ${novoFilme.genero}\nIdiomas Disponíveis: ${novoFilme.idioma}`;

    let botaoExcluir = document.createElement('button');
    botaoExcluir.id = 'cadastradosButton';
    botaoExcluir.className = 'cadastradosButton'
    botaoExcluir.textContent = 'Excluir Filme';
    botaoExcluir.addEventListener('click', function() {
        // Obter a lista atual de filmes do localStorage
        let items = JSON.parse(localStorage.getItem('items'));
    
        // Encontrar o índice do filme que queremos excluir
        let index = items.findIndex(item => item.nomeOriginal === novoFilme.nomeOriginal);
    
        // Remover o filme do array usando splice se ele for encontrado
        if (index !== -1) {
            items.splice(index, 1);
        }
    
        // Salvar a nova lista de filmes no localStorage
        localStorage.setItem('items', JSON.stringify(items));
    
        // Remover o elemento da lista da interface do usuário
        itemElement.remove();
        botaoExcluir.remove();

    });
    

    
    
    itemElement.appendChild(itemText);
    filmesLista.appendChild(itemElement);
    filmesLista.append(botaoExcluir);
};


