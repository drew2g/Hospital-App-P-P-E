// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import app from '../app';

export default supertest(app);

export const randomEstablishment = (data) => ({
  id: '45a0327c-2719-41b5-bb55-fa8ce7022036',
  name: 'Northflight EMS Base',
  currentNeed: '750 masks',
  currentRelief: 20,
  totalRelief: 25,
  isActive: true,
  lat: 52.96857,
  lng: 8.01663,
  city: 'Traverse city',
  state: 'Michigan',
  country: 'USA',
  ...data,
});

export const randomReceiver = (data) => ({
  name: 'Marie Jeanne Moon',
  password: 'aStRoNgPaS6WoRd3k042cnziQ4321',
  establishment: 'Northflight EMS Base',
  establishmentId: 25,
  isActive: true,
  ...data,
});

const northflight = randomEstablishment();

const dorotheaCenter = randomEstablishment({
  id: 'a05e5585-4138-404d-bbaa-ab012bb1d68b',
  name: 'Dorothea Dix Psychiatric Center',
  lat: 41.36238,
  lng: -74.430417,
  city: 'Bangor',
  state: 'Maine',
  country: 'USA',
});

const saintJoseph = randomEstablishment({
  id: '47432d7d-05c0-4c66-82ce-b64eac700056',
  name: 'Hôpital Paris Saint-Joseph',
  lat: 48.85254,
  lng: 2.3736,
  city: 'Paris',
  state: 'IDF',
  country: 'FRA',
});

export const hospitals = {
  northflight,
  dorotheaCenter,
  saintJoseph,
};
