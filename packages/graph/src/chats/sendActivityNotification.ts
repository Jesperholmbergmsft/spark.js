import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './sendActivityNotification-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      query[param.name] = data[param.name];
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /chats/{chat-id}/sendActivityNotification
 * Provides operations to call the sendActivityNotification method.
 */
export class SendActivityNotificationClient {
  protected baseUrl = '/chats/{chat-id}/sendActivityNotification';
  protected http: http.Client;

  constructor(
    protected readonly chatId: string,
    options?: http.Client | http.ClientOptions
  ) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `POST /chats/{chat-id}/sendActivityNotification`
   *
   * Send an activity feed notification in scope of a chat. For more information about sending notifications and the requirements for doing so, see sending Teams activity notifications.
   */
  async create(
    body: Endpoints['POST /chats/{chat-id}/sendActivityNotification']['body'],
    params?: Endpoints['POST /chats/{chat-id}/sendActivityNotification']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/sendActivityNotification',
      [{ name: 'chat-id', in: 'path' }],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /chats/{chat-id}/sendActivityNotification']['response']
      );
  }
}
