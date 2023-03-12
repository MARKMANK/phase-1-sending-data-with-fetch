function renderData(data){
    let card = document.createElement('div');
    card.className = 'content'
    card.innerHTML = `
    <li>
        <h2>${data.name}</h2>
            <p>
                <span class="email">${data.email}</span>
            </p>
            <p>${data.id}</p>
    </li>
    `
    document.querySelector('body').append(card)
};

function submitData(userName="Kevin",userEmail="KevinIsDoingIt@email.com"){

    const formData = {
        name: `${userName}`,
        email: `${userEmail}`,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
        body: JSON.stringify(formData),
    };

    let fetchRequest = fetch('http://localhost:3000/users',configurationObject)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        renderData(data);
    })
    .catch(function(error){
        document.querySelector('body').append(`<div>${error.message}</div>`)
    })

    return fetchRequest;
}