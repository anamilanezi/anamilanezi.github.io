const resume = document.querySelector('.resume__title')

setTimeout(() => {
    resume.classList.remove('fa-fade')
}, 5000)

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        // Check if it's second click and open page
        Object.keys(panelInfo).forEach(info => {
            secondClick(panel, info)
        })
        }) 
    })


const secondClick = (panel, projectClass) => {
    if (panel.classList.contains(projectClass)) {
        if (panelInfo[projectClass].clicks >= 1) {
            window.open(panelInfo[projectClass].page, '_blank');
        } else {
            panelInfo[projectClass].clicks++;
        } 
        
    }
}

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

const panelUrl = (projectName) => {
    return `https://anamilanezi.github.io/front-end-mentor/${projectName}/index.html`
}


const panelInfo = {
    card: {
        clicks: 0,
        page  : panelUrl('interactive-card-details')
    },
    tip: {
        clicks: 0,
        page  : panelUrl('tip-calculator-app')
    },
    faq: {
        clicks: 0,
        page  : panelUrl('faq-accordion')
    },
    rating: {
        clicks: 0,
        page  : panelUrl('interactive-rating')
    },
    capstone: {
        clicks: 0,
        page  : 'https://www.kaggle.com/code/anamilanezi/google-capstone-creating-maps'
    },
    pomodoge: {
        clicks: 0,
        page  : 'https://github.com/anamilanezi/pomodoge-timer/blob/main/en-us/pomodoge.py'
    },
}

