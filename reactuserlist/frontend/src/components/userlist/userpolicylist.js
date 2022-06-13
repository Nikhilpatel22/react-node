import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';


const Userpolicylist = () => {
    const [userPolicy, setUserPolicy] = useState('')
    const [policyList, setPolicyList] = useState([])
    const [address, setAddress] = useState("");
    const [isAnnual, setIsAnnual] = useState(false)
    const [insurance, setInsurance] = useState([]);
    const [totalpremium, setTotalPremium] = useState("")
    const [isupdateUser, setIsUpdateUser] = useState(null);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    // const {firstname, lastname,startdate,enddate,address} = userPolicy

    const handleInputChange = (e) => {
        setUserPolicy({
            ...userPolicy, [e.target.name]: e.target.value
        })
    }

    const handleaddressChange = (e) => {
        setAddress({
            ...address, [e.target.name]: e.target.value
        })
    }

    const premiumCalculation = (e) => {
        let insurancelist = [...insurance];
        const currentIndex = insurancelist.indexOf(e.target.value);
        if (currentIndex == -1) {
            insurancelist.push(e.target.value)
        }
        else {
            insurancelist.splice(currentIndex, 1)
        }
        setInsurance(insurancelist)

        // let data = insurance;
        // data.push(e.target.value);
        // setInsurance(data)

        // *******************************************Month-Diff**********************************************

        const StartDate = new Date(userPolicy.startdate)
        const EndDate = new Date(userPolicy.enddate)

        var month = Math.max((EndDate.getFullYear() - StartDate.getFullYear()) * 12 + EndDate.getMonth() - StartDate.getMonth(), 0)

        console.log("month diff", month)

        var premiumprice;
        var car = 0;
        var bike = 0;
        var medical = 0;

        insurancelist.map((policy) => {
            if (policy == "bike") {
                if (month < 1) {
                    premiumprice = 400;
                } else if (month >= 1 && month < 6) {
                    premiumprice = 1400;
                } else {
                    premiumprice = 1900;
                }
                bike = premiumprice;
            }
            if (policy == "car") {
                if (month < 1) {
                    premiumprice = 600;
                } else if (month >= 1 && month < 6) {
                    premiumprice = 1600;
                } else {
                    premiumprice = 2100;
                }
                car = premiumprice;
            }
            if (policy == "medical") {
                if (month < 1) {
                    premiumprice = 500;
                } else if (month >= 1 && month < 6) {
                    premiumprice = 1500;
                } else {
                    premiumprice = 2000;
                }
                medical = premiumprice;
            }
        })

        const totalPrice = Number(bike) + Number(car) + Number(medical);
        console.log("totalprice", totalPrice)
        setTotalPremium(totalPrice);
    }

    const Submit = (e) => {
        e.preventDefault();
        const newRecord = ({ ...userPolicy, Id: new Date().getTime().toString(), address, insurance, totalpremium })
        console.log(newRecord)

        policyList.push(newRecord)
        setPolicyList(policyList);
        console.log(policyList)
        setUserPolicy({ firstname: "", lastname: "", startdate: "", enddate: "" })
        setAddress({ country: "", zipcode: "" })
        setInsurance("");
        setTotalPremium("");
    }

    const DeleteUser = (id) => {
        const deleteuser = policyList.filter((dl) => (
            id !== dl.Id
        ))
        setPolicyList(deleteuser)
    }

    const UpdateUser = (id) => {
        const updateuser = policyList.find((uu) => {
            return uu.Id === id
        })
        console.log("updateuser", updateuser.address.country)
        setUserPolicy({
            firstname: updateuser.firstname,
            lastname: updateuser.lastname,
            startdate: updateuser.startdate,
            enddate: updateuser.enddate,
        })
        setAddress(updateuser.address)
        setInsurance(updateuser.insurance)
        setTotalPremium(updateuser.totalpremium)
        setIsUpdateUser(id)
        setToggleSubmit(false)
    }

    const Update = (e) => {
        e.preventDefault();
        setPolicyList(
            policyList.map((data) => {
                if (data.Id === isupdateUser) {
                    console.log("data", data)

                    return {
                        ...data,
                        firstname: userPolicy.firstname,
                        lastname: userPolicy.lastname,
                        // country:userPolicy.country,
                        // zipcode:userPolicy.zipcode,
                        startdate: userPolicy.startdate,
                        enddate: userPolicy.enddate,
                        address,
                        insurance,
                        totalpremium
                    }
                } return data;
            }))

        setUserPolicy({ firstname: "", lastname: "", startdate: "", enddate: "" })
        setAddress({ country: "", zipcode: "" })
        setInsurance("");
        setTotalPremium("");
        setToggleSubmit(true)
    }
    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="First Name" name="firstname" value={userPolicy.firstname} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder='Last Name' name="lastname" value={userPolicy.lastname} onChange={handleInputChange} />
                </Form.Group>
                <Form.Select aria-label="Default select example" name="country" value={address.country} onChange={handleaddressChange}>
                    <option>Country</option>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="canada">CANADA</option>
                </Form.Select>
                <br />
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder='Zip Code' name="zipcode" value={address.zipcode} onChange={handleaddressChange} />
                </Form.Group>
                <Form.Check inline
                    label="in annual"
                    name="annual"
                    // value={isannual === "true" ? "is annual" : "is annual not"}
                    onChange={(e) =>
                        setIsAnnual(e.target.checked)} />
                <br />
                <br />
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder='Start Date' name="startdate" value={userPolicy.startdate} onChange={handleInputChange} />
                </Form.Group>
                {
                    isAnnual ?
                        <Form.Group className="mb-3">
                            <Form.Control type="hidden" placeholder='End Date' name="enddate" onChange={handleInputChange} />
                        </Form.Group>
                        : <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder='End Date' name="enddate" value={userPolicy.enddate} onChange={handleInputChange} />
                        </Form.Group>
                }
                <Form.Check
                    inline
                    label="bike"
                    name="bike"
                    value="bike"
                    checked={insurance.includes("bike")}
                    onChange={(e) => premiumCalculation(e)}
                />
                <Form.Check
                    inline
                    label="car"
                    name="car"
                    value="car"
                    checked={insurance.includes("car")}
                    onChange={(e) => premiumCalculation(e)}
                />
                <Form.Check
                    inline
                    label="medical"
                    name="medical"
                    value="medical"
                    checked={insurance.includes("medical")}
                    onChange={(e) => premiumCalculation(e)}
                />
                <br />
                <br />
                <Form.Control
                    style={{ color: "black" }}
                    type="text"
                    disabled
                    readOnly
                    placeholder="Total Premium"
                    value={totalpremium}
                    name="premium"
                    onChange={(e) => setTotalPremium(e.target.value)} />
                <br />
                <br />
                {
                    toggleSubmit ? <Button onClick={Submit}>Submit</Button> :
                        <Button onClick={Update}>Update</Button>
                }
            </Form>
            <Table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>country</th>
                        <th>Zip Code</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Policy</th>
                        <th>Total Premium</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        policyList.map((user, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{user.firstname}</th>
                                <th>{user.lastname}</th>
                                <th>{user.address.country}</th>
                                <th>{user.address.zipcode}</th>
                                <th>{user.startdate}</th>
                                <th>{user.enddate}</th>
                                <th>{user.insurance.join(" , ")}</th>
                                <th>{user.totalpremium}</th>
                                <th><button onClick={() => UpdateUser(user.Id)}>Update</button></th>
                                <th><button onClick={() => DeleteUser(user.Id)}>Delete</button></th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Userpolicylist;
