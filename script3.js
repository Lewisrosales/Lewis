document.getElementById('regisid').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phoneno').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Create list object
    const list = {
        fname: fname,
        lname: lname,
        address: address,
        phone: phone,
        gender: gender
    };

    // Get existing lists from localStorage
    let storage = localStorage.getItem('storage');
    if (storage) {
        storage = JSON.parse(storage);
    } else {
        storage = [];
    }

    // Add new list to the array
    storage.push(list);

    // Save updated lists array back to localStorage
    localStorage.setItem('storage', JSON.stringify(storage));

    // Clear the form
    document.getElementById('regisid').reset();

    // Update the list display
    display();

    alert('Registered successfully!');
});

function display() {
    const regsTableBody = document.getElementById('regsTableBody');
    regsTableBody.innerHTML = '';

    // Get lists from localStorage
    const storage = JSON.parse(localStorage.getItem('storage')) || [];

    // Display each list in the table
    storage.forEach((list, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${list.fname}</td>
            <td>${list.lname}</td>
            <td>${list.address}</td>
            <td>${list.phone}</td>
            <td>${list.gender}</td>
            <td><button id="delbutton" onclick="deleteList(${index})">Delete</button></td>
        `;
        regsTableBody.appendChild(row);
    });
}

function deleteList(index) {
    
    let storage = JSON.parse(localStorage.getItem('storage')) || [];

    
    storage.splice(index, 1);
   
    localStorage.setItem('storage', JSON.stringify(storage));

   
    display();
}


display();
