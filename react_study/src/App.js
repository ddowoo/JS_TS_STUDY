//--------------------------------------------------

import React, { useState, useEffect } from "react";

function UserData() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log("유저 가져오기");
    fetchUserData().then((data) => setUserData(data));
    console.log("유저 가져옴");
  }, []);

  return <div>{userData ? userData : "Loading user data..."}</div>;
}

function PostData() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    console.log("포스트 가져오기");
    fetchPostData().then((data) => setPostData(data));
    console.log("포스트 가져옴");
  }, []);

  return <div>{postData ? postData : "Loading post data..."}</div>;
}

function App() {
  return (
    <div>
      <UserData />
      <PostData />
    </div>
  );
}

// 비동기 데이터를 가져오는 함수들 (간략히 가정)
function fetchUserData() {
  return new Promise((resolve) => {
    // 사용자 데이터를 가져오는 비동기 작업
    setTimeout(() => resolve("User data loaded"), 1000);
  });
}

function fetchPostData() {
  return new Promise((resolve) => {
    // 포스트 데이터를 가져오는 비동기 작업
    setTimeout(() => resolve("Post data loaded"), 2000);
  });
}

export default App;

//--------------------------------------------------

// import { Suspense, useEffect, useState } from "react";
// import ErrorBoundary from "./components/ErrorBoundary";

// function fetchUser(userId, delay = 0) {
//   let user = null;
//   let isError = false;

//   const suspender = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       setTimeout(() => {
//         user = data;
//       }, delay);
//     })
//     .catch((error) => {
//       isError = true;
//     });

//   return {
//     read() {
//       if (user === null) {
//         throw suspender;
//       }

//       return user;
//     },
//   };
// }

// function App() {
//   return (
//     <>
//       <ErrorBoundary fallback={<h2>Error...</h2>}>
//         <Suspense fallback={<h2>정보가져오는중...</h2>}>
//           <User resource={fetchUser("1", 10)} idx={"2"} />
//           {/* <Suspense fallback={<h2>정보가져오는중...</h2>}>
//             <User resource={fetchData("3", 500)} idx={"3"} />
//           </Suspense> */}
//         </Suspense>
//       </ErrorBoundary>
//     </>
//   );
// }

// function User({ resource, idx }) {
//   console.log("유저 정보 가져오기");
//   const user = resource.read();
//   console.log("유저 화면 그리기");

//   return (
//     <div>
//       <p>
//         {user.name}({user.email}) 님이 작성한 글
//       </p>
//     </div>
//   );
// }

// export default App;
