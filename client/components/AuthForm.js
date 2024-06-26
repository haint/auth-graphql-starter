import React, {Component} from "react";

class AuthForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit(event) {
    console.log(event);
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s4">
          <div className="input-field">
            <input
              placeholder="Email"
              value={this.state.email} 
              onChange={e => this.setState({email: e.target.value})}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              value={this.state.password}
              type="password"
              onChange={e => this.setState({password: e.target.value})}
            />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    )
  }
}

export default AuthForm