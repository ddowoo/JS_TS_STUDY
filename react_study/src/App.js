import { Suspense, useEffect, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

function fetchData(userId, delay) {
  return {
    user: fetchUser(userId, delay),
  };
}

function fetchUser(userId, delay = 0) {
  console.log("delay : ", delay);
  let user = null;
  let isError = false;

  const suspender = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then((data) => {
      setTimeout(() => {
        user = data;
      }, delay);
    })
    .catch((error) => {
      isError = true;
    });

  return {
    read() {
      if (isError) {
        throw new Error("💥 CABOOM 💥");
      }

      if (user === null) {
        throw suspender;
      }

      return user;
    },
  };
}

function App() {
  return (
    <>
      <ErrorBoundary fallback={<h2>Error...</h2>}>
        <Suspense fallback={<h2>정보가져오는중...</h2>}>
          <User resource={fetchData("2")} idx={"2"} />
          <Suspense fallback={<h2>정보가져오는중...</h2>}>
            <User resource={fetchData("3", 500)} idx={"3"} />
          </Suspense>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

function User({ resource, idx }) {
  const user = resource.user.read();

  return (
    <div>
      <p>
        {user.name}({user.email}) 님이 작성한 글
      </p>
    </div>
  );
}

export default App;
