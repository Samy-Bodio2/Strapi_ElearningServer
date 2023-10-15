'use strict';

/**
 * lecon service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lecon.lecon');
