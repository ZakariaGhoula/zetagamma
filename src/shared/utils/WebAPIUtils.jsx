import AppDispatcher from '../dispatchers/AppDispatcher';

import request  from 'superagent';


export function loginApi(email,password){
    var json ='';
    request.post('http://localhost:3002/oauth/token')
        .send({ email: email, password: password, grant_type: 'password' })
        .set('Accept', 'application/json')
        .end(function(error, res){
            if (res) {

                if (res.error) {
                    var errorMsgs = _getErrors(res);
                    receiveLogin(null, errorMsgs);
                } else {
                    json = JSON.parse(res.text);
                    receiveLogin(json, null);
                }

            }
        });


}



function _getErrors(res) {
    var errorMsgs = ["Something went wrong, please try again"];

    var json = JSON.parse(res.text)
    if (json) {
        if (json['errors']) {
            errorMsgs = json['errors'];
        } else if (json['error']) {
            errorMsgs = [json['error']];
        }
    }
    return errorMsgs;
}




