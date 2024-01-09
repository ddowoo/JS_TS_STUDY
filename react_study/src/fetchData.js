function fetchUser(userId) {
  let user = null;
  const suspender = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        user = data;
      }, 3000);
    });
  return {
    read() {
      if (user === null) {
        throw suspender;
      } else {
        return user;
      }
    },
  };
}

function fetchData(userId) {
  return {
    user: fetchUser(userId),
  };
}

export default fetchData;
