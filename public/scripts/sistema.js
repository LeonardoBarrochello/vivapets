import  Modal  from './modal.js'
const modal = Modal()
const deleteButtons = document.querySelectorAll("a.delete")

deleteButtons.forEach(element=>{

    element.addEventListener("click",(event)=> handleClick(event,false))
})


function handleClick(event){
    const animalId = event.target.dataset.id
    const form = document.querySelector(".modal form")
    form.setAttribute("action",`/delete-animal/${animalId}`)
    modal.open(event)
}