import { useState, useContext, } from 'react';

import User from "./User";
import CheckedContext from "../contexts/checkedContext";

function UsersTable({ users, isLoading, checkedAll, setCheckedAll, handleDelete, handleEdit, }) {

    const value = useContext(CheckedContext);

    const handleSelectAllChange = (e) => {
        const { checked } = e.target; // target or currentTarget

        setCheckedAll(checked);
        const checkboxes = document.querySelectorAll("table tbody input[type='checkbox']");
        checkboxes.forEach(checkbox => checkbox.checked = checked);

        let checkedAllUser = [];

        if (checked) {
            //setCheckedAll(true);
            //const checkboxes = document.querySelectorAll("table tbody input[type='checkbox']");
            //checkboxes.forEach(checkbox => checkbox.checked = true);
            users?.map(user => checkedAllUser.push(user.id));
        } else {
            // setCheckedAll(false);
            // value.setCheckedUser(checkedAllUser);
        }

        value.setCheckedUser(checkedAllUser);
    }

    const userGenerator = () => {
        return (
            <>
                {
                    users &&
                    users?.length > 0 &&
                    users?.map(user => {
                        return (
                            <User
                                key={user.id}
                                user={user}
                                total={users.length}
                                checkedAll={checkedAll}
                                setCheckedAll={setCheckedAll}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />
                        )
                    })
                }
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
                                <input type="checkbox" id="selectAll" checked={checkedAll} onChange={(e) => handleSelectAllChange(e)} />
                                <label htmlFor="selectAll"></label>
                            </span>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading && <tr><td colSpan={4} className="text-center">Carregando...</td></tr>}
                    {!isLoading && (!users || users?.length == 0) && <tr><td colSpan={4} className="text-center">Nenhum registro encontrado...</td></tr>}
                    {userGenerator()}
                </tbody>
            </table>
        </>
    )
}

export default UsersTable;