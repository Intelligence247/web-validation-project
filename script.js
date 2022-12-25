let errMessages = {
    firstname: 'First name must be alphanumeric and contain 3 - 16 characters',
    lastname: 'Last name must be alphanumeric and contain 3 - 16 characters',
    email: 'Email must be a valid address, e.g exmaple@example.com',
    password: ' Password must be alphanumeric (@,_ and - are also allowed) and between 6 - 20 characters',
    telephone: 'A valid Telephone number (11 digits and 333-333-3334)',
    bio: 'Bio must contain only lowercase letters, underscore, hyphens and be 8 = 50 characters'
}


const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const telephone = document.querySelector('#telephone')
const bio = document.querySelector('#bio')
const firstnameErr = document.querySelector('#firstnameErr')
const lastnameErr = document.querySelector('#lastnameErr')
const emailErr = document.querySelector('#emailErr')
const passwordErr = document.querySelector('#passwordErr')

const telephoneErr = document.querySelector('#telephoneErr')
const bioErr = document.querySelector('#bioErr')
const button = document.querySelector('button')


button.addEventListener('click', () => {
    firstnameErr.innerHTML = ''
    if (firstname.value.match(/[A-Za-z.*$]{3,16}/) && !firstname.value.match(/[0-9]/)) {
        firstname.style.outline = '2px solid #21bf73'
        firstname.style.border = 'none'
    } else {
        firstnameErr.textContent = errMessages.firstname
        firstname.style.outline = '2px solid #333'

    }

    // Lastname starts here
    lastnameErr.innerHTML = ''
    if (lastname.value.match(/[A-Za-z.*$]{3,16}/) && !lastname.value.match(/[0-9]/)) {
        lastname.style.outline = '2px solid #21bf73'
        lastname.style.border = 'none'
    } else {
        lastnameErr.textContent = errMessages.lastname
        lastname.style.outline = '2px solid #333'

    }
    // Password Starts here
    passwordErr.innerHTML = ''
    if (password.value.match(/[A-Za-z0-9]{6,20}/) || password.value.match(/[@-_]/)) {
        password.style.outline = '2px solid #21bf73'
        password.style.border = 'none'
    } else {
        passwordErr.textContent = errMessages.password
        password.style.outline = '2px solid #333'

    }
})

// To Negate using regex You just have to add (.*) after writing those things you wanted to see in ur validation any other one that is not written will not be allowed when (.*) is added.