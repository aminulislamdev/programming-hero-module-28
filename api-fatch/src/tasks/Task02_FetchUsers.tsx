// import { use } from "react";
const Task02_FetchUsers = ({user}) => {

  return (
    <div>
      <p>------------------------------------</p>
      <p>Name:{user.name}</p>
      <p>Email : {user.email}</p>
      <p>City : {user.address.city}</p>
    </div>
  );
};

export default Task02_FetchUsers;