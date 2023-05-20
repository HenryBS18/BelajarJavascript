const name = document.querySelector('.name');

const words = [...name.textContent].map(w => `<span>${w}</span>`).join('');
name.innerHTML = words;

const inputColor = document.querySelector('#input-color');
const colorPreview = document.querySelector('.bg-color-preview');
const changeColorButton = document.querySelector('.change-color-button');
let typedColor = '';

inputColor.addEventListener('input', () => {
    typedColor = inputColor.value;
    if (typedColor == '') {
        colorPreview.innerHTML = 'Color Preview';
        colorPreview.style.backgroundColor = 'white';
    } else {
        colorPreview.style.backgroundColor = typedColor;
        colorPreview.innerHTML = '';
    }
});

changeColorButton.addEventListener('click', () => {
    if (typedColor != '') {
        if (inputColor.value != '') {
            const confirmation = confirm('are you sure?');

            if (confirmation) {
                document.body.style.backgroundColor = typedColor;
                inputColor.value = '';
                colorPreview.innerHTML = 'Color Preview';
                colorPreview.style.backgroundColor = 'white';
            }
        } else {
            alert('Please type a color');
        }
    } else {
        document.body.style.backgroundColor = typedColor;
        alert('Please type a color');
    }
});

const inputColorPlaceholder = () => {
    const colorFormat = ['red', '#e8e8e8', 'rgb(120,80,40)'];
    let i = 0;

    setInterval(() => {
        inputColor.setAttribute('placeholder', colorFormat[i]);

        setTimeout(() => {
            inputColor.setAttribute('placeholder', '');
            i++;

            if (i > 2) {
                i = 0;
            }
        }, 1500);
    }, 2000);
}

inputColorPlaceholder();

const resetColorButton = document.querySelector('.reset-color-button');

resetColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'orange';
    inputColor.value = '';
    colorPreview.innerHTML = 'Color Preview';
    colorPreview.style.backgroundColor = 'white';
});

const textInput = document.querySelector('#text-speak');
const speakButton = document.querySelector('.text-speak-button');

const button = speakButton.addEventListener('click', () => {
    if (textInput.value != '') {
        let counter = 0;

        const speakInterval = setInterval(() => {
            let utterance = new SpeechSynthesisUtterance(textInput.value);
            speechSynthesis.speak(utterance);

            counter++;

            if (counter >= 2) {
                clearInterval(speakInterval);
            }
        }, 0);
    } else {
        document.innerHTML = alert('Please type a word');
    }
});

textInput.setAttribute('placeholder', 'Hello, my name is Henry');

// const cardCloseButton = document.querySelectorAll('.button-x');
// const list = ['HTML', 'CSS', 'JavaScript'];

// cardCloseButton.forEach((buttonX, i) => {
//     const cards = buttonX.parentElement;
//     cards.setAttribute('name', list[i]);

//     buttonX.addEventListener('click', (e) => {
//         e.target.parentElement.style.display = 'none';

//         showCard(e);
//     });
// });

const list = ['HTML', 'CSS', 'JavaScript'];
const cards = document.querySelectorAll('.card-item');

cards.forEach((card, i) => {
    card.setAttribute('name', list[i]);
});

const cardSection = document.querySelector('.card-section');

cardSection.addEventListener('click', (e) => {
    if (e.target.className == 'button-x') {
        e.target.parentElement.style.display = 'none';

        showCard(e);
    }
});

const showCard = (button) => {
    const showCardButton = document.createElement('button');
    showCardButton.classList.add('show-card', 'hover-bg-red');

    const cardName = button.target.parentElement.getAttribute('name');
    const cardList = document.querySelector('.card-section').children;

    showCardButton.innerHTML = `Show ${cardName} Card`;

    if (cardName == 'HTML') {
        button.target.parentElement.parentElement.insertBefore(showCardButton, cardList[2]);
    }
    else if (cardName == 'CSS') {
        button.target.parentElement.parentElement.insertBefore(showCardButton, cardList[3]);
    }
    else if (cardName == 'JavaScript') {
        button.target.parentElement.parentElement.appendChild(showCardButton);
    }

    showCardButton.addEventListener('click', () => {
        button.target.parentElement.style = '';
        showCardButton.remove();
    });
}

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.main-image');
const thumbnail = document.querySelectorAll('.thumbnail-image');

gallery.addEventListener('click', (e) => {
    if (e.target.className == 'thumbnail-image') {
        const imageSource = e.target.getAttribute('src');

        mainImage.setAttribute('src', imageSource);

        mainImage.classList.add('fade-in-animation');

        setTimeout(() => {
            mainImage.classList.remove('fade-in-animation');
        }, 100);

        thumbnail.forEach((image) => {
            image.className = 'thumbnail-image';
        });

        e.target.classList.add('selected-image');
    }
});