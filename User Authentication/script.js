// Get the modals
var modal = document.getElementById("myModal");
var termsModal = document.getElementById("termsModal");
var privacyModal = document.getElementById("privacyModal");

// Get the <span> elements that close the modals
var closeButtons = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
document.getElementById('loginForm').addEventListener('submit', function(event) {
  const username = document.getElementById('username').value;
  const agreeChecked = document.getElementById('agree').checked;
  
  if (!username || !agreeChecked) {
    event.preventDefault(); // Prevent form submission
    alert('Please enter a username and agree to the terms and privacy policy.');
  } else {
    modal.style.display = "block";
    event.preventDefault(); // Prevent form submission if you don't want to actually submit the form
  }
});

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function() {
    this.parentElement.parentElement.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == termsModal || event.target == privacyModal) {
    event.target.style.display = "none";
  }
}

// When the user clicks on Terms of Service link, open terms modal
document.getElementById('termsLink').addEventListener('click', function(event) {
  event.preventDefault();
  termsModal.style.display = "block";
});

// When the user clicks on Privacy Policy link, open privacy modal
document.getElementById('privacyLink').addEventListener('click', function(event) {
  event.preventDefault();
  privacyModal.style.display = "block";
});