import express from 'express';
import establishment from './establishment';
import equipment from './equipment';

export default express
  .Router()
  .use('/establishment', establishment)
  .use('/equipment', equipment);
