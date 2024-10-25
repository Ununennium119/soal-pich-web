import React from 'react';
import {Pagination} from 'react-bootstrap';
import PropTypes from "prop-types";

const PaginationComponent = ({activePage, totalPages, onPageChange}) => {
    const paginationItemWidth = "55px"

    const handlePageChange = (pageNumber) => {
        if (pageNumber !== activePage) {
            onPageChange(pageNumber);
        }
    };

    const getPaginationItems = () => {
        const items = [];
        const maxVisiblePages = 5; // Total pages to display (not counting ellipses)
        let startPage = Math.max(1, activePage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // Adjust startPage if endPage exceeds totalPages
        if (endPage === totalPages && startPage > 1) {
            startPage = Math.max(1, totalPages - maxVisiblePages + 1);
        }

        // Push the first page
        if (startPage > 1) {
            items.push(
                <Pagination.Item
                    key={1}
                    onClick={() => handlePageChange(1)}
                    style={{width: paginationItemWidth}}
                    className='text-center'
                >
                    1
                </Pagination.Item>
            );
            if (startPage > 2) {
                items.push(<Pagination.Ellipsis key="start-ellipsis"/>);
            }
        }

        // Add page numbers
        for (let page = startPage; page <= endPage; page++) {
            items.push(
                <Pagination.Item
                    key={page}
                    active={page === activePage}
                    onClick={() => handlePageChange(page)}
                    style={{width: paginationItemWidth}}
                    className='text-center'
                >
                    {page}
                </Pagination.Item>
            );
        }

        // Push the last page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                items.push(<Pagination.Ellipsis key="end-ellipsis"/>);
            }
            items.push(
                <Pagination.Item
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    style={{width: paginationItemWidth}}
                    className='text-center'
                >
                    {totalPages}
                </Pagination.Item>
            );
        }

        return items;
    };

    return (
        <Pagination>
            <Pagination.Prev
                onClick={() => handlePageChange(activePage - 1)}
                disabled={activePage === 1}
                style={{width: paginationItemWidth}}
                className='text-center'
            />
            {getPaginationItems()}
            <Pagination.Next
                onClick={() => handlePageChange(activePage + 1)}
                disabled={activePage === totalPages}
                style={{width: paginationItemWidth}}
                className='text-center'
            />
        </Pagination>
    );
};
PaginationComponent.propTypes = {
    activePage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
}

export default PaginationComponent;