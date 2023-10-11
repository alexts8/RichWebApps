document.addEventListener('DOMContentLoaded', function () 
    {

        const nameVal = document.getElementById('name');
        const numberVal = document.getElementById('number');
        const emailVal = document.getElementById('email');
        const error = document.getElementById('error');
        const addContact = document.getElementById('addContact');


        addContact.addEventListener('click', function () 
            {

                const name = nameVal.value.trim();
                const number = numberVal.value.trim();
                const email = emailVal.value.trim();
 
                if (name === '' || number === '' || email === '') {
                    error.textContent = 'ERROR: All fields are required';
                    return;
                }
                
                if (!name.match(/^[A-Za-z ]{1,20}$/)) {
                    error.textContent = 'ERROR: Name must contain only letters and spaces and be 1-20 characters long';
                    return;
                }
        
                if (!number.match(/^\d{10}$/)) {
                    error.textContent = 'ERROR: Please enter a valid phone number';
                    return;
                }
        
                if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/) || email.length >= 40) {
                    error.textContent = 'ERROR: Please enter a valid email';
                    return;
                }

                error.textContent='';
            }

        )

        clearFields();
})