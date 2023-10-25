export function getContacts () {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };
    fetch(`http://localhost:8000/get-contacts`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la requête");
        }
        return response.text();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Erreur lors de la requête : ", error);
      });
  };