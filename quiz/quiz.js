let fernet = require('fernet')

let secret = new fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=')
// Oh no! The code is going over the edge! What are you going to do?
let message = 'gAAAAABclfNY0cetoKL7XuLGgVnitt0rREeyq6tOOezZ2qmr86pYtMPRKb8A8p4kLAMmb0aQ9LH3Fpd4C9l7g4gVmQZ61qFs-jwhhxqxpR6sLxkIBjcsj7p5RZuI8MQlhro1DcT4ttm9ExRbTNxEY7zYge8tcmpEVeyPPva1yfK8PM2sk9AOqwEVvleqbiH1IqWUzjXdIBr9'
//giving options to the token object.
let token = new fernet.Token({secret: secret, token: message, ttl:0})
token.decode();
console.log(token.decode());

//https://engineering-application.britecore.com/e/t23e119s2t/testMidLevelFrontendDeveloper
