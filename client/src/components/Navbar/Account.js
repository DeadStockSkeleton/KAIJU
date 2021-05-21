import avi from "../../assets/icons/defaultAvi.png";
import Script from "../utils/script";
import { Link} from "react-router-dom";
import React, { Component, PropTypes } from 'react';
class Account extends Component {
  logout = () => {
    Script.Logout();
  }
  constructor(props) {
    super(props);
    this.state = {opened: false};
  }
  async componentDidMount(){
    await fetch('/profile', {
      method: 'GET',
    }).then((data) => {
      return data.json()
    }).then((res)=>{
      this.setState({id:res.id,username: res.username})
  
    })
  }

  toggle = () => {
    this.setState(prevState => ({
      opened: !prevState.opened
    }))
  }
  render(){
   return (
    <>
      <label class=" account-wrapper mx-3 rounded p-0 position-relative d-flex">
        <button onFocus={this.toggle}  class="btn profile-btn text-light"><i class="fas fa-user"></i><small className="mx-3 text-muted account-text">{this.state.username}</small> </button>
            {this.state.opened ? (<span class="user-modal">
            <div class="card text-light account-card">
  <ul class="list-group list-group-flush">
  <li class="list-group-item"><Link to="/" >Home</Link></li>
    <li class="list-group-item"><Link to={"/profile/"+this.state.id} >Profile</Link></li>
    <li class="list-group-item"><Link to="/projects" >Project Library</Link></li>
    <li class="list-group-item"><Link to="/code" >Code</Link></li>
    <li class="list-group-item"><button onClick={this.logout} className="btn w-100 text-danger">
        Logout
      </button></li>
  </ul>
</div>
            </span>) : (null)}
</label>

    </>
  );
} 
  }
  

export default Account;
