
//array of images
let rainbowImages = [
    "https://img.freepik.com/free-vector/pride-gradient-1_78370-282.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ2UeRHzDx_Vz9TnJKTBi_2Dy8IQ5WN6sxA&usqp=CAU",
    "https://static.vecteezy.com/system/resources/thumbnails/006/911/398/small/rainbow-waves-background-free-vector.jpg"
];

//second array of images
let boringImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03EhgdfIHYI5-1ZrveghONeRHnFwmvskeeg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQj8p5OqrffesDGXAxQiqWV8Fsz2LEbm_06g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34evipC01KZo6K-WuxnTjYyNuJ28uNQjlkA&usqp=CAU"
];

//display a confirm window and execute this block if the user selects yes
if(confirm("would you like to make this website interesting?"))
{

    //change the body colour of the page
    document.body.style.backgroundColor = "Pink";

    //reverse through array of images
    //getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
    const imgs = document.getElementsByTagName("img");
    for(let i = 0; i < imgs.length; i++) {
        const randomImg = Math.floor(Math.random() * rainbowImages.length)
        imgs[i].src = rainbowImages[randomImg]
    }

    //do the same for h1 elements
    const headers = document.getElementsByTagName("h1");
    for (let i = 0; i < headers.length; i++){
        headers[i].innerText = "You Made it Interesting!";
        headers[i].style.color = "Pink"
    }
    
    //do the same for h2 elements
    const headers2 = document.getElementsByTagName("h2");
    for (let i = 0; i < headers2.length; i++){
        headers2[i].innerText = "Cool Website!";
        headers2[i].style.color = "Pink"
    }

    //do the same for h3 elements
    const headers3 = document.getElementsByTagName("h3");
    for (let i = 0; i < headers3.length; i++){
        headers3[i].innerText = "Cool Website!";
        headers3[i].style.color = "Pink"
    }

    //do the same for p elements
    const p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++){
        p[i].innerText = "Cool website!";
        p[i].style.color = "Pink"
        p[i].style.fontSize = "40px"
    }

}

//display a confirm window and execute this block if the user does not select yes
else
{
    //change the body colour of the page
    document.body.style.backgroundColor = "#4B4848";

    //reverse through array of images
    //getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
    const imgs = document.getElementsByTagName("img");
    for(let i = 0; i < imgs.length; i++) {
        const randomImg = Math.floor(Math.random() * boringImages.length)
        imgs[i].src = boringImages[randomImg]
    }

    //do the same for h1 elements
    const headers = document.getElementsByTagName("h1");
    for (let i = 0; i < headers.length; i++){
        headers[i].innerText = "Boooo Boring";
        headers[i].style.color = "Black"
    }

    //same for h2
    const headers2 = document.getElementsByTagName("h2");
    for (let i = 0; i < headers2.length; i++){
        headers2[i].innerText = "Boring Website";
        headers2[i].style.color = "Black"
    }

    //same for h3
    const headers3 = document.getElementsByTagName("h3");
    for (let i = 0; i < headers3.length; i++){
        headers3[i].innerText = "Boring Website";
        headers3[i].style.color = "Black"
    }

    //do the same for p elements
    const p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++){
        p[i].innerText = "Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla";
        p[i].style.color = "Black"
    }

    const div = document.getElementsByTagName("div");
    for (let i = 0; i < div.length; i++){
        div[i].style.backgroundImage = "https://img.freepik.com/free-vector/pride-gradient-1_78370-282.jpg";
    }

}





