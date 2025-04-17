import { Options as OperationsOptions } from './RenderOperations.js';
import { Options as IndicesOptions } from './RenderOperationsIndex.js';

export { renderOperations } from './RenderOperations.js';
export { renderOperationIndices } from './RenderOperationsIndex.js';

export type Options = OperationsOptions & IndicesOptions;
