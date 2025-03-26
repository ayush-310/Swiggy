import React from 'react'
import User from './User'
import UserClass from './UserClass'


class About extends React.Component{
    render(){
        return(
            <div>
                <User name={"Ayush Function"} />
                <UserClass name={"Ayush Class"} location={"Gurgaon"} />
                About page
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <User name={"Ayush Function"} />
//             <UserClass name={"Ayush Class"} location={"Gurgaon"} />
//             About page
//         </div>
//     )
// }

export default About
