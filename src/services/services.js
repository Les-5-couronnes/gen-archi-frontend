export async function getContacts() {
    const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
    };
    console.log(process.env.BACKEND_URL)
    return await fetch(`${process.env.REACT_APP_API_URL}/get-contacts`, requestOptions).then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la requête: get-contacts");
        }
        return response.json();
    })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Erreur lors de la requête : ", error);
      });
}

export async function addContact(requestData) {
    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    };
    await fetch(`${process.env.REACT_APP_API_URL}/add-contact`, requestOptions).then((response) => {
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
    await fetch(`${process.env.REACT_APP_API_URL}/delete-contact`, requestOptions).then((response) => {
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
    await fetch(`${process.env.REACT_APP_API_URL}/edit-contact`, requestOptions).then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la requête: add-contact");
        }
    })
}
