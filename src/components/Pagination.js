import React from 'react'
import '../style/Pagination.css'

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => {
                    console.log('This is number: ', currentPage)
                    return (<li key={number} className='page__item'>
                        <a onClick={() => paginate(number)} href='#' className={currentPage === number ? 'page__link page__item_active' : 'page__link'}>
                            {number}
                        </a>
                    </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Pagination