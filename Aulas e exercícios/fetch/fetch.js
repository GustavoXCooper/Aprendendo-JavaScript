// Primeira forma
/*
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resultado) {
        console.log(resultado);
    })
    .catch(function(error){
        console.log('Deu erro');
    })
}; 
*/

// Segunda forma
/*
function loadPosts(){
    document.getElementById('posts').innerHTML = 'Loading...'

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resultado) {
        return resultado.json();
    })
        .then(function(json){
            document.getElementById('posts').innerHTML = json.length+ ' posts'
        })
    .catch(function(error){
        console.log('Deu erro');
    })
};
*/

// Terceira forma (Não só pegar a quantidade de posts, mas exibir os posts)

function loadPosts(){
    document.getElementById('posts').innerHTML = 'Loading...'

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resultado) {
        return resultado.json();
    })
        .then(function(json){
            montarBlog(json);
        })
    .catch(function(error){
        console.log('Deu erro');
    })
};

function montarBlog(lista){
    let html = '';

    for(i=0; i<lista.length; i++){
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'</br>';
        html += '<hr/>';
    }

    document.getElementById('posts').innerHTML = html;
}