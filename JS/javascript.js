const skills = document.querySelectorAll('.skill-1')
window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4
    skills.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}