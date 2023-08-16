import { UserRow } from "./UserRow"
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

export const UsersList = () => {

    const { users } = useUsers();
    const { login } = useAuth();
    return (
        console.log(users),
        <table className="table table-hover table-striped">

            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    {!login.isAdmin || <>
                        <th>update</th>
                        <th>update route</th>
                        <th>remove</th>
                    </>}
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({ id,name, userName, email }) => (
                        <UserRow
                            key={id}
                            id={id}
                            name={name}
                            username={userName}
                            email={email}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}