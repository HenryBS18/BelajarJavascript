// Search Button, Input and Result section
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const resultSection = document.getElementById('result-section');

// Search Movie Function
const searchMovies = () => {
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '7995cd8',
            's': searchInput.value
        },
        success: (result) => {
            if (result.Response == 'True') {
                resultSection.innerHTML = '';

                let movies = result.Search;

                movies.forEach((movie) => {
                    let card = document.createElement('div');
                    card.classList.add('col-md-4', 'mb-4');
                    card.innerHTML = `
                        <div class="card">
                            <img src="${movie.Poster}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${movie.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                                <a class="btn btn-primary" id="seeDetailButton" data-id="${movie.imdbID}" data-bs-toggle="modal" data-bs-target="#detailModal">
                                    See Detail
                                </a>
                            </div>
                        </div>
                    `;

                    resultSection.appendChild(card);
                });

            } else {
                resultSection.innerHTML = `
                    <div class="col">
                        <h1 class="text-center">${result.Error}</h1>
                    </col>
                `;
            }
        },
        error: (err) => {
            console.error(err);
        }
    });
    searchInput.value = '';
}

// Search Movie when click Search Button
searchButton.addEventListener('click', () => {
    searchMovies();
});

// Search Movie when press Enter Button
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchMovies();
    }
});

// See Detail when press See Detail Button
resultSection.addEventListener('click', (e) => {
    if (e.target.id == 'seeDetailButton') {
        let imdbID = e.target.getAttribute('data-id');

        $.ajax({
            url: 'http://www.omdbapi.com',
            type: 'get',
            dataType: 'json',
            data: {
                'apikey': '7995cd8',
                'i': imdbID
            },
            success: (movie) => {
                if (movie.Response === 'True') {
                    const modalBody = document.getElementsByClassName('modal-body')[0];

                    modalBody.innerHTML = `
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="${movie.Poster}" class="img-fluid">
                                </div>

                                <div class="col-md-8">
                                    <ul class="list-group">
                                        <li class="list-group-item"><h3>${movie.Title}</h3></li>
                                        <li class="list-group-item">Released: ${movie.Released}</li>
                                        <li class="list-group-item">Genre: ${movie.Genre}</li>
                                        <li class="list-group-item">Director: ${movie.Director}</li>
                                        <li class="list-group-item">Actors: ${movie.Actors}</li>
                                        <li class="list-group-item">IMDB Rating: ${movie.imdbRating}</li>
                                        <li class="list-group-item">Plot: ${movie.Plot}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `;
                }
            },
            error: (err) => {
                console.error(err);
            }
        });
    }
});
