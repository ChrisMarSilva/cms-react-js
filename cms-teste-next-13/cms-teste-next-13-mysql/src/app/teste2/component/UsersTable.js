import User from "./User";

function UsersTable({ users }) {

    const userGenerator = () => {
        return (
            <>
                {/* {!users || users?.length == 0 && <tr><td colSpan={4} className="text-center">Nenhum registro encontrado...</td></tr>} */}
                {users && users?.length > 0 && users?.map(user => <User key={user.id} user={user} />)}
            </>
        )
    }

    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>
                            <span className="custom-checkbox">
                                <input type="checkbox" id="selectAll" />
                                <label htmlFor="selectAll"></label>
                            </span>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userGenerator()}
                </tbody>
            </table>
        </>
    )
}

export default UsersTable;