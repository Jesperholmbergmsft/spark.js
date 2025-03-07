// DO NOT EDIT THIS FILE
import type { Operation } from './../common.ts';

export interface Endpoints {
  /**
   * Send an activity feed notification in the scope of a team. For more information about sending notifications and the requirements for doing so, see
sending Teams activity notifications.
   */
  'POST /teams/{team-id}/sendActivityNotification': Operation<
    '/teams/{team-id}/sendActivityNotification',
    'post'
  >;
}
