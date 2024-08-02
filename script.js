const button = document.querySelector('.generateButton')
const result = document.querySelector('.result')

function numberGenerator() {

    const math = Math.floor(Math.random() *16)

    console.log(math);

    result.textContent = math
    

}

button.addEventListener('click', numberGenerator)

