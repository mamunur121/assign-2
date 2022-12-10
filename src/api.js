const API = "http://localhost:9000";
const handleErrors = (res) => {
  if (!res.ok) {
    return res.json().then((error) => {
      throw error;
    });
  }
  return res;
};

export const listItems = () => {
  return fetch(`${API}/dishes/`).then((response) => response.json());
};

export const update_create_Item = (item) => {
  // console.log(pet);
  return fetch(`${API}/dishes/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then(handleErrors)
    .then((res) => res.json());
};

export const removeAllItems = () => {
  return fetch(`${API}/dishes/clear`).then((respinse) => respinse.json());
};
export const deleteItem = (item) => {
  return fetch(`${API}/dishes/${item._id}`, {
    method: "DELETE",
  })
    .then(handleErrors)
    .then((res) => res.json());
};
