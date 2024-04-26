'use strict';

/**
 * about router file
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::about.about');
