import { TabContext } from './tab-context';
import { TabEntityContext } from './tab-entity-context';

/**
 *
 * Invoke ('tab/submit') request value payload.
 *
 */
export type TabSubmit = {
  /**
   * @member {TabEntityContext} [tabContext] The current tab's entity request context.
   */
  tabContext?: TabEntityContext;

  /**
   * @member {TabContext} [context] The current user context, i.e., the current theme.
   */
  context?: TabContext;

  /**
   * @member {TabSubmitData} [data] User input. Free payload containing properties of key-value pairs.
   */
  data?: TabSubmitData;
};

/**
 *
 * Invoke ('tab/submit') request value payload data.
 *
 */
export type TabSubmitData = {
  /**
   * @member {string} [type] Should currently be 'tab/submit'.
   */
  type?: string;

  /**
   * @member {any} [any] Additional properties not otherwise defined in TabSubmit.
   */
  [properties: string]: unknown;
};
