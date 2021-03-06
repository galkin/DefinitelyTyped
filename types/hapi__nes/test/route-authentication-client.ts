// from https://github.com/hapijs/nes#route-authentication

import Nes = require('@hapi/nes');

var client = new Nes.Client('ws://localhost');
client.connect({ auth: { headers: { authorization: 'Basic am9objpzZWNyZXQ=' } } }).then(() => {

    client.request('hello');
});

// Added in addition to nes doc example code

import NesClient = require('@hapi/nes/lib/client');

var client = new NesClient.Client('ws://localhost');
client.connect({ auth: { headers: { authorization: 'Basic am9objpzZWNyZXQ=' } } }).then(() => {

    return client.reauthenticate({ headers: { authorization: 'Bearer am9objpzZWNyZXQ=' } });
}).then(() => {

    return client.request('hello');
});
