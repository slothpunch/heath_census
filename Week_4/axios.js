const axios = require('axios'); // If it is a Node.js environment, require('axios') is needed to import it.

const apiUrl = '';

axios({
    method: 'GET',
    url: apiUrl
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
