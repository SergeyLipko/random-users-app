import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Avatar from 'material-ui/Avatar';
import { pinkA200 } from 'material-ui/styles/colors';

const UserItem = ({ data }) => {
  return (
    <ListItem
      primaryText={data.name.first}
      leftIcon={<ActionGrade color={pinkA200} />}
      rightAvatar={<Avatar src={data.picture.thumbnail} />}
    />
  )
};

UserItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserItem;