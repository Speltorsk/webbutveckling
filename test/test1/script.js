const button = document.getElementById('addContentButton');
const contentArea = document.getElementById('contentArea')
const outputText = document.getElementsByid('outputText')

button.addEventListener('click', () => {

    const newParagraph = document.createElement('P');
    newParagraph.innerHTML = 'hej detta är ett test';

    contentArea.appendChild(newParagraph);

});

//button.addEventListener('click', (InputEvent) =>{

//});