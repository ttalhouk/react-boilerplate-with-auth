import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';



export class LoginPage extends React.Component {
  render () {
    return(
      <div className='box-layout'>
        <div className='box-layout__box'>
          <h1 className='box-layout__title'>Boilerplate Application</h1>
          <p>Add subtitle</p>
          <button
            className='button'
            onClick={this.props.startLogin}>
            Login with Google
          </button>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin())
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
