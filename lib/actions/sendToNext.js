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
const { upsertObject, getToken } = require('../utils/helpers');

/**
 * This method will be called from OIH platform upon receiving data
 *
 * @param {Object} msg - incoming message object that contains keys `data` and `metadata`
 * @param {Object} cfg - configuration that contains login information and configuration field values
 */
async function sendToNext(msg, cfg) {
  console.log('sendToNext called with params:', msg, cfg);

  try {

    console.log('adding data to received data')
    msg.data[(new Date()).getTime()] = 'created in sendToNext'
    
    console.log('transforming msg.data', msg.data, cfg);
    const transformedObject = transform(msg.data, cfg);


      const newElement = {
        ...transformedObject,
        metadata: msg.metadata,
      };

    // Once finished, emit the new metadata to allow the OIH to synchronise ids
    console.log('emitting data new Element', newElement);
    this.emit('data', newElement);

    console.log('Finished execution');
    this.emit('end');
  } catch (e) {
    console.log(`ERROR: ${e}`);
    this.emit('error', e);
  }
}

module.exports = {
  process: sendToNext,
};
