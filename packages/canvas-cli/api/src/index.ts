import { PlannerItem as OverridePlannerItem } from './Overrides.js';
import * as RenderedPlanner from './Resources/Planner.js';

export * from './Client.js';
export { Lti, Quiz, Sis, V1 as v1 } from './Endpoints/index.js';
export * from './FileUploads.js';
export * from './Resources/index.js';

// inject undefined PlannerItem into Planner namespace
/* eslint @typescript-eslint/no-namespace: 0 */
export namespace Planner {
  export type PlannerItem = OverridePlannerItem;
  export type PlannerOverride = RenderedPlanner.PlannerOverride;
  export type PlannerNote = RenderedPlanner.PlannerNote;
}
