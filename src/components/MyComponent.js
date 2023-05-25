import React, { useState } from "react";
import Displayinfo from "./Displayinfo";
import AddUserinfo from "./AddUserinfo";
import ChartBar from "./ChartBar/Chartbar";
import ChartBar2 from "./ChartBar2/ChartBar2";

import ChartBar3 from "./ChartBar3/ChartBar3";


function MyComponent() {

    const [listUser, setListuser] = useState(
        [
            { id: 1, name: "hieu", age: "16" },
            { id: 2, name: "eric", age: "30" },
            { id: 3, name: "Long", age: "69" },
        ]
    );



    // state = {
    //     listUsers: [
    //         { id: 1, name: "hieu", age: "16" },
    //         { id: 2, name: "eric", age: "30" },
    //         { id: 3, name: "Long", age: "69" },
    //     ]
    // }

    const handleAddNewUser = (Obj) => {
        console.log(">>> check data", Obj)
        setListuser([Obj, ...listUser]);
        // this.setState({
        //     listUsers: [Obj, ...this.state.listUsers]
        // })
    }
    const hendleDeleteUser = (userID) => {
        let listUserClone = [...listUser];
        listUserClone = listUserClone.filter(item => item.id !== userID);
        setListuser(listUserClone);
        // this.setState({
        //     listUsers: listUserClone
        // })
    }


    // handClick(event) {
    //     console.log("click vao button")
    //     console.log("Toi la: ", this.state.name)
    //     console.log("random la: ", Math.floor((Math.random() * 100) + 1))

    //     this.setState({
    //         name: 'hieu pro',
    //         age: Math.floor((Math.random() * 100) + 1)

    //     })

    // }




    const test = 'hieu pro';
    return (
        <>
            {test}
            <div className="a">
                <AddUserinfo
                    handleAddNewUser={handleAddNewUser}

                />
                <br></br>
                <Displayinfo
                    listUsers={listUser}
                    hendleDeleteUser={hendleDeleteUser}
                />
            </div>
            <div className="b">

            </div>
            <ChartBar testName="BANDWIDTH" color1="#2DB8CD" color2="#31C8DD" percentage={20} />
            <ChartBar testName="STOREGE" color1="#E54D4C" color2="#F85354" percentage={50} />
            <ChartBar testName="USERS" color1="#4AC25E" color2="#51D567" percentage={70} />
            <hr></hr>
            <ChartBar2 />
            <hr></hr>
            <div style={{ display: "flex", margin: "0 20%" }}>
                <ChartBar3 brandName="Facebook" iconName="fa-brands fa-facebook-f fa-2xl" color1="#609AEB" total="5,00,000" unitName="Like" />
                <ChartBar3 brandName="Twitter" iconName="fa-brands fa-facebook-f fa-2xl" color1="#31C8DF" total="5,00,000" unitName="Like" />
                <ChartBar3 brandName="FACEBOOK" iconName="fa-brands fa-facebook-f fa-2xl" color1="#F78152" total="5,00,000" unitName="Like" />
                <ChartBar3 brandName="FACEBOOK" iconName="fa-brands fa-facebook-f fa-2xl" color1="#F85355" total="5,00,000" unitName="Like" />
            </div>

        </>
    );

}
export default MyComponent;