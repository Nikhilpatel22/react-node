import React from 'react'

const Mainpagination = ({ postperPage, totalPosts, paginate, currentPage }) => {
    //  console.log(totalPosts)
    const pageNumber = [];
    const tot = Math.ceil(totalPosts / postperPage)
    for (let i = 1; i <= tot; i++) {
        pageNumber.push(i);
    }
    console.log("pagenumber", pageNumber)
    return (
        <div>
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    {
                        pageNumber.map(number => (
                            <div>
                                <li onClick={() => paginate(number)} style={{ cursor: "pointer" }} key={number} id={number} className={currentPage == number ? "active page-item" : null}>
                                    <a class="page-link" tabindex="-1">{number}</a>
                                </li>
                            </div>
                        ))
                    }
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Mainpagination
