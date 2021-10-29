/*NAV SCRIPT*/
/*sticky nav when scroll begins*/
window.addEventListener("scroll", function() {
    var header = document.querySelector(".navigation");
    header.classList.toggle("sticky", window.scrollY > 100);
  })

  /*MODAL SCRIPT*/
  
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");

  var span = document.getElementsByClassName("close")[0];

  /*click the contact button -- modal opens*/
  btn.onclick = function() {
    modal.style.display = "block";
  }

  /*click the (x) -- modal closes*/
  span.onclick = function() {
    modal.style.display = "none";                               /* clears form when (x) is clicked */
    document.ContactForm.fname.value = "";
    document.ContactForm.email.value = "";
    var dropDown = document.getElementById("subject");
    dropDown.selectedIndex = 0;
    document.ContactForm.message.value = "";
    return;

  }

  /*click anywhere outside the modal -- modal closes*/
  window.onclick = function(event) {
    if (event.target == modal) {
      this.modal.style.display = "none";                        /* clears form when clicked outside */
      document.ContactForm.fname.value = "";
      document.ContactForm.email.value = "";
      var dropDown = document.getElementById("subject");
      dropDown.selectedIndex = 0;
      document.ContactForm.message.value = "";
      return;
    }
  }

  /*VALIDATE CONTACT TEXT FORM*/

  function validateText(){                                    /* validates required fields when submit btn is clicked */

    var email = document.ContactForm.email.value;
    if (email.length == 0) 
    {
      alert("Email address field is required.");
      return false;
    } 

    var subject = document.getElementById("subject");
    if (subject.selectedIndex == 0)
    {
      alert("Subject field is required.");
      return false;
    }

    var message = document.ContactForm.message.value;
    if (message.length == 0)
    {
      alert("Message field is required.");
      return false;
    }

    return true;                                                /* validation is successfull */

  }

  /*SUBMIT BUTTON FUCTION*/

  function doSubmit() {
    
    if (validateText() == false)
    {
      return;
    }

    alert("Success! We will respond to your message shortly.");   /* message is shown to user when successful */
    return;

  }

  /*SHOE SIZE FOCUS FUNCTION*/

 
  $(".size").on('click', function(){
    $(this).toggleClass('focus').siblings().removeClass('focus');
 })