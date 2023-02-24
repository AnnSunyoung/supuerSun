const cookieSession = require('cookie-session');
const express = require('express');

const app = express();

app.use(cookieSession({
    name: 'session',
    keys: ['sha512'],
    maxAge: 24 * 60 * 60 * 1000 // 24시간 유지
}))