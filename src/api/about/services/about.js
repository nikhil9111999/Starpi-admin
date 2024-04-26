'use strict';

/**
 * about service file
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about.about');
