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
    // console.log('repos.data.reduce(( prev, current ) => prev + current.stargazers_count): ', repos.data.reduce(( prev, current ) => prev + current.stargazers_count));
    return repos.data.reduce(( prev, current ) => prev + current.stargazers_count, 0);
}
function getPlayersData ( player ) {
    return getRepos( player.login )
        .then(getTotalStars)
        .then((totalStars) => {
            // console.log('totalStars', totalStars);
            return {
                followers: player.followers,
                totalStars: totalStars
            };
        });
}
function calculateScores ( players ) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ];
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
        let playerOneData = getPlayersData(players[0]),
            playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch((err) => console.log('Error in getPlayersInfo: ', err));
    }
};

export default helpers;