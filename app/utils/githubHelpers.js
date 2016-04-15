import axios from 'axios';

const id = "YOUR_CLIENT_ID",
sec      = "YOUR_SECRET_ID",
param    = `?client_id=${id}&client_secret=${sec}`;


function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param);
}
function getRepos ( username ) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}
function getTotalStars ( repos ) {
    return repos.data.reduce(( prev, current ) => prev + current.stargazers_count);
}
function getPlayersData ( players ) {
    return getRepos( players.login )
        .then(getTotalStars)
        .then((totalStars) => {
            return {
                followers: players.followers,
                totalStars: totalStars
            };
        });
}
function calculateScores ( players ) {

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
    },
    battle ( players ) {

    }
};

export default helpers;