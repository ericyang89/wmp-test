"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var commonWx_1 = require("./commonWx");
var constant_1 = require("../config/constant");
var commonResquest = function (options) {
    var newOption = __assign(__assign({}, options), { url: /^http/.test(options.url) ? options.url : constant_1.baseUri + options.url });
    return commonWx_1.default.request(newOption);
};
exports.default = commonResquest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1vblJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUNsQywrQ0FBNkM7QUFFN0MsSUFBTSxjQUFjLEdBRUEsVUFBQSxPQUFPO0lBQ3pCLElBQU0sU0FBUyx5QkFDVixPQUFPLEtBQ1YsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQ3JFLENBQUM7SUFFRixPQUFPLGtCQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQztBQUVGLGtCQUFlLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21tb25XeCBmcm9tIFwiLi9jb21tb25XeFwiO1xuaW1wb3J0IHsgYmFzZVVyaSB9IGZyb20gXCIuLi9jb25maWcvY29uc3RhbnRcIjtcblxuY29uc3QgY29tbW9uUmVzcXVlc3Q6IChcbiAgb3B0aW9uczogV2VjaGF0TWluaXByb2dyYW0uUmVxdWVzdE9wdGlvblxuKSA9PiBQcm9taXNlPGFueT4gPSBvcHRpb25zID0+IHtcbiAgY29uc3QgbmV3T3B0aW9uID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgdXJsOiAvXmh0dHAvLnRlc3Qob3B0aW9ucy51cmwpID8gb3B0aW9ucy51cmwgOiBiYXNlVXJpICsgb3B0aW9ucy51cmxcbiAgfTtcblxuICByZXR1cm4gY29tbW9uV3gucmVxdWVzdChuZXdPcHRpb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbW9uUmVzcXVlc3Q7XG4iXX0=