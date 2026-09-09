import { Suspense } from "react";
import ApiBasics from "./tasks/Task01_ApiBasics"
import User from "./tasks/User"
// import Task02_FetchUsers from "./tasks/Task02_FetchUsers"


async function UsersApiPromise() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

function App() {
  return (
    <>
      <ApiBasics></ApiBasics>
      <Suspense fallback={<p>Loading...</p>}>
        <User usersApiPromise = {UsersApiPromise()}></User>
      </Suspense>
      {/* <Task02_FetchUsers /> */}
      
    </>
  )
}

export default App
