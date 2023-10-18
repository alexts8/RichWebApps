const scrollableList = document.querySelector('.scrollable-list');
const listItems = scrollableList.querySelectorAll('.list-item');


async function getUserProfile() {

    const input_username = document.getElementById("search-bar").value;
    const profilePicture = document.getElementById("profile-picture");  
    const name = document.getElementById("name");  
    const username = document.getElementById("username");  
    const email = document.getElementById("email");  
    const location = document.getElementById("location");  
    const gists = document.getElementById("gists");  



        const response1 = await fetch(`https://api.github.com/users/${input_username}`);
        if (response1.ok) {
            const userData = await response1.json();
            const avatarURL = userData.avatar_url;
            const u_username = userData.login;         

            profilePicture.innerHTML = `<img src="${avatarURL}"width="150">`;
            username.innerHTML = `<p>${u_username}</p>`;
        } 

        const response2 = await fetch(`https://api.github.com/users/${input_username}/gists`);
        if (response2.ok) {
            const gistData = await response2.json();
            const u_gists = gistData.length;

            gists.innerHTML = `<p>Number of Gists: ${u_gists}</p>`


        } 
}

if (scrollableList.childElementCount > 5) {
    scrollableList.style.overflowY = "scroll";
}