//array of images
let rainbowImages = [
    "https://img.freepik.com/free-vector/pride-gradient-1_78370-282.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ2UeRHzDx_Vz9TnJKTBi_2Dy8IQ5WN6sxA&usqp=CAU",
    "https://static.vecteezy.com/system/resources/thumbnails/006/911/398/small/rainbow-waves-background-free-vector.jpg"
];

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
    headers[i].innerText = "Cool Website!";
    headers[i].style.color = "Pink"
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "Cool website!";
    p[i].style.color = "Pink"
}

const href = document.getElementsByTagName("href");
for (let i = 0; i < href.length; i++){
    yourElement.setAttribute('href', 'https://www.pexels.com/search/dog/');
}

const div = document.getElementsByTagName("div");
for (let i = 0; i < div.length; i++){
    div[i].style.backgroundImage = "https://img.freepik.com/free-vector/pride-gradient-1_78370-282.jpg";
}


alert("this website was boring so i made it interesting")


