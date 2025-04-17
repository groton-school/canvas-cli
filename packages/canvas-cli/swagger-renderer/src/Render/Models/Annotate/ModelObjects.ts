import { PathString } from '@battis/descriptive-types';
import * as Swagger from '@groton/swagger-spec-ts';
import * as Annotations from '../../Annotations/index.js';
import {
  PostTransformAnnotatedModel,
  PreTransformSwaggerModel
} from '../../Transforms/index.js';

export type Options = {
  api: Swagger.v1p2.ApiDeclaration;
  specPath: PathString;
  preTransforms?: PreTransformSwaggerModel[];
  postTransforms?: PostTransformAnnotatedModel[];
};

export async function annotateModels({
  api,
  specPath,
  preTransforms = [],
  postTransforms = []
}: Options): Promise<Annotations.Swagger.Model[]> {
  const models: Annotations.Swagger.Model[] = [];

  for (const modelId in api.models) {
    let model = api.models[modelId];

    for (const transform of preTransforms) {
      model = await transform(model);
    }

    const properties: Annotations.Swagger.Property[] = [];
    const tsImports: Annotations.TypeScript.Type[] = [];
    for (const propertyId in model.properties) {
      const property = model.properties[propertyId];
      const annotatedProperty: Annotations.Swagger.Property = {
        ...property,
        tsDeprecation: Annotations.toTSDeprecation(property),
        tsName: Annotations.toTSPropertyName(propertyId),
        tsType: Annotations.toTSType(property)
      };
      properties.push(annotatedProperty);
      if (annotatedProperty.tsType.tsReferences) {
        tsImports.push(...annotatedProperty.tsType.tsReferences);
      }
    }

    let annotatedModel: Annotations.Swagger.Model = {
      specPath,
      ...model,
      tsImports,
      tsDeprecation: Annotations.toTSDeprecation(model),
      tsName: Annotations.toTSTypeName(modelId),
      properties
    };
    annotatedModel.tsExport = Annotations.toTSExport(annotatedModel);
    /*
     * TODO force IDs to strings
     *   https://developerdocs.instructure.com/services/canvas#schema
     */

    for (const transform of postTransforms) {
      annotatedModel = await transform(annotatedModel);
    }

    models.push(annotatedModel);
  }
  return models.map((model) => {
    model.tsImports = model.tsImports?.filter(
      (tsType) => !models.find((model) => model.tsName === tsType.type)
    );
    return model;
  });
}
