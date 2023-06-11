import { useContext, } from 'react';

import CheckedContext from "../contexts/checkedContext";

function User({ user, total, handleDelete, handleEdit, checkedAll, setCheckedAll, }) {

    const value = useContext(CheckedContext);

    const handleChangeChecked = async ({ target }, userId) => {
        const { checked } = target; // target or currentTarget

        if (checked) {
            // value.setCheckedUser([...value.checkedUser, userId]);
            value.setCheckedUser((prevState) => ([...prevState, userId]));
            //console.log(`handleChangeChecked - value.checkedUser.length=${value.checkedUser.length} - total=${total}`);
            if (value.checkedUser.length + 1 > 0 && total == value.checkedUser.length + 1) setCheckedAll(true);
        } else {
            // const newCheckedUser = value.checkedUser.filter(item => item !== userId);
            // value.setCheckedUser(newCheckedUser);
            value.setCheckedUser(value.checkedUser.filter(item => item !== userId));
            if (checkedAll) setCheckedAll(false);
        }
    }

    return (
        <>
            <tr key={user.id} id={user.id}>
                <td>
                    <span className="custom-checkbox">
                        <input onChange={e => handleChangeChecked(e, user.id)} type="checkbox" id="data_checkbox" className="data_checkbox" name="data_checkbox" />
                        <label htmlFor="data_checkbox"></label>
                    </span>
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <a href="#editEmployeeModal" className="edit" data-toggle="modal" onClick={() => handleEdit(user.id)}>
                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                    </a>
                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal" onClick={() => handleDelete(user.id)}>
                        <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                    </a>
                </td>
            </tr>
        </>
    )
}

export default User;