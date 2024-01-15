const language = document.querySelectorAll('.lang')
window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4
    language.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}