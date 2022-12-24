//  Target all the elements
const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cPassword = document.querySelector('#passwordC');
const btnSubmit = form.querySelector('button');
// Utilities
const isRequired = (field) => (field.value.trim().length === 0 ? false : true);
const isBetween = (field, min, max) =>
  field.value.trim().length < min || field.value.trim().length > max
    ? false
    : true;
const isValidEmail = (field) => {
  let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (pattern.test(field.value.trim())) return true;
  return false;
};
const isCorrectPassword = (field) => {
  // The following code combines five password requirements:
  // Length between 8 and 32 characters.
  // One or more uppercase letters.
  // One or more lowercase letters.
  // One or more numbers.
  // One or more special characters (ASCII punctuation or space characters).
  let password = field.value;
  let minMaxLength = /^[\s\S]{8,32}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    number = /[0-9]/,
    special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

  if (
    minMaxLength.test(password) &&
    upper.test(password) &&
    lower.test(password) &&
    number.test(password) &&
    special.test(password)
  ) {
    return true;
  }

  return false;
};

//Check for each field

const checkUsername = () => {
  let textError = username.parentElement.querySelector('small');
  if (isRequired(username) && isBetween(username, 4, 30)) {
    username.classList.remove('invalid');
    username.classList.add('valid');
    textError.textContent = '';
    return true;
  } else {
    username.classList.remove('valid');
    username.classList.add('invalid');
    textError.textContent = 'Username must between 4 and 30 characters.';
  }
  return false;
};

const checkEmail = () => {
  let textError = email.parentElement.querySelector('small');
  if (isValidEmail(email)) {
    email.classList.remove('invalid');
    email.classList.add('valid');
    textError.textContent = '';
    return true;
  } else {
    email.classList.remove('valid');
    email.classList.add('invalid');
    textError.textContent =
      'Please, enter a valid email.(eg: stephanie88@gmail.com)';
  }
  return false;
};

const checkPassword = () => {
  let textError = password.parentElement.querySelector('small');
  if (isCorrectPassword(password)) {
    textError.textContent = '';
    password.classList.remove('invalid');
    password.classList.add('valid');
    textError.textContent = '';
    return true;
  } else {
    password.classList.remove('valid');
    password.classList.add('invalid');
    textError.textContent =
      'Your password should contain at least 8 characters,1 upper case,1 special character and must less or equal to 32 characters';
  }
  return false;
};

const checkCpassword = () => {
  let textError = cPassword.parentElement.querySelector('small');
  if (isCorrectPassword(cPassword) && cPassword.value === password.value) {
    textError.textContent = '';
    cPassword.classList.remove('invalid');
    cPassword.classList.add('valid');
    textError.textContent = '';
    return true;
  } else {
    cPassword.classList.remove('valid');
    cPassword.classList.add('invalid');
    if (cPassword.value != password.value) {
      textError.textContent =
        'Confirmation password does not match the password';
    } else {
      textError.textContent =
        'Your password should contain at least 8 characters,1 upper case,1 special character and must less or equal to 32 characters';
    }
  }
  return false;
};

// Add event on the form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let ckUsername = checkUsername();
  let ckEmail = checkEmail();
  let ckPassword = checkPassword();
  let ckCpassword = checkCpassword();
  if (ckUsername && ckEmail && ckPassword && ckCpassword) {
    // Submit the form
    // Reset the form
    form.reset();
    btnSubmit.innerHTML = 'Thanks for registering!';
    setTimeout(() => {
      btnSubmit.innerHTML = 'Submit';
    }, 3000);
  }
});
