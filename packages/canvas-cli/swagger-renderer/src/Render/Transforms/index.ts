import * as Swagger from '@groton/swagger-spec-ts';
import * as Annotations from '../Annotations/index.js';

export * as Post from './Post/index.js';
export * as Pre from './Pre/index.js';

export type Transform<T> = (object: T) => T | Promise<T>;

export type PreTransformSwaggerModel = Transform<Swagger.v1p2.ModelsObject>;

export type PreTransformSwaggerOperation =
  Transform<Swagger.v1p2.OperationObject>;

export type PostTransformAnnotatedModel = Transform<Annotations.Swagger.Model>;

export type PostTransformAnnotatedOperation =
  Transform<Annotations.Swagger.Operation>;
