import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import MDSpinner from "react-md-spinner";
import UserItem from './UserItem';
import UserDetails from './UserDetails';
import { loadUsers } from '../../redux/actions/users';
import './style.css';

const renderUserItem = (data, key) =>
  <NavLink to={`/users/${data.login.md5}`} key={key}>
    <UserItem data={data}/>
  </NavLink>;

class Users extends React.Component {
  state = {
    usersPageState: 1,
    modalIsOpen: true
  };

  loadMoreUsers = () => {
    this.setState({
      usersPageState: this.state.usersPageState + 1
    }, () => {
      this.props.loadUsersList(this.state.usersPageState);
    });
  };

  componentDidMount() {
    this.props.loadUsersList(this.state.usersPageState);
  };

  render() {
    const { users, isLoading, match } = this.props;

    return (
      <div className="page-users">
        <Route path={`${match.url}/:userId`} render={({ match }) => (
          <UserDetails
            match={match}
            userData={users.find(i => i.login.md5 === match.params.userId)}
          />
        )}/>

        <Route exact path={match.url} render={() => (
          <div>
            <List className="users-list">
              { users && users.map(renderUserItem) }
            </List>
            <div className="button-wrapper">
              <button className="load-more-button" onClick={this.loadMoreUsers}>
                { isLoading ? <MDSpinner/> : 'Load more' }
              </button>
            </div>
          </div>
        )}/>

      </div>
    )
  };
}

const mapStateToProps = state => ({
  users: state.users.usersList,
  isLoading: state.users.isLoading,
});

const mapDispatchToProps = dispatch => ({
  loadUsersList: page => dispatch(loadUsers(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);

