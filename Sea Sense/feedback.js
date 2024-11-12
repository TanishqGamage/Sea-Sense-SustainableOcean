function visit(){
    // printing the data in the console
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("improvements").value);
    console.log(document.getElementById("requests").value);
    console.log(document.querySelector('input[name="visitTime"]:checked').value);
    console.log(document.querySelector('input[name="userEx"]:checked').value);
    console.log(document.querySelector('input[name="opinion"]:checked').value);
    console.log(document.querySelector('input[name="recommend"]:checked').value);
    console.log(document.querySelector('#updates').value);

}


function mail(){
    visit();
    // initiating an array with the inputs taken in the feedback form
    var formData = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        improvements: document.getElementById("improvements").value,
        requests: document.getElementById("requests").value,
        visitTime: document.querySelector('input[name="visitTime"]:checked').value,
        userEx: document.querySelector('input[name="userEx"]:checked').value,
        opinion: document.querySelector('input[name="opinion"]:checked').value,
        recommend: document.querySelector('input[name="recommend"]:checked').value,
        offers: document.querySelector('#updates').value
    }

    // serviceID and templateID for emailJS service
    const serviceID = "service_8syv3ij"
    const templateID = "template_avf87zx"

    // calling the emailJS function
    emailjs.send(serviceID,templateID,formData)
    alert("Your Feedback was sent !")
}

