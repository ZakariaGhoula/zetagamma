// config/auth.jsx

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1570663819919771', // your App ID
        'clientSecret'  : 'cf6f501a2d9e7f340cbf65db5eff0062', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
        'profileFields': ['id', 'email', 'gender', 'link', 'locale','picture', 'name', 'timezone', 'updated_time', 'verified']
    }
};