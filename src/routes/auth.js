import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import Receiver from '../models/Receiver';

passport.use(
  new LocalStrategy((username, password, done) => {
    Receiver.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  })
);
