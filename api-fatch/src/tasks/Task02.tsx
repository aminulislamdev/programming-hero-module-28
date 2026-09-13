import type { IUser } from '../types/Users'

interface ITask02 {
  users:IUser
}

const Task02 = ({users}:ITask02) => {
  return (
    <div>
          <div key={users.id}>
            <p>Name: {users.name}</p>
            <p>Email: {users.email}</p>
            <p>City: {users.address.city}</p>
          </div>
    </div>
  );
};

export default Task02;