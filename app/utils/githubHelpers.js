import axios from 'axios';

const id = "YOUR_CLIENT_ID",
sec      = "YOUR_SECRET_ID",
param    = `?client_id=${id}&client_secret=${sec}`;


function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param);
}

let helpers = {
    getPlayersInfo (players) {
        return axios.all( players.map( getUserInfo ) )
            .then(function(info) {
                return info.map(function (user) {
                    return user.data;
                });
            }).catch(function (err) {
                console.warn('Error in getPlayersInfo: ', err);
            });
    }
};

export default helpers;