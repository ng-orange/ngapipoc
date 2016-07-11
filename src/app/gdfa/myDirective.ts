function myDirective() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    link: (scope, element, attrs) => {},
    controller: () => {},
    controllerAs: 'ctrl'
  };
}

export default myDirective;

