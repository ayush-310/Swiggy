import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        // This is just dummy  used when debbugger is used to check the state
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Dummy",
                avatar_url: "https://www.google.com"
            }
        }
    }
    async componentDidMount() {
        console.log("User Class Mounted")

        const data = await fetch("https://api.github.com/users/ayush-310");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        console.log(json);
    }

    componentDidUpdate() {
        console.log("User Class Updated")
    }

    componentWillUnmount() {
        console.log("User Class Unmounted")
    }

    render() {

        const { name, location, avatar_url } = this.state.userInfo;
        // debugger;
        return (
            <div className="user-card">

                <h1>User</h1>
                <h2>Name : {name}</h2>
                <h2>Location: {location}</h2>
                <img src={avatar_url} alt="User" />
                <h2>ayuofficial11310@gmail.com</h2>
            </div>
        )
    }
}

export default UserClass;