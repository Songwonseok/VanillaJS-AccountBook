const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');
const bcrypt = require('bcrypt');

const UserRepoitory = require('../repositories/user.repository');
const userRepo = new UserRepoitory();
const jwtConfig = require("../config/jwt");

const passportConfig = { usernameField: 'userid', passwordField: 'password' };

const passportVerify = async (userid, password, done) => {
    try {
        const user = await userRepo.selectByUserid(userid);
        if (!user) {
            done(null, false, { message: '존재하지 않는 사용자 입니다.' });
            return;
        }

        const compareResult = await bcrypt.compare(password, user.password);

        if (compareResult) {
            done(null, user);
            return;
        }
        done(null, false, { reason: '올바르지 않은 비밀번호 입니다.' });
    } catch (error) {
        console.error(error);
        done(error);
    }
};

const JWTConfig = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: jwtConfig.secret,
};

const JWTVerify = async (jwtPayload, done) => {
    try {
        const user = await userRepo.selectOne(jwtPayload.id);
        if (user) {
            done(null, user);
            return;
        }
        done(null, false, { reason: '올바르지 않은 인증정보 입니다.' });
    } catch (error) {
        console.error(error);
        done(error);
    }
};

module.exports = () => {
    passport.use('local', new LocalStrategy(passportConfig, passportVerify));
    passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));
};

// 출처 :  https://chanyeong.com/blog/post/28

