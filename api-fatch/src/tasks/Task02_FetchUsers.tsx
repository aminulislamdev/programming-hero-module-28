// import { use } from "react";
import type { IUser } from '../types/users'
// import Task02 from './Task02';

interface ITask02_FetchUsers {
  user: IUser
}
const Task02_FetchUsers = ({ user }: ITask02_FetchUsers) => {

  return (
    <div>
      {/* <Task02 users={user}></Task02> */}
      <div key={user.id}>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>City: {user.address.city}</p>
      </div>
    </div>
  );
};

export default Task02_FetchUsers;