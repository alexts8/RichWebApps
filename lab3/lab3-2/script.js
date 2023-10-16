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
        .reduce((map, word) => {
            map[word] = (map[word] || 0) + 1;
            return map;
        }, {});


    console.log(wordMap);

});