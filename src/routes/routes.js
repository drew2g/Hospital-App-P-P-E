import express from 'express';
import establishment from './establishment';

export default express.Router().use('/establishment', establishment);
