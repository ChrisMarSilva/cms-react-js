import { usePagination, DOTS, } from '../helpers/usePagination';

// function Pagination({ usersCount, currentPage, pageSize, onPageChange, }) {
function Pagination({ currentPage, totalCount, pageSize, onPageChange, siblingCount = 1, }) {

    // const totalPages = Math.ceil(usersCount / pageSize);
    // if (totalPages == 1) return null;
    // const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });

    if (currentPage === 0 || paginationRange?.length < 2) return null;

    const onNext = () => onPageChange(currentPage + 1);
    const onPrevious = () => onPageChange(currentPage - 1);

    let lastPage = paginationRange[paginationRange?.length - 1];

    return (
        <>
            {/* <p>currentPage: {currentPage}</p> */}
            <div className="d-flex justify-content-center align-items-center">
                <ul className="pagination">

                    <li key={200} className={`page-item ${currentPage === 1 ? "active disabled" : ''}`} disabled={currentPage === 1}>
                        <a href="#" className="page-link" onClick={onPrevious}>
                            {'<'}
                        </a>
                    </li>

                    {
                        paginationRange &&
                        paginationRange?.length > 0 &&
                        paginationRange?.map(pageNumber => {
                            // If the pageItem is a DOT, render the DOTS unicode character
                            //if (pageNumber === DOTS) return <li key={400} className="pagination-item dots">&#8230;</li>;
                            return (
                                <>
                                    <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? "active disabled" : ''}`} disabled={currentPage === pageNumber}>
                                        <a href="#" className="page-link" onClick={() => onPageChange(pageNumber)}>
                                            {pageNumber}
                                        </a>
                                    </li>
                                </>
                            );
                        })
                    }

                    <li key={300} className={`page-item ${currentPage === lastPage ? "active disabled" : ''}`} disabled={currentPage === lastPage}>
                        <a href="#" className="page-link" onClick={onNext}>
                            {'>'}
                        </a>
                    </li>

                    {/* {
                        pages &&
                        pages?.length > 0 &&
                        pages?.map(page => {
                            return (
                            <>
                                <li key={page} className={`page-item ${page == currentPage ? "active " : ''}`}>
                                    <a href="#" className="page-link" onClick={() => onPageChange(page)}>
                                        {page}
                                    </a>
                                </li>
                            </>
                            )
                        })
                    } */}

                </ul>
            </div>
        </>
    )
}

export default Pagination;