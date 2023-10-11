document.addEventListener('DOMContentLoaded', function () 
    {

        const name = document.getElementById('name').value;
        const number = document.getElementById('number').value;
        const email = document.getElementById('email').value;
        const errorContainer = document.getElementById('errorContainer');
        const addContact = document.getElementById('addContact');


        addContact.addEventListener('click', function () 
            {
 
                if (name === '' || number === '' || email === '') {
                    errorContainer.textContent = 'ERROR: All fields are required';
                    return;
                }
                
                if (!name.match(/^[A-Za-z ]{1,20}$/)) {
                    errorContainer.textContent = 'ERROR: Name must contain only letters and spaces and be 1-20 characters long';
                    return;
                }
        
                if (!number.match(/^\d{10}$/)) {
                    errorContainer.textContent = 'ERROR: Please enter a valid phone number';
                    return;
                }
        
                if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/) || email.length >= 40) {
                    errorContainer.textContent = 'ERROR: Please enter a valid email';
                    return;
                }
            }

        )

        clearFields();
})