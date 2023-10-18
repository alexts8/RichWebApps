const scrollableList = document.querySelector('.scrollable-list');
const listItems = scrollableList.querySelectorAll('.list-item');


async function getUserProfile() {

    const input_username = document.getElementById("search-bar").value;
    const profilePicture = document.getElementById("profile-picture");  
   // const name = document.getElementById("name");  
    const username = document.getElementById("username");  
    //const email = document.getElementById("email");  
   // const location = document.getElementById("location");  
    //const gists = document.getElementById("gists");  



        const response = await fetch(`https://api.github.com/users/${input_username}`);
        if (response.ok) {
            const userData = await response.json();
            const avatarURL = userData.avatar_url;
            const u_username = userData.login;
            /*const u_email = userData.avatar_url;
            const u_location = userData.avatar_url;
            const u_gists = userData.*/
           

            profilePicture.innerHTML = `<img src="${avatarURL}"width="150">`;
            username.innerHTML = `<p>${u_username}</p>`;
        } 
}

if (scrollableList.childElementCount > 5) {
    scrollableList.style.overflowY = "scroll";
}
