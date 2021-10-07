

var editButtons = document.querySelectorAll("a.edit")
var deleteButtons = document.querySelectorAll("a.delete")
var formEdit = document.querySelector(".form_edit")
var formDelete = document.querySelector(".form_delete")
editButtons.forEach(Element => Element.addEventListener("click",(e)=>
    {
        formEdit.setAttribute("action","/edit-animal/"+e.currentTarget.getAttribute("data-id"))
     
    
    }))
deleteButtons.forEach(Element => Element.addEventListener("click",(e)=>
    {
        formDelete.setAttribute("action","/delete-animal/"+e.currentTarget.getAttribute("data-id"))
     
    
}))


//console.log(Element.getAttribute("data-id")