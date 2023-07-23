import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
// import "./style.CSS";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log('Parent DidiMount');
  }

  render() {
    //console.log("Parent Render");
    return (
      <>
        <div className="about">
          <h1>About us</h1>
          <User name={"Pankaj Sarkar Funtion"} location={"Siliguri Funtion"} />

          <UserClass name={"first"} location={"Siliguri class"} />
          <UserClass name={"Scond"} location={"Siliguri class"} />
        </div>
      </>
    );
  }
}

export default About;
