// DO NOT EDIT THIS FILE
import type { Operation } from './../common.ts';

export interface Endpoints {
  /**
   * Get the properties and relationships of a teamwork object, such as the region of the organization and whether Microsoft Teams is enabled.
   */
  'GET /teamwork': Operation<'/teamwork', 'get'>;
  /**
   */
  'PATCH /teamwork': Operation<'/teamwork', 'patch'>;
}
