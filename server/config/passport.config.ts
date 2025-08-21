import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { pool } from "./db.config";
import { JWT_SECRET } from "./jwt.config";
import bcrypt from "bcryptjs";
import passport from "passport";

// Local Strategy (email + password)
passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const result = await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [email],
        );
        const user = result.rows[0];
        if (!user) return done(null, false, { message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return done(null, false, { message: "Invalid password" });

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

// JWT Strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    async (payload, done) => {
      try {
        const result = await pool.query(
          "SELECT id, email, role FROM users WHERE id = $1",
          [payload.userId],
        );
        const user = result.rows[0];
        if (!user) return done(null, false);
        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    },
  ),
);

export default passport;
