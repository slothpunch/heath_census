var xhr = new XMLHttpRequest();
var url = './health_articles.json';
// console.log(window.location.pathname.split('/'));

// GET - a HTML method used for the request
// True: Indicates if the request is asynchronous (true) or synchronous (false). It allows other scripts to run while the request is processed.
xhr.open('GET', url, true);
// xhr.open('GET', url, false);

// Sepcify the response type
// Inform the XMLHttpRequest object that the expected response from the server should be in JSON format
xhr.responseType = 'json'; // error

// Manage response
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('articles');

        console.log(xhr.response)
        console.log('articles: ',articles)
    } else {
        console.error('Error fetching data: ', xhr.status);
    }
        
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = "Ways to Achieve";
        
        var wayList = document.createElement('ul');
        article.ways_to_achieve.forEach(function (way) {
            let listItem = document.createElement('li');
            listItem.textContent = way;
            wayList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitHeader.textContent = "Benefits";

        var benefitsList = document.createElement('ul');
        article.benefits.foreach(function (benefit) {
            let listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitList.appendChild(listItem);
        });

        // article Div
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(wayList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
        
        // articleS Div
        articlesDiv.appendChild(title);
        
    });
};

// Handle network error
xhr.onerror = function() {
    console.error("Network error: ", xhr.status)
};

xhr.send();

