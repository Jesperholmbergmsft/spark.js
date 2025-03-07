// DO NOT EDIT THIS FILE
import type { Operation } from './../../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  /**
   * A collection of all the apps in the chat. Nullable.
   */
  'GET /users/{user-id}/chats/{chat-id}/installedApps': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps',
    'get'
  >;
  /**
   * A collection of all the apps in the chat. Nullable.
   */
  'GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  /**
   */
  'PATCH /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  /**
   */
  'POST /users/{user-id}/chats/{chat-id}/installedApps': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps',
    'post'
  >;
}
