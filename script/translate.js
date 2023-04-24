const userLang = navigator.language || navigator.userLanguage; 

let data;

fetch("../data/languages.json")
    .then(response => response.json())
    .then(json => data = json);


const sectionTitles = document.querySelectorAll('h2')

const listedTitles = document.querySelectorAll('.item__title')
const descriptions = document.querySelectorAll('p')
const university = document.querySelectorAll('.university')
const details = document.querySelectorAll('.detailTranslate')
const openProjects = document.querySelectorAll('.panel a')
const projectsTitles = document.querySelectorAll('.panel__name')
const years = document.querySelectorAll('.item__year')

const pt = document.querySelector('.portuguese')
const en = document.querySelector('.english')

const translatePortuguese = () => {
    
    for (let i = 0; i < sectionTitles.length; i++) {
        sectionTitles[i].innerText = data.pt.sectionTitles[i]
    }

    for (let i = 0; i < listedTitles.length; i++) {
        listedTitles[i].innerText = data.pt.listedTitles[i]
    }

    for (let i = 0; i < projectsTitles.length; i++) {
        projectsTitles[i].innerText = data.pt.projectsTitles[i]
    }

    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].innerText = data.pt.descriptions[i]
    }

    for (let i = 0; i < university.length; i++) {
        university[i].innerText = data.pt.university
    }

    for (let i = 0; i < details.length; i++) {
        details[i].innerText = data.pt.details[i]
    }

    for (let i = 0; i < openProjects.length; i++) {
        openProjects[i].innerText = data.pt.openProjects
    }
    
    for (let i = 0; i < years.length; i++) {
        if (years[i].innerText.includes('Present')) {
            let text = years[i].innerText.replace('Present', 'Atual')
            years[i].innerText = text
        }
    }

    console.log('worked')
}

const translateEnglish = () => {
        for (let i = 0; i < sectionTitles.length; i++) {
        sectionTitles[i].innerText = data.en.sectionTitles[i]
    }

    for (let i = 0; i < listedTitles.length; i++) {
        listedTitles[i].innerText = data.en.listedTitles[i]
    }

    for (let i = 0; i < projectsTitles.length; i++) {
        projectsTitles[i].innerText = data.en.projectsTitles[i]
    }

    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].innerText = data.en.descriptions[i]
    }

    for (let i = 0; i < university.length; i++) {
        university[i].innerText = data.en.university
    }

    for (let i = 0; i < details.length; i++) {
        details[i].innerText = data.en.details[i]
    }

    for (let i = 0; i < openProjects.length; i++) {
        openProjects[i].innerText = data.en.openProjects
    }
    
    for (let i = 0; i < years.length; i++) {
        if (years[i].innerText.includes('Atual')) {
            let text = years[i].innerText.replace('Atual', 'Present')
            years[i].innerText = text
        }
    }
}


// Check if user chose BR
window.addEventListener("load", (event) => {
    if (userLang === 'pt-BR') {
        translatePortuguese()
    }
  });


pt.addEventListener('click', () => {
    translatePortuguese()

})

en.addEventListener('click', () => {
    translateEnglish()
})

