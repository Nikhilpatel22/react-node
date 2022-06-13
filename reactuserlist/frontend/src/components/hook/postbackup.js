import React, { useState } from 'react'
import { Form, Button, Dropdown, Container, Row, Col } from 'react-bootstrap'

const Post = ({ data, data2, loading, postperPage, totalPosts, paginate, currentPage, PreviousButton, NextButton }) => {

    const [search, setSearch] = useState("");

    const [searchcurrentPage, setSearchCurrentPage] = useState(1);
    const [searchpostperPage, setSearchPostperPage] = useState(3);

    const SearchindexOfLastPage = searchcurrentPage * searchpostperPage;
    console.log("SearchindexOfLastPage", SearchindexOfLastPage)
    
    const SearchindexOfFirstPage = SearchindexOfLastPage - searchpostperPage;
    console.log("SearchindexOfFirstPage", SearchindexOfFirstPage)


    const searchdata = data2.filter((val) => Object.keys(val).some(k =>
            String(val[k]).toLowerCase().includes(search.toLowerCase())))

    const SearchcurrentPost = searchdata.slice(SearchindexOfFirstPage, SearchindexOfLastPage);
    console.log("SearchcurrentPost", SearchcurrentPost)

    
    const SearchPaginate = (pageNumberSearch) => {
        setSearchCurrentPage(pageNumberSearch);
    }

    const PreviousButton1 = () =>{
        setSearchCurrentPage(searchcurrentPage-1)
    }

    const NextButton1 = () =>{
        setSearchCurrentPage(searchcurrentPage+1)
    }

    console.log(search.length)

    const totalPosts1 = searchdata.length;

    const pageNumberSearch = [];
    const total = Math.ceil(totalPosts1 / searchpostperPage)
    for (let i = 1; i <= total; i++) {
        pageNumberSearch.push(i);
    }
    console.log("pageNumberSearch", pageNumberSearch)

    // console.log("search",data2.filter((val) => Object.keys(val).some(k =>
    //     String(val[k]).toLowerCase().includes(search.toLowerCase()))))

    const pageNumber = [];
    const tot = Math.ceil(totalPosts / postperPage)
    for (let i = 1; i <= tot; i++) {
        pageNumber.push(i);
    }
    console.log("pagenumber", pageNumber)



    if (loading) {
        return <h2>loading....</h2>
    }
    console.log("data", data)
    return (
        <div>
            {/* <input type="text" placeholder="search" value={value} onChange={FilterData} /> */}
            <input
                type="text"
                placeholder="Search"
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
            />
            {
                search.length > 0 ?
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Color</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Hobbies</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                SearchcurrentPost.map((users, index) => {
                                    return (
                                        <tr key={users.Id}>
                                            <th>{users.Id}</th>
                                            <td>{users.Firstname}</td>
                                            <td>{users.Lastname}</td>
                                            <td>{users.Email}</td>
                                            <td>{users.Password}</td>
                                            <td>{users.Color}</td>
                                            <td>{users.Gender}</td>
                                            <td>{users.Hobbie.join(",")}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                     <nav aria-label="...">
                     <ul class="pagination">
                         <li class="page-item">
                             <Button variant="primary" disabled={searchcurrentPage == pageNumberSearch[0] ? true : false} onClick={PreviousButton1}>Previous</Button>
                         </li>
                         {
                             pageNumberSearch.map(number => (
                                 <div>
                                     <li onClick={() => SearchPaginate(number)} style={{ cursor: "pointer" }} key={number} id={number} className={searchcurrentPage == number ? "active page-item" : null}>
                                         <a class="page-link" tabindex="-1">{number}</a>
                                     </li>
                                 </div>
                             ))
                         }
                         <li class="page-item">
                             {/* <a className={currentPage == pageNumber[pageNumber.length - 1] ? "disabled page-item" : null}  onClick={NextButton}>Next</a> */}
                             <Button variant="primary" disabled={searchcurrentPage == pageNumberSearch[pageNumberSearch.length - 1] ? true : false} onClick={NextButton1}>Next</Button>
                         </li>
                     </ul>
                 </nav>
                 </div>
                    :
                    <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Color</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Hobbies</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((users, index) => {
                                    return (
                                        <tr key={users.Id}>
                                            <th>{users.Id}</th>
                                            <td>{users.Firstname}</td>
                                            <td>{users.Lastname}</td>
                                            <td>{users.Email}</td>
                                            <td>{users.Password}</td>
                                            <td>{users.Color}</td>
                                            <td>{users.Gender}</td>
                                            <td>{users.Hobbie.join(",")}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                  
                     <nav aria-label="...">
                     <ul class="pagination">
                         <li class="page-item">
                             <Button variant="primary" disabled={currentPage == pageNumber[0] ? true : false} onClick={PreviousButton}>Previous</Button>
                         </li>
                         {
                            //  new Array(tot).fill()
                             pageNumber.map(number => (
                                 <div>
                                     <li onClick={() => paginate(number)} style={{ cursor: "pointer" }} key={number} id={number} className={currentPage == number ? "active page-item" : null}>
                                         <a class="page-link" tabindex="-1">{number}</a>
                                     </li>
                                 </div>
                             ))
                         }
                         <li class="page-item">
                             {/* <a className={currentPage == pageNumber[pageNumber.length - 1] ? "disabled page-item" : null}  onClick={NextButton}>Next</a> */}
                             <Button variant="primary" disabled={currentPage == pageNumber[pageNumber.length - 1] ? true : false} onClick={NextButton}>Next</Button>
                         </li>
                     </ul>
                 </nav>
                 </div>
            }






            {/* <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Color</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Hobbies</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        search.length > 0 ?
                            data2.filter((val) => Object.keys(val).some(k =>
                                String(val[k]).toLowerCase().includes(search.toLowerCase())))
                                .map((users, index) => {
                                    return (
                                        <tr key={users.Id}>
                                            <th>{users.Id}</th>
                                            <td>{users.Firstname}</td>
                                            <td>{users.Lastname}</td>
                                            <td>{users.Email}</td>
                                            <td>{users.Password}</td>
                                            <td>{users.Color}</td>
                                            <td>{users.Gender}</td>
                                            <td>{users.Hobbie.join(",")}</td>
                                        </tr>
                                    )
                                })
                                :
                        // data.filter((val) => {
                        //     if (search == "") {
                        //         return val
                        //     } else if (val.Firstname.toLowerCase().includes(search.toLowerCase())) {
                        //         return val
                        //     }
                        // })
                        data.map((users, index) => {
                                return (
                                    <tr key={users.Id}>
                                        <th>{users.Id}</th>
                                        <td>{users.Firstname}</td>
                                        <td>{users.Lastname}</td>
                                        <td>{users.Email}</td>
                                        <td>{users.Password}</td>
                                        <td>{users.Color}</td>
                                        <td>{users.Gender}</td>
                                        <td>{users.Hobbie.join(",")}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table> */}
           
        </div>
    )
}

export default Post
