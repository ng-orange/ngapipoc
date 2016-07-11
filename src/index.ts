/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
// import 'todomvc-app-css/index.css';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App';
import {StoreService} from './app/store/store';
import {Stores} from './app/store/Stores';
import {Header} from './app/components/Header';
import {Navbar} from './app/components/Navbar';
import {MainSection} from './app/components/MainSection';
import {TodoTextInput} from './app/components/TodoTextInput';
import {TodoItem} from './app/components/TodoItem';
import {Footer} from './app/components/Footer';
import 'angular-ui-router';
import 'angular-resource';
import routesConfig from './routes';
import 'boosted/dist/css/bootstrap-orange2015.css';
import 'boosted/dist/css/boosted2015.css';

import './index.less';

angular
  .module('app', ['ui.router', 'ngResource'])
  .config(routesConfig)
  .service('todoService', TodoService)
  .service('storeService', StoreService)
  .component('app', App)
  .component('stores', Stores)
  .component('navbarComponent', Navbar)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem);
