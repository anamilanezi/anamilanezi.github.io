const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        console.log('clicked')
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

const resume = document.querySelector('.resume__title')

resume.addEventListener('mouseover', () => {
    resume.classList.remove('fa-fade')
})

const panelUrl = (projectName) => {
    return `https://anamilanezi.github.io/front-end-mentor/${projectName}/index.html`
}


// const clicks = {
//     card: 0,
//     tip: 0,
//     faq: 0,
//     rating: 0,
//     capstone: 0,
//     pomodoge: 0,

// }
// const projectCard = document.querySelector('.panel.card')


// const openProject = (clickedPanel, projectClassName, projectLink) => {
//     clickedPanel.addEventListener('click', (e) => {
//         e.stopPropagation()
//         if (clicks[projectClassName] >= 2 ) {
//             if (clickedPanel.classList.contains(projectClassName)) {
//                 window.open(panelUrl(projectLink))
//             }
//         }
//     })
//     console.log(clicks)
//     clicks[projectClassName] = 1;
// }





// openProject(projectCard, 'card', 'interactive-card-details') 


// projectCard.addEventListener('click', () => {
//     if (cardClick >= 1) {
//         if (projectCard.classList.contains('card')) {
//             console.log(projectCard.classList.contains('card'))
//             window.open(panelUrl('interactive-card-details'), '_blank');
//         }
//     } 
//     cardClick++;
// })


// projectTip.addEventListener('click', () => {
//     if (clicks.tip >= 1) {
//         if (projectCard.classList.contains('card')) {
//             console.log(projectCard.classList.contains('card'))
//             window.open(panelUrl('interactive-card-details'), '_blank');
//         }
//     } 
//     clicks.tip++;
// })
