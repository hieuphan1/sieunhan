import React, { useEffect, useState } from "react";
import './displayinfo.scss';
import logo1 from './../logo.svg';

// class Displayinfo extends React.Component {
function Displayinfo(props) {



    const { listUsers } = props; //object

    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleshowhide = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    useEffect(
        () => { //ham` render chay truoc moi chay ham nay va` nhung gi lien quan den dom thi viet o day
        setTimeout(() => {
            document.title = "Web hieu ngu"
        }, 3000)
    },[]
    );

    return (
        <div className="display-infor-container">
            {/* <img className="Anh" src={logo1} /> */}
            <div>
                {/* <span onClick={() => { this.handleshowhide() }}>
                        {this.state.isShow === true ? "Hide list user" : "Show list user"}
                    </span> */}
                <span onClick={() => handleshowhide()}>
                    {isShowHideListUser == true ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {isShowHideListUser &&
                <div>
                    {/* {listUsers.map(() => {})} */}
                    {listUsers.map((user, index) => {
                        console.log(user)
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div className="TT">
                                    <div>
                                        <div>My name is {user.name} </div>
                                        <div>My age {user.age} </div>
                                    </div>
                                    <div className="CC">
                                        <button onClick={() => props.hendleDeleteUser(user.id)}>delete</button>
                                    </div>
                                </div>

                                <hr></hr>

                            </div>
                        )

                        // if (+user.age > 18) {
                        //     return (
                        //         <div key={user.id} className="green">
                        //             <div>My name is {user.name} </div>
                        //             <div>My age {user.age} </div>
                        //             <hr></hr>
                        //         </div>
                        //     )
                        // } else {
                        //     return (
                        //         <div key={user.id} className="red">
                        //             <div>My name is {user.name} </div>
                        //             <div>My age {user.age} </div>
                        //             <hr></hr>
                        //         </div>
                        //     )
                        // }

                    })}
                    {/* <div>My name is {name}</div>
                <div>My age {age}</div>
                <hr></hr>
                <div>My name is {name}</div>
                <div>My age {age}</div>
                <hr></hr>
                <div>My name is {name}</div>
                <div>My age {age}</div>
 */}

                </div>
            }
        </div>

    )
}
// }
// }
export default Displayinfo;