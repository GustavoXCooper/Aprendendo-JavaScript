async function loadPosts(){
    document.getElementById('posts').innerHTML = 'Loading...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    // ^^ é uma promise
    let json = await req.json();
    montarBlog(json);
};
/*
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resultado) {
        return resultado.json();
    });
        .then(function(json){
            montarBlog(json);
        });
    .catch(function(error){
        console.log('Deu erro');
    });
};
*/
function montarBlog(lista){
    let html = '';

    for(i=0; i<lista.length; i++){
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'</br>';
        html += '<hr/>';
    }

    document.getElementById('posts').innerHTML = html;
}
