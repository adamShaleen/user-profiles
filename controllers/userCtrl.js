
var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
    login : function(request, response, next) {
        var userFound = false;
        for (var i = 0; i < users.length; i++) {
            if (users[i].name === request.body.name && users[i].password === request.body.password) {
                request.session.currentUser = users[i];
                userFound = true;
            }
        }
        if (userFound) {
            response.send({userFound: true});
        }
        else {
            response.send({userFound: false});
        }
    }
};
