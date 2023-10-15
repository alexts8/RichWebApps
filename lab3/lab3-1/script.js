document.addEventListener('DOMContentLoaded', function () 
{

    const nameInput = document.getElementById('name');
    const numberInput = document.getElementById('number');
    const emailInput = document.getElementById('email');
    const addContactBtn = document.getElementById('addContact');
    const contactList = document.getElementById('contactList');
    const errorDiv = document.getElementById('error');
    const searchInput = document.getElementById('search')
    const noResultDiv = document.getElementById('noResult');
    const nameHeader = document.getElementById('nameHeader');

    const contacts = [];

    addContactBtn.addEventListener('click', function () {
        const name = nameInput.value.trim();
        const number = numberInput.value.trim();
        const email = emailInput.value.trim();

        if (name === '' || number === '' || email === '') {
            errorDiv.textContent = 'ERROR: All fields are required';
            errorDiv.style.display = 'block';
            return;
        }

        if (!name.match(/^[A-Za-z ]{1,20}$/)) {
            errorDiv.textContent = 'ERROR: Name should contain only letter and spaces and be 1-20 characters long';
            errorDiv.style.display = 'block';
            return;
        }

        if (!number.match(/^\d{10}$/)) {
            errorDiv.textContent = 'ERROR: Number should contain exactly 10 digits';
            errorDiv.style.display = 'block';
            return;
        }

        if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/) || email.length > 40) {
            errorDiv.textContent = 'ERROR: Invalid email';
            errorDiv.style.display = 'block';
            return;
        }

        errorDiv.style.display = 'none';
        contacts.push({ name, number, email });
        updateContactList();
        nameInput.value = '';
        numberInput.value = '';
        emailInput.value = '';

    });

    function updateContactList() {
        contactList.innerHTML = ''; // Clear the table
        contacts.forEach((contact, index) => {
            const row = document.createElement('tr');
            row.style.backgroundColor = index % 2 === 0 ? '#f2f2f2' : '';

            const nameCell = document.createElement('td');
            nameCell.textContent = contact.name;
            const numberCell = document.createElement('td');
            numberCell.textContent = contact.number;
            const emailCell = document.createElement('td');
            emailCell.textContent = contact.email;

            row.appendChild(nameCell);
            row.appendChild(numberCell);
            row.appendChild(emailCell);

            contactList.appendChild(row);
        });
    }


    nameHeader.addEventListener('click', function () {
        contacts.reverse(); 
        updateContactList();
    });

    searchInput.addEventListener('input', function () {
        const search = searchInput.value.trim();
        if (search === '') {
            noResultDiv.style.display = 'none';
            updateContactList();
        } else {
            const filteredContacts = contacts.filter(contact => contact.number.includes(search));
            if (filteredContacts.length === 0) {
                noResultDiv.style.display = 'block';
            } else {
                noResultDiv.style.display = 'none';
                contactList.innerHTML = ''; 
                filteredContacts.forEach((contact, index) => {
                    const row = document.createElement('tr');
                    row.style.backgroundColor = index % 2 === 0 ? '#f2f2f2' : '';

                    const nameCell = document.createElement('td');
                    nameCell.textContent = contact.name;
                    const numberCell = document.createElement('td');
                    numberCell.textContent = contact.number;
                    const emailCell = document.createElement('td');
                    emailCell.textContent = contact.email;

                    row.appendChild(nameCell);
                    row.appendChild(numberCell);
                    row.appendChild(emailCell);

                    contactList.appendChild(row);
                });
            }
        }
    });


});
