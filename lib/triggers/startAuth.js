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
const fetch = require('node-fetch');
const { transform } = require('@openintegrationhub/ferryman');

/**
 * This method will be called from OIH platform providing following data
 *
 * @param msg - incoming message object that contains keys `data` and `metadata`
 * @param cfg - configuration that is account information and configuration field values
 * @param snapshot - saves the current state of integration step for the future reference
 */
async function startAuth(msg, cfg) {
  try {
    console.log('startAuth called with params:', msg, cfg);

    const body = {
      scope: msg.data.scope,
      secretName: msg.data.secretName,
      successUrl: msg.data.successUrl
    };
  
    const response = await fetch("http://secret-service.oih-dev-ns.svc.cluster.local:3000/api/v1/auth-clients/636bb8734754577fcef45ef3/start-flow", {
      "headers": {
        "accept": "application/json",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "authorization": msg.headers.authorization,
        "content-type": "application/json",
      },
      "body": JSON.stringify(body),
      "method": "POST"
    });
  
    const { data } = await response.json()

    const formatElement = { data, metadata: {} };


    const transformedElement = transform(formatElement, cfg);

    console.log('emitting data', transformedElement);
    
    // Emit the object to the OIH. This data will 
    // be passed as pàrameter to the next step in the flow
    this.emit('data', transformedElement);

    console.log('Finished execution');
    this.emit('end');
  } catch (e) {
    console.log(`ERROR: ${e}`);
    this.emit('error', e);
  }
}

module.exports = {
  process: startAuth,
};
