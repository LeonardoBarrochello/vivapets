

var editButtons = document.querySelectorAll("a.edit")
var deleteButtons = document.querySelectorAll("a.delete")
var formEdit = document.querySelector(".form_edit")
var formDelete = document.querySelector(".form_delete")
var formAdopt = document.querySelector(".form_Adopt")
var formDeleteAll = document.querySelectorAll(".form_delete_All")
var formViewInfo = document.querySelector(".form_view .animal-infos ul")
var deleteAllButton = document.querySelector("a#deleteall")
var viewInfoButton = document.querySelectorAll("a.more-info")
var adoptButton = document.querySelectorAll("a.adopt")




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



adoptButton.forEach(element => {
    element.addEventListener("click",(e)=>{
        formAdopt.setAttribute("action",`/adopt-animal/${e.currentTarget.getAttribute("data-id")}/${e.currentTarget.getAttribute("data-user-id")}`)
    
    })
})



editButtons.forEach(Element => Element.addEventListener("click",(e)=>
    {
        formEdit.setAttribute("action","/edit-animal/"+e.currentTarget.getAttribute("data-id"))
    }))
deleteButtons.forEach(Element => Element.addEventListener("click",(e)=>
    {
        formDelete.setAttribute("action","/delete-animal/"+e.currentTarget.getAttribute("data-id"))
     
    
}))

