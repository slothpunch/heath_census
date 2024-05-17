let books = [];

function addBook(){
	const bookName = document.getElementById('bookName').value;	
	const authorName = document.getElementById('authorName').value;
	const bookDescription = document.getElementById('bookDescription').value;
	const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
	
	// Check if bookName, authorName, bookDescription, pagesNumber are not empty

	if (bookName && authorName && bookDescription && pagesNumber) {
		// Create a book object
		const book = {
			name: bookName,
			authorName: authorName,
			bookDescription: bookDescription,
			pagesNumber: pagesNumber
		};
		// Add the book object to books
		books.push(book);
		// showBooks are called to update the display with the newly added book details
		showBooks();
		// Clear the inputs
		clearInputs();
	} else {
		alert('Please fill all fields correctly.');
	}
}

function deleteBook(index = 0) {
	books.splice(index, 1);
	showBooks();
}


function showBooks() {
	const bookdDiv = books.map((book, index) => `<h1>Book Number: ${index + 1}</h1>
		<p><strong>Book Name:</strong> ${book.name}</p>
		<p><strong>Author:</strong> ${book.authorName}</p>
		<p><strong>Description:</strong> ${book.bookDescription}</p>
		<p><strong>Pages:</strong> ${book.pagesNumber}</p>`
	);
	document.getElementById('books').innerHTML = bookdDiv.join('');
}

function clearInputs() {
	document.getElementById('bookName').value = '';	
	document.getElementById('authorName').value = '';
	document.getElementById('bookDescription').value = '';
	document.getElementById('pagesNumber').value = '';
}

