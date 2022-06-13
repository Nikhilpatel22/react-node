import React, { useState } from 'react';
import { Form, Button, Dropdown, Container, Row, Col } from 'react-bootstrap'
const init = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    color: '',
    gender: '',
    hobbie: ''
}
const Userlist = () => {
    const [user, setUser] = useState(init);
    const [list, setList] = useState([])
    const { firstname, lastname, email, password, color, gender } = user
    const [toggleSubmit, setToggleSubmit] = useState(true)
    const [iseditUser, setIsEditUser] = useState(null);
    const [hobbie, setHobbie] = useState([])
    // const valueChange = (e) => {
    //     setUser({
    //         ...user,
    //         Id: new Date().getTime().toString(),
    //         [e.target.name]: e.target.value,
    //         hobbie
    //     })
    // }
    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const getHobbie = (e) => {
        // let data = hobbie
        // data.push(e.target.value)
        // setHobbie(data)
        // console.log(hobbie)
        let hobbieList = [...hobbie];
        const currentIndex = hobbieList.indexOf(e.target.value);
        if (currentIndex === -1) {
            hobbieList.push(e.target.value)
        } else {
            hobbieList.splice(currentIndex, 1)
        }
        setHobbie(hobbieList);
    }
    const Submit = (e) => {
        e.preventDefault();
        console.log(user);
        const newRecord = { ...user, Id: new Date().getTime().toString(), hobbie }
        console.log("newrecords", newRecord)
        list.push(newRecord);
        setList(list)
        setUser({ firstname: "", lastname: "", email: "", password: "", color: "", gender: "" })
        console.log("list", list)
        setHobbie('');
    }
    const updateUser = (id) => {
        let editNewuser = list.find((u) => {
            return u.Id === id
        });
        setToggleSubmit(false)
        setUser({
            firstname: editNewuser.firstname,
            lastname: editNewuser.lastname,
            email: editNewuser.email,
            password: editNewuser.password,
            color: editNewuser.color,
            gender: editNewuser.gender
        })
        console.log("edit", editNewuser)
        setHobbie(editNewuser.hobbie)

        setIsEditUser(id)
    }

    const Update = (e) => {
        e.preventDefault();
        setList(
            list.map((data) => {
                if (data.Id === iseditUser) {
                    console.log("data", data);
                    return {
                        ...data,
                        firstname,
                        lastname,
                        email,
                        password,
                        color,
                        gender,
                        hobbie,
                    }
                }
                return data;
            })
        )
        setUser({ firstname: "", lastname: "", email: "", password: "", color: "", gender: "" })
        setHobbie('');
        setToggleSubmit(true)
    }

    const deleteUser = (id) => {
        let deleteUser = list.filter((dl => (
            id !== dl.Id
        )))
        setList(deleteUser)
    }
    return (
        <div>
            <h3 style={{ fontWeight: 700 }}>User List</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="First Name" name="firstname" value={firstname} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Last Name" name="lastname" value={lastname} onChange={handleInputChange} />
                </Form.Group>
                {/* <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="First Name" name="firstname"  onChange={(e) => valueChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Last Name" name="lastname"  onChange={(e) => valueChange(e)} />
                </Form.Group> */}
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Email" name="email" value={email} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                </Form.Group>
                <Form.Select aria-label="Default select example" name="color" value={color} onChange={handleInputChange}>
                    <option>Favorite Color</option>
                    <option value="Red">Red</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Pink">Pink</option>
                    <option value="Black">Black</option>
                </Form.Select>
                <br />
                <Form.Check type="radio" inline
                    label="Male"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleInputChange}
                />
                <Form.Check type="radio" inline
                    label="Female"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                Hobbies
                <br />
                <br />
                <Form.Check inline
                    label="Cricket"
                    name="cricket"
                    value="cricket"
                    checked={hobbie.includes("cricket")}
                    onChange={(e) =>
                        getHobbie(e)} />
                <Form.Check inline
                    label="Travel"
                    name="travel"
                    value="travel"
                    checked={hobbie.includes("travel")}
                    onChange={(e) =>
                        getHobbie(e)} />
                <Form.Check inline
                    label="movie"
                    name="hobbie"
                    value="movie"
                    checked={hobbie.includes("movie")}
                    onChange={(e) =>
                        getHobbie(e)} />
                <Form.Check inline
                    label="sport"
                    name="hobbie"
                    value="sport"
                    checked={hobbie.includes("sport")}
                    onChange={(e) =>
                        getHobbie(e)} />
                <Form.Check inline
                    label="singing"
                    name="hobbie"
                    value="singing"
                    checked={hobbie.includes("singing")}
                    onChange={(e) =>
                        getHobbie(e)} />
                <Form.Check inline
                    label="dancing"
                    name="hobbie"
                    value="dancing"
                    checked={hobbie.includes("dancing")}
                    onChange={(e) =>
                        getHobbie(e)} />
                <br />
                <br />
                {
                    toggleSubmit ?
                        <Button variant="primary" onClick={Submit}>
                            Submit
                        </Button>
                        :
                        <Button variant="primary" onClick={Update}>
                            Update
                        </Button>
                }
                {/* <Button variant="primary" onClick={Submit}>
                    Submit
                </Button> */}
            </Form>
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
                            list.map((users, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index}</th>
                                        <td>{users.firstname}</td>
                                        <td>{users.lastname}</td>
                                        <td>{users.email}</td>
                                        <td>{users.password}</td>
                                        <td>{users.color}</td>
                                        <td>{users.gender}</td>
                                        <td>{users.hobbie.join(",")}</td>
                                        <td>
                                            <button onClick={() => updateUser(users.Id)}>Update</button>
                                            <button onClick={() => deleteUser(users.Id)}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Userlist;
