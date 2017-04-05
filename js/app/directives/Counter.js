function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ ctrl.count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			this.count = 0;
		},
    require: 'counter',
    controllerAs: 'ctrl',
    link: function(scope, element, attr, ctrl) {
      element.on("click", function() {
        ctrl.count++;
        scope.$apply();
      });
      counter.$on("$destroy", function() {
        element.off();
      });
    }
	};
}

angular
	.module('app')
	.directive('counter', Counter);