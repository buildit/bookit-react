import moment from 'moment';
import { REMOVE_USER } from '../actions/actionTypes';

const fakeUsers = [
  { name: 'Bill Lome', location: 'New York', email: 'bill@designit.com', team: 'DESIGNIT', dateAdded: moment().subtract(1, 'month') },
  { name: 'Eunice Chung', location: 'New York', email: 'eunice@designit.com', team: 'DESIGNIT', dateAdded: moment().subtract(3, 'day') },
  { name: 'z', location: 'New York', email: 'zac@buildit.com', team: 'BUILDIT', dateAdded: moment().subtract(1, 'day') },
];

const users = (state = [], action) => {
  switch (action.type) {
    case REMOVE_USER: {
      const emailOfRemovedUser = action.payload;
      return state.filter(_user => _user.email !== emailOfRemovedUser);
    }
    default: {
      return fakeUsers;
    }
  }
};

export default users;