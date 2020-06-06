/* Below code is mostly taken from Emmail.js tutorial and partially from the course's video with some slight adjustments to fit this project's case */
function sendEventEmail(eventSignup){
    emailjs.send("gmail","eventform",{"from_name": eventSignup.fname.value + " " + eventSignup.lname.value, "from_email": eventSignup.email.value, "participant_count":eventSignup.participantcount.value, "event_name":eventSignup.eventname.value})
     .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}