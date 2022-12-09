const handleErrors = (res) => {
  if (!res.ok) {
    return res.json().then((error) => {
      throw error;
    });
  }
  return res;
};

export const updatePet = (pet) => {
  // console.log(pet);
  return fetch(`http://localhost:9000/dishes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pet),
  })
    .then(handleErrors)
    .then((res) => res.json());
};
