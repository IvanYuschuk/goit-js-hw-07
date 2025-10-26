const form = document.querySelector("form.login-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();
    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return; 
    }
    const formData = {
        Email: email,
        Password: password,
    };
    console.log(formData);
    event.currentTarget.reset();
})