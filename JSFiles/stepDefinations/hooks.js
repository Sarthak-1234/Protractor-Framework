"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
(0, cucumber_1.Before)({ tags: "@demo" }, function () {
    console.log("I am Before of demo tag");
});
