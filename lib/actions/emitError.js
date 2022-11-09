/* eslint no-param-reassign: "off" */

/**
 * Copyright 2019 Wice GmbH
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */

const { transform } = require('@openintegrationhub/ferryman');

/**
 * This method will be called from OIH platform upon receiving data
 *
 * @param {Object} msg - incoming message object that contains keys `data` and `metadata`
 * @param {Object} cfg - configuration that contains login information and configuration field values
 */
async function processAction(msg, cfg) {
  console.log('processAction called with params:', msg, cfg);

  console.log('emmiting error');
  this.emit('error', new Error('hardcoded error'));
}

module.exports = {
  process: processAction,
};
