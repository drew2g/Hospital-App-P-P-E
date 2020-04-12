import express from 'express';
import getList from './getList';

export default express.Router().get('/', getList);
