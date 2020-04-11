import express from 'express';
import create from './create';
import destroy from './destroy';
import get from './get';
import getList from './getList';

export default express
  .Router()
  .post('/', create)
  .get('/', getList)
  .get('/:id', get)
  .delete('/:id', destroy);
