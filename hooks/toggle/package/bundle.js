'use strict';

var react = require('react');

function useToggle() {
    var _a = react.useState(false), toggled = _a[0], setToggled = _a[1];
    function toggle() {
        setToggled(function (prevState) { return !prevState; });
    }
    return [toggled, toggle];
}

module.exports = useToggle;
