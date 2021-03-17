import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import "../scss/Pagination.scss"

const PaginationComponent = ({ setPage }, { pages = 100 }) => {
    console.log(setPage)


    const handlePageChange = (e) => {
        e = e.target.textContent
        setPage(cSt => cSt = e)
        e.preventDefault()
        window.scroll(0, 0)
    }

    return (
        <div className="pagination">
            <Pagination count={pages} variant="outlined" shape="rounded" color={'primary'} onChange={e => handlePageChange(e)} />
        </div >
    );
}


export default PaginationComponent