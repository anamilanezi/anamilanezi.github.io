const userLang = navigator.language || navigator.userLanguage; 

const data = {
    "pt": {

        "sectionTitles": [
            "Sobre mim", 
            "Licenças & Certificações",
            "Experiência Profissional",
            "Formação Acadêmica",
            "Habilidades",
            "Idiomas",
            "Projetos"
        ],

        "descriptions": [
            "Sou uma pessoa criativa e curiosa que sempre foi fascinada pelo poder da tecnologia. Meu background acadêmico e na pesquisa me oferecem ferramentas e uma perspectiva voltada a resolução de problemas valiosas para a indústria e que me ajudam muito nessa jornada para me tornar uma Web Developer. Agora busco por oportunidades onde eu possa contribuir e aplicar os conhecimentos e me desenvolver ainda mais na carreira. Estou disponível para contratos como freelancer, CLT e PJ.",
            // "Sou uma pessoa criativa e curiosa que sempre foi fascinada pelo poder da tecnologia. Meu background acadêmico e na pesquisa me oferecem ferramentas e uma perspectiva voltada a resolução de problemas valiosas para a indústria e que me ajudam muito nessa jornada para me tornar uma <u>pro</u>gramadora. Agora busco por oportunidades onde eu possa contribuir e aplicar os conhecimentos tanto na área de dados, como desenvolvimento web, e me desenvolver ainda mais na carreira. Estou disponível para contratos como freelancer, CLT e PJ.",
            "HTML5, CSS3, JavaScript e Design Responsivo",
            "Introdução às principais habilidades e ferramentas analíticas (planilhas, SQL, bancos de dados, linguagens de programação e visualização)",
            "Técnicas avançadas e modernas de CSS, arquitetura de CSS, Sass, layouts com Flexbox e CSS Grid, fluxo de design responsivo e mais.",
            "Fundamentos de Node.js, Express, API RESTful, Mongoose, modelagem de dados, segurança, tratamento de erros, implantação e mais.",
"Coleta e tratamento de dados através de scripts em Python utilizando as bibliotecas pandas, requests, BeautifulSoup, Selenium, dentre outras",
"Atendimento ao cliente, venda e gestão de viagens atendendo a grandes empresas, prospecção de novos clientes."


        ],

        "listedTitles": [
            "Oracle One Front End",
            "Certificado Profissional Analista de Dados Google",
            "CSS & Sass Avançado",
            "Node.js, Express, e MongoDB Bootcamp",
            "Desenvolvedora Python Freelancer",
            "Gestora de Viagens Corporativas",
            "Bacharel em Ciências Biológicas",
            "Mestrado em Microbiologia Agrícola e do Ambiente"

        ],
        "projectsTitles": [
            "Cartão interativo",
            "Calcula gorjeta",
            "F.A.Q.",
            "Avaliação Interativa",
            "Google Capstone",
            "Pomodoge Timer"
        ],
        
        "university": "Universidade Federal do Rio Grande do Sul",
        "details"    : [ 
            "Criatividade :)",
            "Português nativo",
            "Inglês fluente"
        ],
        "openProjects": "Clique aqui para abrir",
        "year": "Atual"

        
    },
    "en": {

        "sectionTitles": [
            "About Me",
            "Licenses & Certifications",
            "Work Experience",
            "Academic Background",
            "Skills",
            "Languages",
            "Projects"
        ],

        "descriptions": [
            "I'm a curious and creative person that has always been fascinated by the power of technology. My background as a Biology graduate gave me perspective and tools to problem-solving that are valuable in the tech industry and helped me a lot in my ongoing journey to become a Web Developer . Now I'm looking for opportunities where I can contribute, apply my knowledge and to grow even more on the career. I am available for full-time and party time contracts and also as a freelancer. ",
            // "I'm a curious and creative person that has always been fascinated by the power of technology. My background as a Biology graduate gave me perspective and tools to problem-solving that are valuable in the tech industry and helped me a lot in my ongoing journey to become a <u>pro</u>grammer. Now I'm looking for opportunities where I can contribute, apply my knowledge and to grow even more on the career.",

            "HTML5, CSS3, JavaScript and Responsive Design",
            
            "Introduction to key analytical skills and tools (spreadsheets, SQL, programming languages, Tableau).",
            
            "Modern and advanced CSS properties and techniques, CSS architecture, Flexbox, CSS Grid layouts, responsive design workflows",
            
            "Fundamentals of Node.js, Express, RESTful API, Mongoose, data modelling, security, error handling workflows, deployment, and more.",
            
            "Data collection and treatment using Python libraries (requests, pandas, BeautifulSoup, Selenium, among others libraries).",
            
            "Custumer service, sales and management of corporate travels."
        ],

        "listedTitles": [
            "Oracle One Front End",
            "Google Data Analytics Professional Certificate",
            "Advanced CSS & Sass",
            "Node.js, Express, and MongoDB Bootcamp",
            "Python Developer Freelancer",
            "Corporate Travel Manager",
            "B.Sc. Biological Sciences",
            "M.Sc. in Agricultural and Environmental Microbiology"
        ],

        "projectsTitles": [
            "Interactive Card",
            "Tip Calculator",
            "FAQ Accordion Card",
            "Interactive Rating",
            "Google Capstone",
            "Pomodoge Timer"
        ],
        
        "university": "Federal University of Rio Grande do Sul",
        "details"    : [ 
            "Creativity :)",
            "Native in Portuguese",
            "Fluent in English"
        ],
        "openProjects": "Click here to open",
        "year": "Present"

        
    }
}



