// $.ajax({
//     url: 'http://127.0.0.1:5500/API-JS/data.json',
//     success: data => {
//         data.forEach(m => {
//             console.log(`nama: ${m.name}`);
//             console.log(`umur: ${m.age}`);
//         });
//     },
//     error: e => console.error(e)
// });

console.log('lol');

const searchButton = document.getElementById('btn-search');
const searchInput = document.getElementById('input-search');

searchButton.addEventListener('click', () => {
    // $.ajax({
    //     url: 'http://www.omdbapi.com',
    //     data: {
    //         'apikey': '7995cd8',
    //         's': searchInput.value
    //     },
    //     success: (result) => {
    //         console.log(result);
    //     },
    //     error: (err) => {
    //         console.error(err);
    //     }
    // });
    console.log(searchInput.value);
});



function halo() {
    console.log('halo');
}

















