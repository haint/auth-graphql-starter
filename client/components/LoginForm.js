import React, { Component } from 'react'
import AuthForm from './AuthForm'
import mutation from '../mutations/Login'
import query from '../queries/CurrentUser'
import { graphql } from 'react-apollo'
import { hashHistory } from 'react-router'

class LoginForm extends Component {

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).then(() => hashHistory.push('/'))
  }

  render() {
    return (
      <div className='container'>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)}/>
      </div>
    )
  }
}

export default graphql(mutation)(LoginForm)