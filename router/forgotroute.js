import express from 'express';
import { forgotPassword, resetPassword } from '../controllers/forgotcontrol.js';
const route=express.Router();

route.post('/forgotpassword', forgotPassword);
route.post('/reset/:token', resetPassword);

export const resetroute = route;