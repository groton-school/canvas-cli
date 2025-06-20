import { Canvas } from '@groton/canvas-cli.client.qui-cli';
import * as Assignments from './Assignments.js';

export type Model = {
  type: string;
  type_id: number;
  Weight?: number;
};

export function extract(assignments: Assignments.Model[]) {
  return assignments.reduce((assignmentTypes, assignment) => {
    if (
      !assignmentTypes.find(
        (assignmentType) => assignmentType.type == assignment.type
      )
    ) {
      assignmentTypes.push({
        type: assignment.type!,
        type_id: assignment.type_id!,
        Weight: assignment.Weight
      });
    }
    return assignmentTypes;
  }, [] as Model[]);
}

export function toCanvasArgs(
  assignmentType: Model
): Partial<Canvas.v1.Courses.AssignmentGroups.createFormParameters> {
  return {
    name: assignmentType.type !== '' ? assignmentType.type : 'Assignments',
    group_weight: assignmentType.Weight
  };
}
