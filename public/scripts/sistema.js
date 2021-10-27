

var editButtons = document.querySelectorAll("a.edit")
var deleteButtons = document.querySelectorAll("a.delete")
var formEdit = document.querySelector(".form_edit")
var formDelete = document.querySelector(".form_delete")
var formDeleteAll = document.querySelectorAll(".form_delete_All")
var formViewInfo = document.querySelector(".form_view .animal-infos ul")
var deleteAllButton = document.querySelector("a#deleteall")
var viewInfoButton = document.querySelectorAll("a.more-info")




viewInfoButton.forEach( element => {
    element.addEventListener("click",(e)=>{
        fetch("/allAnimals",{
            method:"GET",
        }).then( async (response) =>
            await response.json()   
        ).then(element => {
            element.forEach(item => {
                formViewInfo.innerHTML =`
                <li>Tipo : ${item.tipo}</li>
                <li>Nome : ${item.nome}</li>
                <li>Raça : ${item.raca}</li>
                <li>Cor  : ${item.cor}</li>
                `
            })
        })

    })
})


deleteAllButton.addEventListener("click",()=>{
    formDeleteAll.setAttribute("action","/deleteAll")

})


editButtons.forEach(Element => Element.addEventListener("click",(e)=>
    {
        formEdit.setAttribute("action","/edit-animal/"+e.currentTarget.getAttribute("data-id"))
    }))
deleteButtons.forEach(Element => Element.addEventListener("click",(e)=>
    {
        formDelete.setAttribute("action","/delete-animal/"+e.currentTarget.getAttribute("data-id"))
     
    
}))

