import React from 'react'
import User from './User'
import UserClass from './UserClass'


class About extends React.Component {


    componentDidMount() {
        console.log("About Page Mounted")
    }

    render() {
        return (
            <div>
                About page
                <User name={"Ayush Function"} />
                <UserClass name={"First"} location={"Gurgaon"} />
                <UserClass name={"Second"} location={"Gurgaon"} />
                <UserClass name={"Third"} location={"Gurgaon"} />
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
