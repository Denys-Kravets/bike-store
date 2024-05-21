document.getElementById("login-button").addEventListener("click",function (e){
    e.preventDefault();
    const userDto = {
        email: document.getElementById("email").value,
        password:document.getElementById("password").value,
    }

    fetch(`https://f276-31-128-76-81.ngrok-free.app/users/login`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDto)
    })
        .then(r=>{
            if(r.ok){
                r.json().then(user=> {
                    localStorage.setItem("userData", JSON.stringify(user));

                    window.location.href="home.html";
                });
            } else {
                window.location.href="log-in.html";
            }
        })

})