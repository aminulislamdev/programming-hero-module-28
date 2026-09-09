import { use } from "react";
import Task02_FetchUsers from "./Task02_FetchUsers";

const User = ({ usersApiPromise }) => {
  const Users = use(usersApiPromise);
  return (
    <div>
      {
        Users.map( user => <Task02_FetchUsers user={user}></Task02_FetchUsers>)
      }
    </div>
  );
};

export default User;