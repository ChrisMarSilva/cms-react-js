import { useContext, } from 'react';

import AppContext from "../contexts/appContext";
import CheckedContext from "../contexts/checkedContext";

function Navbar({ searchQuery, setSearchQuery, setAlertMessage, checkedAll, setCheckedAll, }) {

    const appContextData = useContext(AppContext);
    const checkedContextData = useContext(CheckedContext);

    const checkedIds = checkedContextData.checkedUser;

    const handleMultiDelete = async () => {
        // appContextData.setIsLoading(true);

        if (!checkedIds.length) {
            setAlertMessage("Not user selected!");
            return;
        }

        const reqOption = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Content-Length': + checkedIds.length,
                'x-ids': checkedIds,
            },
            body: JSON.stringify({ ids: checkedIds }),
            cache: 'no-store',
        }

        const url = `${process.env.NEXT_PUBLIC_URL}/api/users/deleteMulti`;
        const response = await fetch(url, reqOption);
        const result = await response.json();

        if (result == "No body") {
            setAlertMessage("No body");
            return;
        }

        if ("ids" in result) {
            setAlertMessage("Multi users deleted!");
            // const newUsers = appContextData.users.filter(user => !checkedIds.includes(user.id));
            // appContextData.setMyUsers(newUsers);
            // appContextData.setMyUsers(appContextData.users.filter(user => result.ids.indexOf(user.id) != -1));
            appContextData.setMyUsers(appContextData.users.filter(user => !checkedIds.includes(user.id)));
            if (checkedAll) setCheckedAll(false);
        }

        // appContextData.setIsLoading(false);
    }

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>NextJS-MySQL <b>CRUD</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                            <i className="material-icons">&#xE147;</i>
                            <span>Add New Employee</span>
                        </a>
                        <a href="#" onClick={handleMultiDelete} className="delete_all_data btn btn-danger">
                            <i className="material-icons">&#xE15C;</i>
                            <span>Delete</span>
                        </a>
                        <input
                            type="text"
                            className="form-control"
                            style={{ width: '200px', float: 'right', height: '34px' }}
                            name="search_user"
                            placeholder="Search a username..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;