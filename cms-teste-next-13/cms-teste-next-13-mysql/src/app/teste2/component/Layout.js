import { useContext, useState, useMemo, } from 'react';

import Alerta from "./Alert";
import Navbar from "./Navbar";
import UsersTable from "./UsersTable";
import Pagination from "./Pagination";
import AppContext from "../contexts/appContext";
//import { Paginate } from '../helpers/paginate';
import { Search } from '../helpers/search';

let pageSize = 10; //const pageSize = 10;

function Layout() {
    const value = useContext(AppContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    // const onPageChange = page => setCurrentPage(page);
    // let paginateUsers = Paginate(value.users, currentPage, pageSize);
    //searchQueryResult = Search(value?.users, searchQuery);

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

    return (
        <>

            <div className="container-xl">
                <div className="table-responsive d-flex flex-column">
                    <Alerta />
                    <div className="table-wrapper">
                        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                        <UsersTable users={paginateUsers} isLoading={value?.isLoading} />
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
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="username" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" name="submit" data-dismiss="modal" value="Cancel" />
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
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <input type="hidden" name="updateId" className="updateId" />
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control updateUsername" name="username" required />
                                </div>
                                <div className="form-group">
                                    <label>password</label>
                                    <input type="text" className="form-control updatePassword" name="password" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" name="submit" className="btn btn-default" data-dismiss="modal" value="Cancel" />
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