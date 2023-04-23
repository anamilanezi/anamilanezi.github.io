const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('mouseover', () => {
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