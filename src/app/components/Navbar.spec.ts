/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {navbar} from './Navbar';

describe('navbar component', () => {
  beforeEach(() => {
    angular
      .module('navbar', ['app/components/Navbar.html'])
      .component('navbar', navbar);
    angular.mock.module('navbar');
  });

  it('should...', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<navbar></navbar>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
