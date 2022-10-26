async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();
    body.append('title', 'Algum Título');
    body.append('arquivo', arquivo)

    let req = await fetch('https/www.site_ficticio.com.br/upload', {
        method: 'post',
        body: body,
        headers: { 
            'Content-Type' : 'multipart/form-data'
        }
    })
}