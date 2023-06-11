import { useContext, useState, useMemo, } from 'react';
// import { block } from "million"; // TypeError: Cannot convert a Symbol value to a string
// import { block } from "million/next"; // Module not found
// import { block } from 'million/react'; // TypeError: Cannot convert a Symbol value to a string
// import { block } from "million/react-server"; // TypeError: Cannot convert a Symbol value to a string

import AppContext from "../contexts/appContext";
import CheckedContext from "../contexts/checkedContext";

import Alerta from "./Alert";
import Navbar from "./Navbar";
import UsersTable from "./UsersTable";
import Pagination from "./Pagination";
//import { Paginate } from '../helpers/paginate';
import { Search } from '../helpers/search';

let pageSize = 10; //const pageSize = 10;
//const UsersTableBlock = block(UsersTable);

function Layout() {

    const value = useContext(AppContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [saveUser, setSaveUser] = useState({ username: "", email: "" });
    const [editUser, setEditUser] = useState({ id: "", username: "", email: "" });
    const [checkedUser, setCheckedUser] = useState([]);    
    const [checkedAll, setCheckedAll] = useState(false);

    // console.log(checkedUser);

    // const onPageChange = page => setCurrentPage(page);
    // let paginateUsers = Paginate(value.users, currentPage, pageSize);
    // searchQueryResult = Search(value?.users, searchQuery);

    let searchQueryResult = value?.users;

    if (searchQuery.length > 0) {
        value.setIsLoading(true);
        searchQueryResult = Search(searchQueryResult, searchQuery);
        value.setIsLoading(false);
    }

    const paginateUsers = useMemo(() => {
        value.setIsLoading(true);

        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        const result = searchQueryResult.slice(firstPageIndex, lastPageIndex);

        value.setIsLoading(false);
        return result;
    }, [searchQuery, currentPage, value?.users, searchQueryResult]);

    const handleSaveChange = ({ target: { name, value } }) /* target or currentTarget */ => setSaveUser((prevState) => ({ ...prevState, [name]: value }));

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        // value.setIsLoading(true);

        const reqOption = {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=UTF-8", },
            body: JSON.stringify({ username: saveUser.username, email: saveUser.email }), // JSON.stringify(saveUser),
            cache: 'no-store',
        }

        const url = `${process.env.NEXT_PUBLIC_URL}/api/users`;
        const response = await fetch(url, reqOption);
        const result = await response.json();

        setSaveUser({ username: "", email: "" });

        if (result) { // result.response.user;
            setAlertMessage("User added successfully!");
            document.getElementsByClassName('addCancel')[0].click();
            // let prevUsers = value.users;
            // prevUsers.push(result);
            // value.setMyUsers(prevUsers);
            value.setMyUsers(prevState => [...prevState, result]);
        }

        // value.setIsLoading(false);
    }

    const handleDelete = async (userId) => {
        // value.setIsLoading(true);

        const reqOption = {
            method: "DELETE",
            headers: { "Content-Type": "application/json; charset=UTF-8", },
            cache: 'no-store',
        }

        const url = `${process.env.NEXT_PUBLIC_URL}/api/users/${userId}`;
        const response = await fetch(url, reqOption);
        const result = await response.json();

        if (result) { // result.response.success;
            setAlertMessage("User deleted successfully!");
            const idToRemove = parseInt(userId);
            // const prevUsers = value.users;
            // const newUsers = prevUsers.filter(user => user.id !== idToRemove);
            // value.setMyUsers(newUsers);
            value.setMyUsers(value.users.filter(user => user.id !== idToRemove));
            // value.setMyUsers(prevState => [...prevState, value.users.filter(user => user.id !== idToRemove)]); // error
        }

        // value.setIsLoading(false);
    }

    const handleEditChange = ({ target: { name, value } }) /* target or currentTarget */ => setEditUser((prevState) => ({ ...prevState, [name]: value }));

    const handleEdit = async (userId) => {
        // value.setIsLoading(true);

        setEditUser({ id: "", username: "", email: "" });

        const reqOption = {
            method: "GET",
            headers: { "Content-Type": "application/json; charset=UTF-8", },
            cache: 'no-store',
        }

        const url = `${process.env.NEXT_PUBLIC_URL}/api/users/${userId}`;
        const response = await fetch(url, reqOption);
        const result = await response.json();

        // if (result) setEditUser(result);
        if (result) setEditUser({ id: result.id, username: result.username, email: result.email })

        // value.setIsLoading(false);
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        // value.setIsLoading(true);

        const reqOption = {
            method: "PUT",
            headers: { "Content-Type": "application/json; charset=UTF-8", },
            body: JSON.stringify({ username: editUser.username, email: editUser.email }), // JSON.stringify(editUser),
            cache: 'no-store',
        }

        const url = `${process.env.NEXT_PUBLIC_URL}/api/users/${editUser.id}`;
        const response = await fetch(url, reqOption);
        const result = await response.json();

        setEditUser({ id: "", username: "", email: "" });

        if (result) {
            setAlertMessage("User edited successfully!");
            document.getElementsByClassName('editCancel')[0].click();
            const idToUpdated = parseInt(editUser.id);

            // let prevUsers = value.users.filter(user => user.id != idToUpdated);
            // prevUsers.push(result);
            // value.setMyUsers(prevUsers);

            let prevUsers = value.users;

            prevUsers.forEach(user => {
                if (user.id === idToUpdated) {
                    user.id = user.id
                    user.username = result.username
                    user.email = result.email
                    return
                }
            });

            ///value.setMyUsers(prevState => [...prevState, prevUsers]);
            value.setMyUsers(prevUsers);
        }

        //  value.setIsLoading(false);
    }

    return (
        <>

            <div className="container-xl">
                <div className="table-responsive d-flex flex-column">

                    <Alerta
                        text={alertMessage}
                        setAlertMessage={setAlertMessage}
                        style={alertMessage.length > 0 ? 'block' : 'none'}
                    />

                    <div className="table-wrapper">

                        <CheckedContext.Provider value={{ checkedUser: checkedUser, setCheckedUser: setCheckedUser }} >

                            <Navbar
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                setAlertMessage={setAlertMessage}
                                checkedAll={checkedAll}
                                setCheckedAll={setCheckedAll}
                            />

                            <UsersTable
                                users={paginateUsers}
                                isLoading={value?.isLoading}
                                checkedAll={checkedAll}
                                setCheckedAll={setCheckedAll}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />

                        </CheckedContext.Provider>

                        <Pagination
                            // usersCount={value?.users?.length} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange}
                            currentPage={currentPage} totalCount={searchQueryResult?.length} pageSize={pageSize} onPageChange={page => setCurrentPage(page)}
                        />

                    </div>

                </div>
            </div>

            {/* <!-- Add Modal HTML --> */}
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleAddSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="username" required value={saveUser.username} onChange={handleSaveChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" required value={saveUser.email} onChange={handleSaveChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default addCancel" name="submit" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-success" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Add Modal HTML --> */}

            {/* <!-- Edit Modal HTML --> */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleEditSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <input type="hidden" name="id" className="updateId" value={editUser.id} onChange={handleEditChange} />
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control updateUsername" x name="username" required value={editUser.username} onChange={handleEditChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control updateEmail" name="email" required value={editUser.email} onChange={handleEditChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" name="submit" className="btn btn-default editCancel" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-info" value="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Edit Modal HTML --> */}

        </>
    )
}

export default Layout;