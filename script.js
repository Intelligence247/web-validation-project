let errMessages = {
    firstname: 'First name must be alphanumeric and contain 3 - 16 characters',
    lastname: 'Last name must be alphanumeric and contain 3 - 16 characters',
    email: 'Email must be a valid address, e.g exmaple@example.com',
    password: ' Password must be alphanumeric (@,_ and - are also allowed) and between 6 - 20 characters',
    telephone: 'A valid Telephone number (10 digits and 333-333-3334)',
    bio: 'Bio must contain only lowercase letters, underscore, hyphens and be 8 - 50 characters'
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
    if (firstname.value.match(/^[A-Za-z.*$]{3,16}$/) && !firstname.value.match(/[0-9]/)) {
        firstname.style.outline = '2px solid #21bf73'
        firstname.style.border = 'none'
    } else {
        firstnameErr.textContent = errMessages.firstname
        firstname.style.outline = '2px solid #333'

    }

    // Lastname starts here
    lastnameErr.innerHTML = ''
    if (lastname.value.match(/^[A-Za-z.*$]{3,16}$/) && !lastname.value.match(/[0-9]/)) {
        lastname.style.outline = '2px solid #21bf73'
        lastname.style.border = 'none'
    } else {
        lastnameErr.textContent = errMessages.lastname
        lastname.style.outline = '2px solid #333'

    }

    // email starts here
    emailErr.innerHTML = ''
    if (email.value.match(/[A-Za-z0-9]+@[a-zA-Z]+[.]+com/)) {
        email.style.outline = '2px solid #21bf73'
        email.style.border = 'none'
    } else {
        emailErr.textContent = errMessages.email
        email.style.outline = '2px solid #333'

    }


    // Password Starts here
    passwordErr.innerHTML = ''
    if (password.value.match(/^[A-Za-z0-9]{6,20}$/) || password.value.match(/[@-_]/)) {
        password.style.outline = '2px solid #21bf73'
        password.style.border = 'none'
    } else {
        passwordErr.textContent = errMessages.password
        password.style.outline = '2px solid #333'
    }



    // Telephone Starts here
    telephoneErr.innerHTML = ''
    if (telephone.value.match(/^\d{3}[-]\d{3}[-]\d{4}$/)) {
        telephone.style.outline = '2px solid #21bf73'
        telephone.style.border = 'none'
    } else {
        telephoneErr.textContent = errMessages.telephone
        telephone.style.outline = '2px solid #333'

    }


    // Bio Starts here
    bioErr.innerHTML = ''
    if (bio.value.match(/^[a-zA-Z-_ *]{8,50}$/) && !bio.value.match(/[0-9]/)) {
        bio.style.outline = '2px solid #21bf73'
        bio.style.border = 'none'
    } else {
        bioErr.textContent = errMessages.bio
        bio.style.outline = '2px solid #333'

    }

    if (firstnameErr.textContent.length == 0 && lastnameErr.textContent.length == 0 && emailErr.textContent.length == 0 && passwordErr.textContent.length == 0 && telephoneErr.textContent.length == 0 && bioErr.textContent.length == 0) {
        button.style.backgroundColor = '#21bf73'
    } else {
        button.style.backgroundColor = '#333'
    }
})
console.log('mmkawodqwe asdaedq qewsd edfw wsdewe wedf eds ASDES'.length)
// To Negate using regex You just have to add (.*) after writing those things you wanted to see in ur validation any other one that is not written will not be allowed when (.*) is added.