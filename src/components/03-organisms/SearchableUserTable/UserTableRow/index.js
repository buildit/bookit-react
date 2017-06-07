import React, { PropTypes } from 'react';
import styles from './styles.scss';

const UserTableRow = ({ user, onRemoveClick }) => (
  <tr className={styles.userTableRow}>
    <td>{user.name}</td>
    <td>{user.location}</td>
    <td>{user.email}</td>
    <td onClick={() => onRemoveClick(user.email)}>Remove</td>
  </tr>
);

export default UserTableRow;

UserTableRow.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
  }),
  onRemoveClick: PropTypes.func.isRequired,
};
