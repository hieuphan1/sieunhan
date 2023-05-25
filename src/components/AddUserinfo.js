import React, { useState } from "react";

function AddUserinfo(props) {
    const [name, setName] = useState('hieu');
    const [age, setAge] = useState(23);
    const [address, setAddress] = useState('Da nang');


    // state = {
    //     name: 'hieu',
    //     age: 23,
    //     address: 'Da nang'
    // };
    const handleOnSubmit = (event) => {

        event.preventDefault()  //ngan chan reload lai trang
        // alert('Thong tin: \nTen: ' + this.state.name
        //     + '\nTuoi: ' + this.state.age
        //     + '\ndia chi: ' + this.state.address
        // )
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });

    }
    const handOnChangeInput = (event) => {
        setName(event.target.value);
        // this.setState({
        //     name: event.target.value
        // })
        // console.log(event, event.target.value)
    }
    const handOnChangeAge = (event) => {
        setAge(event.target.value);
        // this.setState({
        //     age: event.target.value
        // })
        // console.log(event, event.target.value)
    }

    return (
        <div>
            Toi la {name} tuoi toi la {age}
            {/* <button onClick={(event) => { this.handClick(event) }}  > click me</button> */}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => handOnChangeInput(event)}
                />
                <label>Your age: </label>
                <input
                    type="text"
                    value={age}
                    onChange={(event) => handOnChangeAge(event)}
                />

                <button>submit</button>
            </form>

            {Math.random()}
        </div>
    )

}
export default AddUserinfo;