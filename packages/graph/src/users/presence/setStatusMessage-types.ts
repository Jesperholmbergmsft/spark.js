// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Set a presence status message for a user. An optional expiration date and time can be supplied.
   */
  'POST /users/{user-id}/presence/setStatusMessage': Operation<
    '/users/{user-id}/presence/setStatusMessage',
    'post'
  >;
}
