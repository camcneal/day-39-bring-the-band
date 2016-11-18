import Session from './models/session';
import Users from './collections/users';

export default {
  users: new Users(),
  session: new Session()
};
