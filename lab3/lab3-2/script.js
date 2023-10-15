const fetchData = (url) => fetch(url).then((response) => response.json());

/*fetchData('http://jsonplaceholder.typicode.com/posts')
    .then((data) => {
        const titles =  data
        .filter((post) => post.title.split(' ').length > 6)
        .map((post) => post.title);


    console.log(titles);

});*/


fetchData('http://jsonplaceholder.typicode.com/posts')
    .then((data) => {
        const bodies = data.map((post) => post.body);

        const wordMap = bodies
        .flatMap((text) => text.split(/\s+/))



    console.log(wordMap);

});