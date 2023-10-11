document.addEventListener('DOMContentLoaded', function () 
    {

        const name = document.getElementById('name').value;
        const number = document.getElementById('number').value;
        const email = document.getElementById('email').value;
        const errorContainer = document.getElementById('errorContainer');
        const addContact = document.getElementById('addContact');


        addContact.addEventListener('click', function () 
            {
                if (name === '' || mobile === '' || email === '') {
                    errorContainer.textContent = 'ERROR: All fields are required';
                    return;
                }
            }
        )

    
    }
)