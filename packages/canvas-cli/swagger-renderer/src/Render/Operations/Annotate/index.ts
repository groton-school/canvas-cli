import { Options as ImportOptions } from './Imports.js';
import { Options as OperationsOptions } from './Operations.js';

export { annotateImports } from './Imports.js';
export { annotateOperations } from './Operations.js';

export type Options = OperationsOptions & ImportOptions;
