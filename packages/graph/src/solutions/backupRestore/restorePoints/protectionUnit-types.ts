// DO NOT EDIT THIS FILE
import type { Operation } from './../../../common.ts';

export interface Endpoints {
  /**
   * The site, drive, or mailbox units that are protected under a protection policy.
   */
  'GET /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit': Operation<
    '/solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit',
    'get'
  >;
}
