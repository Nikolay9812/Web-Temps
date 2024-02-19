// Get references to elements
const addUserBtn = document.getElementById('addUserBtn');
const addUserModal = document.getElementById('addUserModal');
const closeAddUserModalBtn = document.getElementById('closeAddUserModalBtn');
const addUserSubmitBtn = document.getElementById('addUserSubmitBtn');
const userNameInput = document.getElementById('userNameInput');
const imageInput = document.getElementById('imageInput');
const accountSettingsBtn = document.getElementById('accountSettingsBtn');
const accountSettingsModal = document.getElementById('accountSettingsModal');
const closeAccountSettingsModalBtn = document.getElementById('closeAccountSettingsModalBtn');
const logoutBtn = document.getElementById('logoutBtn');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');
const nextArrow = document.querySelector('.next-arrow');
const profilesContainer = document.querySelector('.profiles');
const profiles = profilesContainer.querySelectorAll('.profile');
const profileImages = document.querySelectorAll('.profile img');

let currentIndex = 0;
let isGridRows = false; // Flag to track if the grid is displayed in rows or columns

// Function to open the "Add User" modal
addUserBtn.addEventListener('click', () => {
    addUserModal.style.display = 'block';
});

// Function to close the "Add User" modal
closeAddUserModalBtn.addEventListener('click', () => {
    addUserModal.style.display = 'none';
});

// Function to handle form submission in "Add User" modal
addUserSubmitBtn.addEventListener('click', () => {
    const userName = userNameInput.value;
    const selectedImage = imageInput.files[0];

    // Create a new profile element
    const newProfile = document.createElement('div');
    newProfile.classList.add('profile');

    // Create an image element for the user's image
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(selectedImage);
    imageElement.alt = userName;

    // Append the image element to the new profile
    newProfile.appendChild(imageElement);

    // Append the new profile to the profiles container
    profilesContainer.insertBefore(newProfile, profilesContainer.lastElementChild);

    // Close the modal
    addUserModal.style.display = 'none';
});

// Function to handle click event on the next-arrow
nextArrow.addEventListener('click', () => {
    // Toggle the 'rotated' class to apply/remove rotation
    nextArrow.classList.toggle('rotated');
});


// Function to handle click event using event delegation
profilesContainer.addEventListener('click', (event) => {
    // Check if the clicked element is an image inside a profile
    if (event.target.tagName === 'IMG' && event.target.parentElement.classList.contains('profile')) {
        // Remove 'active' class from all images
        profilesContainer.querySelectorAll('.profile img').forEach(img => img.classList.remove('active'));
        // Add 'active' class to the clicked image
        event.target.classList.add('active');
    }
});

// Function to open the account settings modal
accountSettingsBtn.addEventListener('click', () => {
    accountSettingsModal.style.display = 'block';
});

// Function to close the account settings modal
closeAccountSettingsModalBtn.addEventListener('click', () => {
    accountSettingsModal.style.display = 'none';
});

// Function to toggle between grid rows and columns
nextArrow.addEventListener('click', () => {
    isGridRows = !isGridRows; // Toggle the flag

    if (isGridRows) {
        profilesContainer.classList.add('grid-rows'); // Switch to grid rows
    } else {
        profilesContainer.classList.remove('grid-rows'); // Switch to grid columns
    }
});

// Function to close modal when clicking outside
function closeModalOnClickOutside(modal) {
    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Example usage:
closeModalOnClickOutside(addUserModal);
closeModalOnClickOutside(accountSettingsModal);
