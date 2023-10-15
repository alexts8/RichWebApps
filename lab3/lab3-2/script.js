const fetchData = (url) => fetch(url).then((response) => response.json());

fetchData('http://jsonplaceholder.typicode.com/posts')
    .then((data) => {
        var titles =  data
        .filter((post) => post.title.split(' ').length > 6)
        .map((post) => post.title);


    console.log(titles);

    });