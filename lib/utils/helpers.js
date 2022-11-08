
/**
 * @desc Upsert function which creates or updates
 * an object, depending on whether it already exists in the target system
 *
 * @access  Private
 * @param {Object} object - The data object that will be pushed to the API
 * @param {String} token - An authorization/access token
 * @param {String} recordUid
 * @return {Object} - the new created ot update object in Snazzy Contacts
 */
async function upsertObject(object, token, recordUid) {
  console.log('upsert called with params', object, token, recordUid);

  return { success: true, responseId: recordUid };
}

/**
 * This method fetches objects from Snazzy Contacts
 * depending on the value of count variable and type
 *
 * @param token - Snazzy Contacts token required for authentication
 * @param snapshot - current state of snapshot
 * @return {Object} - Array of person objects containing data and meta
 */
async function getObjects(token, snapshot) {
  console.log('getObjects called with params', token, snapshot);
  return [{ a: 1 }, { a: 2 }, { a: 4, b: 3 }];
}

/**
 * This method will authenticate the user in Snazzy Contacts
 * and return a Bearer token if it is successful
 *
 * @param {Object} config - incoming message object that contains username and password
 * @return {String} - Bearer token
 */
async function getToken(config) {
  console.log('getToken called with params', config);
  return 'fake_token';
}


module.exports = { getObjects, upsertObject, getToken };
