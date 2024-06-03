fetch(url, options)
    .then(response => {
        // Handle the response
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
    });

fetch(url, {
    method: 'GET' // POST, PUT, DELETE, PATCH, OPTIONS
})

fetch(url, {
    method: 'POST',
    body: JSON.stringify({ name: 'John', email: 'email'}),
    header: {
        'Content-Type': 'application/json'
    }
})

fetch(url, {
    method: 'PUT',
    body: JSON.stringify({name: 'Updated_name', email: 'updated@example.com'}),
    header: {
        'Content-Type': 'application/json'
    }
})

fetch(url, {
    method: 'DELETE'
})

// Partial modification
fetch(url, {
    method: 'PATCH',
    body: JSON.stringify({name: 'anotherUpdateName'}),
    header: {
        'Content-Type': 'application/json'
    }
})

// Describe communcation options; check allowed methods and headers
fetch(url, {
    method: 'OPTIONS'
})

// Function to fetch and work with JSON data
function fetchBooks() {
	// Fetch the JSON data from the file. GET is the default method?
	fetch('books.json')
        .then(response => response.json())
        .then(data => {
            // Data contains the JSON content
            console.log('List of Books:');
            data.forEach(book => {
                console.log(`Title: ${book.title}`);
                console.log(`Author: ${book.author}`);
                console.log(`Publication Year: ${book.publicationYear}`);
                console.log('------------------------');
            });

            // You can perform other oeprations with the JSON data here.
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
}


