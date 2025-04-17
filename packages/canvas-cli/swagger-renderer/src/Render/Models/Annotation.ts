import { PathString } from '@battis/descriptive-types';
import * as Swagger from '@groton/swagger-spec-ts';
import * as Annotations from '../Annotations/index.js';

export type Annotation = {
  spec: Record<PathString, Swagger.v1p2.ApiDeclaration[]>;
  models: Record<PathString, Annotations.Swagger.Model[]>;
};
