/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {stores} from './Stores';

describe('stores component', () => {
  beforeEach(() => {
    angular
      .module('stores', ['app/store/Stores.html'])
      .component('stores', stores);
    angular.mock.module('stores');
  });

  it('should...', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<stores></stores>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
