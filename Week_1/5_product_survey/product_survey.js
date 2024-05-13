function submitFeedback(){
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    
    alert('Thank you for your valuable feedback');

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // It modifies the CSS style property 'display' of that element, setting it to 'block', which alters its visibility on the webpage to be displayed as a block-level element.
    document.getElementById('userInfo').style.display = 'block';

}

const submitButton = document.getElementById('submitBtn').value;
// When submitButton is clicked, the submitFeedback function is executed.
submitButton.onclick = submitFeedback;

// Listen for any keydown event in the entire document. When Enter is pressed, it calls the submitFeedback function.
document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        submitFeedback();
    }
});

