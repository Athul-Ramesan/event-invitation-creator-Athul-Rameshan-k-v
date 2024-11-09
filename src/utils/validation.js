
function validateForm(formData){
    const requiredFields = [
        'eventName',
        'eventDate',
        'startTime',
        'endTime',
        'eventDescription',
        'eventLocation'
    ];

    for(let field of requiredFields){
        const value = formData.get(field)
        if(!value || value.trim()===""){
            return false
        }
    }
    return true
}
function validateDate(formData){
    
}