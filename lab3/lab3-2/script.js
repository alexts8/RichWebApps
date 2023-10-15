const fetchData = (url) => fetch(url).then((response) => response.json());

fetchData('http://jsonplaceholder.typicode.com/posts')
    .then((data) => {
        console.log(data);
    });