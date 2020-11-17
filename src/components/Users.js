import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersFetchData } from '../actions/actions';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
  }
  componentDidMount() {
    this.props.fetchData('https://jsonplaceholder.typicode.com/users');
  }

  handleUserSelect = (e) => {
    this.setState({ id: e.target.selectedIndex + 1 });
  };

  render() {
    if (this.props.hasError) {
      return <p>Sorry! There was an error loading the users</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <React.Fragment>
        <h1>Select User</h1>
        <select onChange={this.handleUserSelect}>
          {this.props.users.length &&
            this.props.users.map((user, index) => {
              return <option key={index}>{user.name}</option>;
            })}
        </select>
        <br />
        <br />
        {this.state.id !== 0 && (
          // <Redirect to={{ pathname: '/user', state: { id: '123' } }} />
          <Redirect to={{ pathname: `/user/${this.state.id}` }} />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    hasError: state.usersHaveError,
    isLoading: state.usersAreLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(usersFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Users));
