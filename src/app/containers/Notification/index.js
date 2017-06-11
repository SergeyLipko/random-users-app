import React from 'react';
import { connect } from 'react-redux';
import { closeNotification } from '../../redux/actions/notification';
import './style.css';

class WithNotification extends React.Component {
  _checkNotification = notification => {
    let isNotificationValid = true;

    Object.keys(notification).forEach(i => {
      const isKeyValid = i => i !== null && i !== undefined;

      if (!isKeyValid(notification[i])) {
        isNotificationValid = false;
      }
    });

    return isNotificationValid && notification;
  };

  render() {
    const { notification } = this.props;
    const validNotification = this._checkNotification(notification);

    return (
      <div>
        <div className="child-component-wrapper">
          { this.props.children }
        </div>

        <div
          className={
            validNotification
            && validNotification.notificationIsShown
              ? "banner-is-visible"
              : "banner-is-hide"
          }
        >
            <button
              className="notification-close-button"
              onClick={this.props.closeNotification}
            >
              X
            </button>

            <span className="notification-title">
              Error
            </span>
            <p className="notification-message">
              {
                validNotification &&
                validNotification.notificationMessage.message
              }
            </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notification: state.notification
});

const mapDispatchToProps = dispatch => ({
    closeNotification: () => dispatch(closeNotification())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithNotification);
