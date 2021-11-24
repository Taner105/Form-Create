const userForm = document.querySelector("#userForm");

userForm.addEventListener("submit", formHandler);
const alertDOM = document.querySelector("#alert")

const alertFunction=(title, message, className ="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(e) {
    e.preventDefault(); // submit anında sayfanın yenilenmesini engellemiş oluyoruz.
    const user_name = document.querySelector("#username");
    const _score = document.querySelector("#score");
   
    
    if(user_name.value && _score.value){
        addItem(user_name.value, _score.value );
        user_name.value = "" 
        _score.value = "" 
        alertDOM.innerHTML = ""
    }
    else{
        alertDOM.innerHTML = alertFunction(
            "Başlık: ", 
            "Lütfen tüm değerleri doğru giriniz.",
            "danger")
        }
  
}




//Oluşturduğum ul içersine li ekledim
const listFormDOM = document.querySelector("#listForm")
const addItem = (userName, score) => {
    const liDOM = document.createElement("li");
    liDOM.innerHTML = `${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add(
    "list-group-item","d-flex","justify-content-between","align-items-center")
    listFormDOM.append(liDOM)
}