// fetch("../data/languages.json")
//     .then(response => response.json())
//     .then((json) => {
//         data = json
//         console.log(data)
//     });


const sectionTitles = document.querySelectorAll('h2')

const listedTitles = document.querySelectorAll('.item__title')
const descriptions = document.querySelectorAll('p')
const university = document.querySelectorAll('.university')
const details = document.querySelectorAll('.detailTranslate')
const openProjects = document.querySelectorAll('.panel a')
const projectsTitles = document.querySelectorAll('.panel__name')
const years = document.querySelectorAll('.item__year')
const resumeText = document.querySelector('.resume__title')

const pt = document.querySelector('.portuguese')
const en = document.querySelector('.english')


// Check user default language
window.addEventListener("load", () => {
    if (userLang === 'pt-BR') {
        translate('pt')
    }
  });


pt.addEventListener('click', () => {
    translate('pt')
})

en.addEventListener('click', () => {
    translate('en')
})


const translate = (lang) => {
    const chosenLang = data[lang]

    for (let i = 0; i < sectionTitles.length; i++) {
        sectionTitles[i].innerText = chosenLang.sectionTitles[i]
    }

    for (let i = 0; i < listedTitles.length; i++) {
        listedTitles[i].innerText = chosenLang.listedTitles[i]
    }

    for (let i = 0; i < projectsTitles.length; i++) {
        projectsTitles[i].innerText = chosenLang.projectsTitles[i]
    }

    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].innerHTML = chosenLang.descriptions[i]
    }

    for (let i = 0; i < university.length; i++) {
        university[i].innerText = chosenLang.university
    }

    for (let i = 0; i < details.length; i++) {
        details[i].innerText = chosenLang.details[i]
    }

    for (let i = 0; i < openProjects.length; i++) {
        openProjects[i].innerText = chosenLang.openProjects
    }
    


    if (lang === "pt") {
        resumeText.innerText = "Faça o download do meu CV!"
        for (let i = 0; i < years.length; i++) {
            if (years[i].innerText.includes('Present')) {
                let text = years[i].innerText.replace('Present', 'Atual')
                years[i].innerText = text
            }
        }
    } else {
        resumeText.innerText = "Download my Resume!"
        for (let i = 0; i < years.length; i++) {
            if (years[i].innerText.includes('Atual')) {
                let text = years[i].innerText.replace('Atual', 'Present')
                years[i].innerText = text
            }
        }
    }
    
}
