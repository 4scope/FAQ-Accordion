const fapAccordion = document.querySelectorAll('.faq-accordion') 

fapAccordion.forEach((accordion) => {
    accordion.addEventListener('click', function() {
        const descText = this.nextElementSibling
        const plusBtn = this.querySelector('.open')
        const closeBtn = this.querySelector('.close')

        if (descText.classList.contains('hidden-text')) {
            descText.classList.toggle('hidden-text')
            plusBtn.classList.toggle('hidden-open')
            closeBtn.classList.toggle('closed')
        } else {
            descText.classList.toggle('hidden-text')
            plusBtn.classList.toggle('hidden-open')
            closeBtn.classList.toggle('closed')
        }
    })
})