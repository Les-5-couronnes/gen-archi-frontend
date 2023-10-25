export function deleteContact (requestData) {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    };
    fetch(`http://localhost:8000/delete-contact`, requestOptions)
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