// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}',
    'delete'
  >;
  /**
   * The collection of open extensions defined for the event. Nullable.
   */
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions',
    'get'
  >;
  /**
   * The collection of open extensions defined for the event. Nullable.
   */
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}',
    'get'
  >;
  /**
   */
  'PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}',
    'patch'
  >;
  /**
   */
  'POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions',
    'post'
  >;
}
