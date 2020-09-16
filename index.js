function submitData(username, userEmail) {

    fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: username,
                email: userEmail
            })
        })
        .then(response => {
            response.json();
        })
        .then(data => document.body.innerHTML = data[ "id" ])
}
submitData();
