
import passportlocal from 'passport-local';
import passportFacebook from 'passport-facebook';
import configAuth from './auth';
import { REST_PATH_SERVER,PATH_FB_CONNECT,RestServerPathConnect,RestServerPathToken } from '../../config/config_path';
import bodyParser from 'body-parser';
import request from 'request';

const LocalStrategy = passportlocal.Strategy;
const FacebookStrategy = passportFacebook.Strategy;

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // code for login (use('local-login', new LocalStategy))
    // code for signup (use('local-signup', new LocalStategy))

    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({

        // pull in our app id and secret from our auth.js file
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL,
        profileFields   : configAuth.facebookAuth.profileFields

    },
        // facebook will send back the token and profile
        function(accessToken, refreshToken, profile, done) {
            process.nextTick(function() {
                //Assuming user exists
                var data_send = {
                    email:  profile._json.email,
                    last_name: profile._json.last_name,
                    first_name: profile._json.first_name,
                    gender: profile.gender,
                    provider: profile.provider,
                    uid: profile.id
                }

                request({
                    url: REST_PATH_SERVER+PATH_FB_CONNECT, //URL to hit
                    qs: {from: 'Express Universal CrossyJob', time: +new Date()}, //Query string data
                    method: 'POST',
                    //Lets post the following key/values as form
                    json: data_send
                }, function(error, response, body){
                    if(error) {
                        console.log(error);
                        return done(error);
                    } else {

                        console.log(body);
                        if(body.data.user.access_token!="")
                        {
                            var returnUser = {
                                email: body.data.user.email,
                                createdAt: '',
                                id: body.data.user.user_id,
                                access_token:body.data.user.access_token
                            }
                            return done(null, returnUser, {
                                message: body.data.status
                            });
                        }
                        else{
                            return done(null, false, { message: 'Non Authorized.' });
                        }

                    }
                });

            });
        }));



};