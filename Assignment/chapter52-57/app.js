//TASK 1:
function image(id){
    var src=document.getElementById(id);
    var srcM=src.getAttribute("src")
    var modal = document.getElementById('modal');
    modal.classList.add('modal-open')
    modal.classList.remove('modal-close');
    modal.style.display="block";
    var modalimg=document.getElementById("modal-img");
    modalimg.setAttribute("src",srcM)
}

function onClosedImagModal(){
    var modal = document.getElementById('modal');
    modal.classList.add('modal-close')
    modal.classList.remove('modal-open'); 
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}