const Api = {
  apiUrl: "mongodb+srv://@crudusers.9b0eu.mongodb.net",
  fetchGetAll: () => fetch(Api.apiUrl),
  fetchGetById: (id) => fetch(`${Api.apiUrl}/${id}`),
  fetchPost: (todo) => {
    return fetch(Api.apiUrl, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(todo),
    });
  },
  fetchPut: (todo, id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(todo),
    });
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: "DELETE",
    });
  },
};

export default Api;
