function cercaFoto(parametro) {
    let chiamata = fetch(`https://api.pexels.com/v1/search?query=${parametro}`, {
        headers: {
            Authorization: "hu2x2rLA7yjBUGhqZiw7dMGr43UpUAPNVVZl5AnRxDWjcnPFLHyOEdYQ"
        }
    });

    //se la chiamata va a buon fine creami una row e convertila in json (è una staffetta) 
    chiamata.then((risposta) => risposta.json()).then((rispostaElaborata) => {
        console.log(rispostaElaborata);
    });

    document.getElementById(`album`).innerHTML = `
    <div class="col">
    <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%"
                fill="#eceeef" dy=".3em">Thumbnail</text>
        </svg>
        <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>`
}

