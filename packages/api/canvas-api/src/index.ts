import { PlannerItem as OverridePlannerItem } from './Overrides.js';
import * as RenderedPlanner from './Resources/Planner.js';

export { client, init } from '#client';
export * from './Endpoints/index.js';
export * from './Resources/index.js';

export * as Client from '#client';

// inject undefined PlannerItem into Planner namespace
/* eslint @typescript-eslint/no-namespace: 0 */
export namespace Planner {
  export type PlannerItem = OverridePlannerItem;
  export type PlannerOverride = RenderedPlanner.PlannerOverride;
  export type PlannerNote = RenderedPlanner.PlannerNote;
}
