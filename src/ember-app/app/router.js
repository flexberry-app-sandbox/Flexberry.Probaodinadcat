import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probaodinadcat-гость-l');
  this.route('i-i-s-probaodinadcat-гость-e',
  { path: 'i-i-s-probaodinadcat-гость-e/:id' });
  this.route('i-i-s-probaodinadcat-гость-e.new',
  { path: 'i-i-s-probaodinadcat-гость-e/new' });
  this.route('i-i-s-probaodinadcat-должности-l');
  this.route('i-i-s-probaodinadcat-должности-e',
  { path: 'i-i-s-probaodinadcat-должности-e/:id' });
  this.route('i-i-s-probaodinadcat-должности-e.new',
  { path: 'i-i-s-probaodinadcat-должности-e/new' });
  this.route('i-i-s-probaodinadcat-карта-l');
  this.route('i-i-s-probaodinadcat-карта-e',
  { path: 'i-i-s-probaodinadcat-карта-e/:id' });
  this.route('i-i-s-probaodinadcat-карта-e.new',
  { path: 'i-i-s-probaodinadcat-карта-e/new' });
  this.route('i-i-s-probaodinadcat-комната-l');
  this.route('i-i-s-probaodinadcat-комната-e',
  { path: 'i-i-s-probaodinadcat-комната-e/:id' });
  this.route('i-i-s-probaodinadcat-комната-e.new',
  { path: 'i-i-s-probaodinadcat-комната-e/new' });
  this.route('i-i-s-probaodinadcat-регистрац-входа-l');
  this.route('i-i-s-probaodinadcat-регистрац-входа-e',
  { path: 'i-i-s-probaodinadcat-регистрац-входа-e/:id' });
  this.route('i-i-s-probaodinadcat-регистрац-входа-e.new',
  { path: 'i-i-s-probaodinadcat-регистрац-входа-e/new' });
  this.route('i-i-s-probaodinadcat-сотрудник-l');
  this.route('i-i-s-probaodinadcat-сотрудник-e',
  { path: 'i-i-s-probaodinadcat-сотрудник-e/:id' });
  this.route('i-i-s-probaodinadcat-сотрудник-e.new',
  { path: 'i-i-s-probaodinadcat-сотрудник-e/new' });
});

export default Router;
