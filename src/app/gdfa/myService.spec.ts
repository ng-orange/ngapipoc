/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import MyService from './myService';

describe('MyService service', () => {
  beforeEach(() => {
    angular
      .module('MyService', [])
      .service('MyService', MyService);
    angular.mock.module('MyService');
  });

  it('should', angular.mock.inject((MyService: MyService) => {
    expect(MyService.getData()).toEqual(3);
  }));
});
