import React from "react";
// import UserContext from "../utills/UserContext";
import UserContext from "../utills/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props.name + "chaild constructor");
  }

  // async componentDidMount() {
  //   //console.log(this.props.name + 'chaild componentDidMout is cold');

  // }
  // componentDidUpdate(prevProps , prevState){
  //   if (this.state.count !== prevState.count || this.state.count2 !== prevState.count2) {
  //      //Code
  //   }
  //   if ( this.state.count2 !== prevState.count2) {
  //      //Code
  //   }
  // }
  // componentWillUnmount(){
    
  // }
  render() {
    const { name, location } = this.props;

    // console.log(this.props.name + "chaild Render");

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3> Location : {location}</h3>
        <h4>Contact : pankajsarkar2345@.gmail.com</h4>
        <div>
          loggedin User :
          <UserContext.Consumer>
            {(data)=> <h4>{data.loggedinUser}</h4>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default UserClass;
