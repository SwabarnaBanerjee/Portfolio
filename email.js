function sendMail() {
    var name = document.getElementById("names").value;
    var email = document.getElementById("emails").value;
    var Message = document.getElementById("texts").value;
    var Subject = document.getElementById("subjects").value;
    console.log(name)
  
    // Check if any of the required fields are empty
    if (!name || !email || !Message || !Subject) {
      alert("Please fill in all required fields before sending the message.");
      return;
    }
  
    // Email validation using a regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    var params = {
      name: name,
      email: email,
      Message: Message, 
      Subject: Subject  
    };
  
    const serviceID = "service_4ff5k59"; 
    const templateID = "template_rkx4n3f";
  
    emailjs.send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("names").value = "";
        document.getElementById("emails").value = "";
        document.getElementById("texts").value = ""; 
        document.getElementById("subjects").value = "";  
        console.log(res);
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
        alert("Error sending email. Please try again later.");
      });
  }