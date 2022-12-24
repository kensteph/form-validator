//  Target all the elements
const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('email');
const password = document.querySelector('password');
const cPassword = document.querySelector('cPassword');

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
  textError.style.color = 'red';
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
// Add event on the form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let ckUsername = checkUsername();
  console.log(username.value, ckUsername);
});

username.addEventListener('input', () => {
  console.log(username.value);
});
