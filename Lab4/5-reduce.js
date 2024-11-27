"use strict";

const sum = (...args) => args.reduce((s, current) => s + current);

module.exports = { sum };
