const fetchData = (url) => fetch(url).then((response) => response.json());

fetchData('http://jsonplaceholder.typicode.com/posts')
    .then((data) => {
        var titles =  data
        .filter((post) => post.title.split(' ').length > 6)
        .map((post) => post.title);


    console.log(titles);

    });


fetchData('http://jsonplaceholder.typicode.com/posts')
    .then((data) => {
        var words = data
        .filter((post) => post.body.split(' '))
        .map((post) => post.body);

    console.log(words);

    });