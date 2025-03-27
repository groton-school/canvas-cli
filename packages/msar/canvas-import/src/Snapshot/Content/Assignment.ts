import * as Imported from '@msar/types.import';

type AssignmentContainer = Omit<
  NonNullable<Imported.Topics.Item>,
  'Content'
> & {
  display?: boolean;
  Content: (Imported.ContentItem.Assignment & {
    canvas?: Imported.CanvasData;
  })[];
};

export function isAssignmentContainer(
  obj: NonNullable<Imported.BulletinBoard.Item | Imported.Topics.Item>
): obj is AssignmentContainer {
  return (
    obj &&
    (('ContentType' in obj && obj.ContentType?.Content === 'Assignment') ||
      ('ObjectType' in obj && obj.ObjectType?.Name === 'Assignment'))
  );
}

export function getIdentifiers(container: AssignmentContainer) {
  return container.Content.map((assignment) => assignment.AssessmentId).join(
    ','
  );
}

export function hydrate(
  container: AssignmentContainer,
  assignments?: Imported.Assignments.Data
) {
  for (let i = 0; i < container.Content.length; i++) {
    container.Content[i].canvas = assignments?.find(
      (assignment) =>
        assignment.assignment_id === container.Content[i].AssignmentId
    )?.canvas;
  }
  return container;
}
