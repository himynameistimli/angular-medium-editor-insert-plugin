(function(){
    'use strict';

    angular.module('angular-medium-editor-insert-plugin', [])
        .directive('mediumInsert', mediumInsert);

    function mediumInsert() {
        var directive = {};
        directive.restrict = 'EA';
        directive.scope = {insertAddons: '='}
        directive.require = '^ngModel';
        directive.link = linkFunction;
        return directive;

        function linkFunction(scope, elem, attr, ngModel) {
            $('[medium-editor]').mediumInsert({
                editor: ngModel.editor,
                addons: scope.insertAddons,
            })
        }
    }
})();

