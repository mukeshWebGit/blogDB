import express from 'express';

import {SignupUser} from '../controller/user-controller.js';

const Router = express.Router();

Router.post('/signup', SignupUser);
//Router.post('/login', LoginUser);

export default Router;