const eventForm = document.getElementById('event-form')
const modal = document.getElementById('validation-modal');
const closeModalBtn = document.getElementById('close-modal');

function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target, "target value of form")
    const formData = new FormData(eventForm);
    const isValidatedFormData = validateForm(formData)
    if(!isValidatedFormData){
        showErroModal()
        return
    }

}

function showErroModal(){
    modal.classList.remove("hidden-modal")
}

function hideErrorModal(){
    console.log("clicking hide modal")
    modal.classList.add('hidden-modal');
}
closeModalBtn.addEventListener('click', hideErrorModal);