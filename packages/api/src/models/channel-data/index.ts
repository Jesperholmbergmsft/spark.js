import { MeetingInfo } from '../meeting';

import { ChannelInfo } from './channel-info';
import { NotificationInfo } from './notification-info';
import { ChannelDataSettings } from './settings';
import { TeamInfo } from './team-info';
import { TenantInfo } from './tenant-info';

/**
 *
 * An interface representing ChannelData.
 * Channel data specific to messages received in Microsoft Teams
 *
 */
export type ChannelData = {
  /**
   * @member {ChannelInfo} [channel] Information about the channel in which the
   * message was sent.
   */
  channel?: ChannelInfo;

  /**
   * @member {string} [eventType] Type of event.
   */
  eventType?: unknown;

  /**
   * @member {TeamInfo} [team] Information about the team in which the message
   * was sent.
   */
  team?: TeamInfo;

  /**
   * @member {NotificationInfo} [notification] Notification settings for the
   * message.
   */
  notification?: NotificationInfo;

  /**
   * @member {TenantInfo} [tenant] Information about the tenant in which the
   * message was sent.
   */
  tenant?: TenantInfo;

  /**
   * @member {MeetingInfo} [meeting] Information about the tenant in which the
   * message was sent.
   */
  meeting?: MeetingInfo;

  /**
   * @member {ChannelDataSettings} [settings] Information about the settings in which the
   * message was sent.
   */
  settings?: ChannelDataSettings;

  /**
   * Whether or not the feedback loop feature is enabled.
   */
  feedbackLoopEnabled?: boolean;

  /**
   * ID of the stream.
   * @remarks
   * Assigned after the initial update is sent.
   */
  streamId?: string;

  /**
   * The type of message being sent.
   * @remarks
   * `informative` - An informative update.
   * `streaming` - A chunk of partial message text.
   * `final` - The final message.
   */
  streamType?: 'informative' | 'streaming' | 'final';

  /**
   * Sequence number of the message in the stream.
   * @remarks
   * Starts at 1 for the first message and increments from there.
   */
  streamSequence?: number;
};

export * from './channel-info';
export * from './notification-info';
export * from './settings';
export * from './team-info';
export * from './tenant-info';
