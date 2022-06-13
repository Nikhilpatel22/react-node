
import React,{useState} from 'react'
import {usePagination} from './pagination';

const Pages = ({data}) =>{
    console.log("user-list",data);

    const [
        totalPages,
        startPageIndex,
        endPageIndex,
        currentPage,
        dispPage
    ]=usePagination(3,data.lenght);

    console.log("totalpages",totalPages)
    console.log("startPageIndex",startPageIndex)
    console.log("endPageIndex",endPageIndex)
    console.log("currentPage",currentPage)


    return (
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
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            data.map((users, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index}</th>
                                        <td>{users.Firstname}</td>
                                        <td>{users.Lastname}</td>
                                        <td>{users.Email}</td>
                                        <td>{users.Password}</td>
                                        <td>{users.Color}</td>
                                        <td>{users.Gender}</td>
                                        <td>{users.Hobbie.join(",")}</td>
                                        {/* <td>
                                            <button onClick={() => updateUser(users.Id)}>Update</button>
                                           
                                            <button onClick={() => deleteUser(users.Id)}>delete</button>
                                        </td> */}
                                    </tr>
                                )
                            })
                        } 
                        </tbody> 
                </table>
                <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#"></a></li>
                    {/* <li class="page-item active">
                        <span class="page-link">
                            2
                            <span class="sr-only"></span>
                        </span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li> */}
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pages
