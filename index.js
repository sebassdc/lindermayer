"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
/// range(5) -> [0, 1, 2, 3, 4]
var range = function (n) { return Array.from(Array(n), function (_, i) { return i; }); };
exports.genSystem = function (_a) {
    var _b = _a.inicio, inicio = _b === void 0 ? '' : _b, _c = _a.variables, variables = _c === void 0 ? [] : _c, _d = _a.constantes, constantes = _d === void 0 ? [] : _d, _e = _a.reglas, reglas = _e === void 0 ? {} : _e;
    return function (n) {
        return range(n + 1)
            .reduce(function (acc, actu, index, arr) { return acc.concat([
            acc[index]
                .split('')
                .map(function (e) { return (constantes.indexOf(e) === -1) ? reglas[e] : e; })
                .join('')
        ]); }, [inicio])[n];
    };
};
var genDrawer = function (_a) {
    var turtle = _a.turtle, angle = _a.angle, length = _a.length, descriptor = _a.descriptor;
    return Object
        .keys(descriptor)
        .map(function (e) { return function () {
        return turtle[descriptor[e]](descriptor[e] == 'rt' || descriptor[e] == 'lt'
            ? angle
            : length);
    }; })
        .reduce(function (acc, actu, index, arr) {
        var _a;
        return (__assign({}, acc, (_a = {}, _a[Object.keys(descriptor)[index]] = actu, _a)));
    }, {});
};
var drawSystem = function (_a) {
    var sys = _a.sys, n = _a.n, turtle = _a.turtle, angle = _a.angle, length = _a.length, descriptor = _a.descriptor;
    var drawer = genDrawer({ turtle: turtle, angle: angle, length: length, descriptor: descriptor });
    sys(n)
        .split('')
        .forEach(function (e) {
        return (drawer[e] || (function () { }))();
    });
};
exports.genSystemDrawer = function (_a) {
    var descriptor = _a.descriptor, sys = _a.sys, angle = _a.angle;
    return function (turtle) { return function (iterStuff) {
        drawSystem(__assign({ sys: sys,
            turtle: turtle,
            descriptor: descriptor,
            angle: angle }, iterStuff));
    }; };
};
