export async function getContacts() {
    await fetch("http://localhost:3001/get-contacts").then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la requête: get-contacts");
        }
        return response.json();
    })
}

export async function addContact(requestData) {
    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    };
    await fetch("http://localhost:3001/add-contact", requestOptions).then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la requête: add-contact");
        }
    })
}

export async function deleteContact(requestData) {
    const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    };
    await fetch("http://localhost:3001/delete-contact", requestOptions).then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la requête: add-contact");
        }
    })
}

export async function editContact(requestData) {
    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    };
    await fetch("http://localhost:3001/edit-contact", requestOptions).then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la requête: add-contact");
        }
    })
}
