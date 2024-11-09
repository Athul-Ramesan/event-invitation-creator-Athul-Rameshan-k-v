const eventForm = document.getElementById('event-form')
const modal = document.getElementById('validation-modal');
const closeModalBtn = document.getElementById('close-modal');

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(eventForm);
    const isValidatedFormData = validateForm(formData)
    if(!isValidatedFormData){
        showErroModal()
        document.body.classList.add("modal-open");
        return
    }
    displayInvitaion(formData)

}

function showErroModal(){
    modal.classList.remove("hidden-modal")
    document.body.classList.add("modal-open");
}

function hideErrorModal(){
    modal.classList.add('hidden-modal');
    document.body.classList.remove("modal-open");
}
closeModalBtn.addEventListener('click', hideErrorModal);