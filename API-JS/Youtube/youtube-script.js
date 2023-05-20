// Search Input, Button, Result and Select Type
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultSection = document.getElementById('result-section');
const selectOptions = document.getElementById('select-type');

let searchType = selectOptions.value;

selectOptions.addEventListener('change', () => {
    searchType = selectOptions.value;
});

// Search Youtube Function
const searchYoutube = () => {
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        type: 'GET',
        dataType: 'json',
        data: {
            'key': 'AIzaSyCXAUyAgzj-SMvoFyxI6uYHsxNIwC-DUiU',
            'part': 'snippet',
            'q': searchInput.value,
            'type': searchType,
            'maxResults': 10 // default 5
        },
        success: (result) => {
            if (result.items.length === 0) {
                console.error('Not Found');
            } else {
                resultSection.innerHTML = '';

                let youtube = result.items;

                youtube.forEach((e) => {
                    let channelId = e.snippet.channelId;
                    let videoId = e.id.videoId;

                    $.ajax({
                        url: 'https://www.googleapis.com/youtube/v3/channels',
                        type: 'GET',
                        dataType: 'json',
                        data: {
                            'key': 'AIzaSyCXAUyAgzj-SMvoFyxI6uYHsxNIwC-DUiU',
                            'part': 'statistics, snippet',
                            'id': channelId
                        }, success: (hasil) => {
                            let profilPic = hasil.items[0].snippet.thumbnails.default.url;
                            let subCount = hasil.items[0].statistics.subscriberCount;

                            let card = document.createElement('div');

                            if (searchType === 'channel') {
                                card.classList.add('col-md-4', 'mb-4');
                                card.innerHTML = `
                                    <div class="card">
                                        <img src="${e.snippet.thumbnails.high.url}" class="card-img-top">
                                        <div class="card-body">
                                            <h5 class="card-title">${e.snippet.title}</h5>
                                            <h6 class="card-subtitle mb-2 text-body-secondary">Subscriber: ${subCount}</h6>
                                        </div>
                                    </div>
                                `;
                            } else if (searchType === 'video') {
                                card.classList.add('col-md-4', 'mb-4');
                                card.innerHTML = `

                                <div class="row mb-2">
                                    <div class="col ps-0 pe-3">
                                        <div class="ratio ratio-16x9">
                                            <iframe class="rounded" src="https://www.youtube.com/embed/` + videoId + `?rel=0" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-1 px-0">
                                        <img src="${profilPic}" class="card-img-top rounded-circle">
                                    </div>

                                    <div class="col-md-11">
                                        <h6 class="card-title mb-1">${e.snippet.title}</h6>
                                        <h6 class="card-subtitle text-body-secondary">${e.snippet.channelTitle}</h6>
                                        <h6 class="card-subtitle text-body-secondary">Subscriber: ${subCount}</h6>
                                    </div>
                                </div>
                            `;
                            }
                            resultSection.appendChild(card);
                        },
                        error: (err) => {
                            console.error(err);
                        }
                    });
                });
            }
        },
        error: (err) => {
            console.error(err);

            resultSection.innerHTML = `
                    <div class="col">
                        <h1 class="text-center">Something Went Wrong!</h1>
                    </col>
                `;
        }
    });
    searchInput.value = '';
}

// Search Youtube when click Search Button
searchButton.addEventListener('click', () => {
    searchYoutube();
});

// Search Youtube when press Enter
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchYoutube();
    }
});
