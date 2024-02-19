// JavaScript logic
document.addEventListener("DOMContentLoaded", function () {
    let emails = [];
    let phoneNumbers = [];

    const addEmailBtn = document.getElementById("addEmailBtn");
    const addPhoneBtn = document.getElementById("addPhoneBtn");
    const emailModal = document.getElementById("emailModal");
    const phoneModal = document.getElementById("phoneModal");
    const editEmailModal = document.getElementById("editEmailModal");
    const editPhoneModal = document.getElementById("editPhoneModal");

    addEmailBtn.addEventListener("click", openEmailModal);
    addPhoneBtn.addEventListener("click", openPhoneModal);

    // Function to open email modal
    function openEmailModal() {
        emailModal.style.display = "block";
    }

    // Function to open phone modal
    function openPhoneModal() {
        phoneModal.style.display = "block";
    }

    // Function to open edit email modal
    function openEditEmailModal(index) {
        editEmailModal.style.display = "block";
        document.getElementById("editEmailInput").value = emails[index].email;
        document.getElementById("editEmailInput").setAttribute("data-index", index);
    }

    // Function to open edit phone modal
    function openEditPhoneModal(index) {
        editPhoneModal.style.display = "block";
        document.getElementById("editPhoneInput").value = phoneNumbers[index].phoneNumber;
        document.getElementById("editPhoneInput").setAttribute("data-index", index);
    }

    // Function to close modal
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "none";
    }

    // Close modals when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === emailModal) {
            closeModal('emailModal');
        }
        if (event.target === phoneModal) {
            closeModal('phoneModal');
        }
        if (event.target === editEmailModal) {
            closeModal('editEmailModal');
        }
        if (event.target === editPhoneModal) {
            closeModal('editPhoneModal');
        }
    });

    // Add event listeners to modal close buttons
    document.getElementById("closeEmailModal").addEventListener("click", function () {
        closeModal('emailModal');
    });
    document.getElementById("closePhoneModal").addEventListener("click", function () {
        closeModal('phoneModal');
    });
    document.getElementById("closeEditEmailModal").addEventListener("click", function () {
        closeModal('editEmailModal');
    });
    document.getElementById("closeEditPhoneModal").addEventListener("click", function () {
        closeModal('editPhoneModal');
    });

    // Add event listeners to modal action buttons
    document.getElementById("addEmailModalBtn").addEventListener("click", addEmail);
    document.getElementById("addPhoneModalBtn").addEventListener("click", addPhoneNumber);
    document.getElementById("saveEditedEmailBtn").addEventListener("click", saveEditedEmail);
    document.getElementById("saveEditedPhoneBtn").addEventListener("click", saveEditedPhone);

    addEmailBtn.addEventListener("click", openEmailModal);
    addPhoneBtn.addEventListener("click", openPhoneModal);

    function addEmail() {
        const emailInput = document.getElementById("emailInput").value;
        emails.push({ email: emailInput, selected: false });
        displayEmails();
        document.getElementById("emailInput").value = "";
        checkEmailAddButton();
        closeModal('emailModal');
    }

    function displayEmails() {
        let emailList = document.getElementById("emailList");
        emailList.innerHTML = "";
        emails.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = item.email;
            let deleteButton = document.createElement("button");
            deleteButton.addEventListener("click", function () {
                deleteEmail(index);
            });
            li.appendChild(deleteButton);
            let editButton = document.createElement("button");
            editButton.addEventListener("click", function () {
                openEditEmailModal(index);
            });
            li.appendChild(editButton);
            // Add select button
            let selectButton = document.createElement("button");
            selectButton.textContent = item.selected ? "Deselect" : "Select";
            selectButton.addEventListener("click", function () {
                toggleSelection(index, 'email');
            });
            li.appendChild(selectButton);
            emailList.appendChild(li);
        });

        if (emails.length === 0) {
            document.getElementById("noEmailMsg").style.display = "block";
        } else {
            document.getElementById("noEmailMsg").style.display = "none";
        }
    }

    function deleteEmail(index) {
        emails.splice(index, 1);
        displayEmails();
        checkEmailAddButton();
    }

    function checkEmailAddButton() {
        if (emails.length >= 2) {
            addEmailBtn.disabled = true;
        } else {
            addEmailBtn.disabled = false;
        }
    }

    function saveEditedEmail() {
        const index = document.getElementById("editEmailInput").getAttribute("data-index");
        const newEmail = document.getElementById("editEmailInput").value.trim();
        if (newEmail !== "") {
            emails[index].email = newEmail;
            closeModal('editEmailModal');
            displayEmails();
        }
    }

    function addPhoneNumber() {
        const phoneNumberInput = document.getElementById("phoneInput").value;
        phoneNumbers.push({ phoneNumber: phoneNumberInput, selected: false });
        displayPhoneNumbers();
        document.getElementById("phoneInput").value = "";
        checkPhoneAddButton();
        closeModal('phoneModal');
    }

    function displayPhoneNumbers() {
        let phoneNumberList = document.getElementById("phoneNumberList");
        phoneNumberList.innerHTML = "";
        phoneNumbers.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = item.phoneNumber;
            let deleteButton = document.createElement("button");
            deleteButton.addEventListener("click", function () {
                deletePhoneNumber(index);
            });
            li.appendChild(deleteButton);
            let editButton = document.createElement("button");
            editButton.addEventListener("click", function () {
                openEditPhoneModal(index);
            });
            li.appendChild(editButton);
            // Add select button
            let selectButton = document.createElement("button");
            selectButton.textContent = item.selected ? "Deselect" : "Select";
            selectButton.addEventListener("click", function () {
                toggleSelection(index, 'phone');
            });
            li.appendChild(selectButton);
            phoneNumberList.appendChild(li);
        });

        if (phoneNumbers.length === 0) {
            document.getElementById("noPhoneNumberMsg").style.display = "block";
        } else {
            document.getElementById("noPhoneNumberMsg").style.display = "none";
        }
    }

    function deletePhoneNumber(index) {
        phoneNumbers.splice(index, 1);
        displayPhoneNumbers();
        checkPhoneAddButton();
    }

    function checkPhoneAddButton() {
        if (phoneNumbers.length >= 2) {
            addPhoneBtn.disabled = true;
        } else {
            addPhoneBtn.disabled = false;
        }
    }

    function saveEditedPhone() {
        const index = document.getElementById("editPhoneInput").getAttribute("data-index");
        const newPhoneNumber = document.getElementById("editPhoneInput").value.trim();
        if (newPhoneNumber !== "") {
            phoneNumbers[index].phoneNumber = newPhoneNumber;
            closeModal('editPhoneModal');
            displayPhoneNumbers();
        }
    }

    // Function to toggle selection
    function toggleSelection(index, type) {
        if (type === 'email') {
            emails[index].selected = !emails[index].selected;
            displaySelectedItems();
            displayEmails();
        } else if (type === 'phone') {
            phoneNumbers[index].selected = !phoneNumbers[index].selected;
            displaySelectedItems();
            displayPhoneNumbers();
        }
    }

    // Function to display selected items
    function displaySelectedItems() {
        const selectedEmailDiv = document.getElementById("selectedEmail");
        const selectedPhoneDiv = document.getElementById("selectedPhone");

        selectedEmailDiv.innerHTML = "<strong>PRIMARY</strong><br>";
        emails.filter(email => email.selected).forEach(email => {
            selectedEmailDiv.innerHTML += email.email + "<br>";
        });

        selectedPhoneDiv.innerHTML = "<strong>PRIMARY</strong><br>";
        phoneNumbers.filter(phone => phone.selected).forEach(phone => {
            selectedPhoneDiv.innerHTML += phone.phoneNumber + "<br>";
        });
    }
});
