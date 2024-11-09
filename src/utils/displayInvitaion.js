
function displayInvitaion(formData) {
    document.getElementById('form-container').style.display = "none"
       document.body.style.background = "white";

    const eventName = formData.get('eventName')
    const eventDate = formData.get('eventDate')
    const startTime = formData.get('startTime')
    const endTime = formData.get('endTime')
    console.log("🚀 ~ displayInvitaion ~ endTime:", endTime)
    const eventDescription = formData.get('eventDescription')
    const eventLocation = formData.get('eventLocation')

    const formattedDate = formatDateWithYearMonthDay(eventDate)
    const formattedStartTime = formatTimeToAMorPM(startTime)
    const formattedEndTime = formatTimeToAMorPM(endTime)

    document.querySelector('.event-name').textContent = eventName;
    document.querySelector('.event-date').textContent = formattedDate;
    document.querySelector('.event-time').textContent = `${formattedStartTime} - ${formattedEndTime}`;
    document.querySelector('.event-description').textContent = eventDescription;
    document.querySelector('.event-location').textContent = eventLocation;


    document.getElementById('invitation-display').classList.remove('hidden-modal')
}
function formatDateWithYearMonthDay(date) {
    const newDate = new Date(date);

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(newDate);

    return formattedDate
}
function formatTimeToAMorPM(time){
    let [hours,minutes] = time.split(":")
    const timePeriod = Number(hours) >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12; 
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${timePeriod}`;

    return formattedTime
}