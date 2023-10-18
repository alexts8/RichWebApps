async function getUserProfile() {

    const input_username = document.getElementById("search-bar").value;
    const profilePicture = document.getElementById("profile-picture");  
    const name = document.getElementById("name");  
    const username = document.getElementById("username");  
    const email = document.getElementById("email");  
    const location = document.getElementById("location");  
    const gists = document.getElementById("gists"); 
    const repoList = document.querySelector('.repo-list');
    repoList.innerHTML = ''; 



        const response1 = await fetch(`https://api.github.com/users/${input_username}`);
        if (response1.ok) {
            const userData = await response1.json();
            const avatarURL = userData.avatar_url;
            const u_username = userData.login;   
            const u_email = userData.email;   
            const u_name = userData.name; 
            const u_location = userData.location;    

            profilePicture.innerHTML = `<img src="${avatarURL}"width="150">`;
            username.innerHTML = `<p>Username: ${u_username}</p>`;
            email.innerHTML = `<p>Email: ${u_email}</p>`
            name.innerHTML = `<p>Name: ${u_name}</p>`
            location.innerHTML = `<p>Location: ${u_location}</p>`
        } 

        const response2 = await fetch(`https://api.github.com/users/${input_username}/gists`);
        if (response2.ok) {
            const gistData = await response2.json();
            const u_gists = gistData.length;

            gists.innerHTML = `<p>Number of Gists: ${u_gists}</p>`
        } 

        const response3 = await fetch(`https://api.github.com/users/${input_username}/repos`);
        if (response3.ok) {
            const repoData = await response3.json();

            repoData.forEach((repo) => {
                const repoDiv = document.createElement('div');
                repoDiv.innerHTML = `<strong>${repo.name}</strong><br>${repo.description}`;
                repoList.appendChild(repoDiv);
            });

            if (repoData.length > 5) {
                repoList.style.overflowY = 'scroll';
            }
            
        }

}

