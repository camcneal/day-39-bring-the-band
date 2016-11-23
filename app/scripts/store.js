import Session from './models/session';
import Users from './collections/users';
import Bands from './collections/bands';
import Votes from './collections/VotedFor';

export default {
  users: new Users(),
  session: new Session(),
  bands: new Bands(),
  votes: new Votes()
};
