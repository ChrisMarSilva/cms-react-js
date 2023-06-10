import Link from 'next/link';

function Navbar({ searchQuery, setSearchQuery, }) {
    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>NextJS-MySQL <b>CRUD</b></h2>
                    </div>
                    <div className="col-sm-6">
                        {/* <Link href="/">HOME</Link> */}
                        <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                            <i className="material-icons">&#xE147;</i>
                            <span>Add New Employee</span>
                        </a>
                        <a href="#" className="delete_all_data btn btn-danger">
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