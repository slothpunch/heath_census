
/* Display health articles */
function displayNewsArticles() {

    // Create a variable for XHLHttpRequest
    var xhr = new XMLHttpRequest();
    // Create a variable for URL
    var url = './news_articles.json';
    
    // Create a xhl GET request 
    xhr.open('GET', url, true);

    // Specify the response type to json
    xhr.responseType = 'json';

    // Load articles 
    xhr.onload = function() {
        // If the xhr is valid 
        if (xhr.status >= 200 && xhr.status < 400) {
            var articles = xhr.response.articles;
            var articlesDiv = document.getElementById('newsArticles');
        } else{
            console.error("Error fetching data: ", xhr.status);
        }

        articles.forEach(function (article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
            
            var source = document.createElement('p');
            source.textContent = article.source.name;

            var author = document.createElement('p');
            if (article.author) {
            // if (article.author != null) {
                author.textContent = article.author;
            } else {
                author.textContent = '-';
            }

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var newsUrl = document.createElement('p');
            newsUrl.textContent = article.url;

            var urlImage = document.createElement('img');
            if (article.urlToImage) {
                // urlImage.className.add('src');
                urlImage.src = article.urlToImage;
            } else {
                // urlImage.classList.add('image');
                urlImage.textContent = '-';
            }
            
            var publishedAt = document.createElement('p');
            publishedAt.textContent = article.publishedAt;

            var content = document.createElement('p');
            content.textContent = article.content;

            articleDiv.appendChild(source); 
            articleDiv.appendChild(author); 
            articleDiv.appendChild(title); 
            articleDiv.appendChild(description); 
            articleDiv.appendChild(newsUrl); 
            articleDiv.appendChild(urlImage); 
            articleDiv.appendChild(publishedAt); 
            articleDiv.appendChild(content); 
            
            articlesDiv.appendChild(articleDiv);
        });
    };

    xhr.onerror = function() {
        console.error('Network Error: ', xhr.status);
    }

    xhr.send();
}


// Create a variable for XHRHttpRequest

// Create a variable for URL

// Create a xhr GET request 

//


displayNewsArticles();


