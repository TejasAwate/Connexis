import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userFetchData, userPostData } from '../actions/actions';
import { withRouter } from 'react-router';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.saveUser = this.saveUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchData(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.userID}`
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userID !== prevProps.userID) {
      this.props.fetchData(
        `https://jsonplaceholder.typicode.com/users/${this.props.match.params.userID}`
      );
    }
  }

  saveUser() {
    this.props.postData(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.userID}`,
      {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
      }
    );
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name: </label>
            <input type='text' id='name' defaultValue={this.props.user.name} />
          </div>
          <div>
            <label>Email: </label>
            <input
              type='email'
              id='email'
              defaultValue={this.props.user.email}
            />
          </div>
          <br />
          <input type='button' value='Save' onClick={this.saveUser} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(userFetchData(url)),
    postData: (url, payload) => dispatch(userPostData(url, payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserInfo));
