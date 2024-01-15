const allUsers = document.querySelector(".users")
const insideUser = document.querySelectorAll(".user")
const addUser = document.querySelector(".add")
const deleteButton = document.querySelectorAll(".delete")

function deleteUser(user, userIndex) {
    user.addEventListener('click', (e) => {
        allUsers.removeChild(insideUser[userIndex])
    })
}

deleteButton.forEach((trashcan, index) => deleteUser(trashcan, index));

addUser.addEventListener('click', () => {
    const profile = document.createElement('div');
    profile.classList.add('user');
    profile.innerHTML = `
    <div class="imgBox"><img src=https://media.istockphoto.com/id/1426884243/de/foto/sportlicher-junger-mann-der-telefoniert-und-sich-auf-das-training-vorbereitet.jpg?s=612x612&w=0&k=20&c=ytN1vcKodGCw1p5JEpQa3XlNpILmf-WVldSST__4DCQ= alt=""></div>
        <h3>Bambo</h3>
        <div class="dropdown">
                    <i class="fa-solid fa-ellipsis"></i>
                    <div class="dropdown-content">
                        <div class="edit"><i class="fa-solid fa-pen"></i>
                            <p>Edit</p>
                        </div>
                        <div class="delete"><i class="fa-solid fa-trash"></i>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
    `;
    allUsers.insertBefore(profile, addUser)

    deleteButton.push(profile.querySelector('.delete'))
    insideUser.push(profile)
    deleteUser(deleteButton[deleteButton.length - 1], deleteButton.length - 1)
})