import express from 'express';

import {SignupUser, LoginUser} from '../controller/user-controller.js';

const Router = express.Router();

Router.post('/signup', SignupUser);
Router.post('/login', LoginUser);

export default Router;