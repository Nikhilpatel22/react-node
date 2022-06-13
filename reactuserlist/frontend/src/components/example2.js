import React,{useState} from 'react'
import Multiselect from 'multiselect-react-dropdown';


const Example2 = () => {
    const [hobbies,setHobbies] = useState([])


    const getHobbie = (event) =>{
        let hobbieList = [...hobbies];
        setHobbies(hobbieList);
        console.log(hobbies)
    }
    return (
        <div>
            <h1>example 2</h1>
            <Multiselect
        isObject={false}
        onRemove={(event) => {
          console.log(event);
          getHobbie(event);
        }}
        onSelect={(event) => {
          console.log(event);
          getHobbie(event);
        }}
        options={["cricket","Travel"]}
        // selectedValues={["Cricket"]}
        showCheckbox
      />
        </div>
    )
}

export default Example2
