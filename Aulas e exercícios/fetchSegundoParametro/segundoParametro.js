async function inserirPosts(){
    document.getElementById('posts').innerHTML = 'Loading...';
 
    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo Teste',
            body: 'Corpo Teste',
            UserID: 4
        }),
        // para o body deve ser enviado uma string com um objeto
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // req = requisição
    let json = await req.json();
    console.log(json)
}