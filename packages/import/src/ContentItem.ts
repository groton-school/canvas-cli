import * as Archive from '@msar/types.archive';
import * as Annotation from './Annotation.js';

export type Assignment<T = Annotation.PotentialAnnotation> =
  Archive.ContentItem.Assignment<T>;

export type Media<T = Annotation.PotentialAnnotation> =
  Archive.ContentItem.Media<T>;
export type Audio<T = Annotation.PotentialAnnotation> =
  Archive.ContentItem.Media<T>;
export type Photo<T = Annotation.PotentialAnnotation> =
  Archive.ContentItem.Media<T>;
export type Video<T = Annotation.PotentialAnnotation> =
  Archive.ContentItem.Media<T>;

export type Download<T = Annotation.PotentialAnnotation> =
  Archive.ContentItem.Download<T>;
export type Expectations<T = Annotation.PotentialAnnotation> =
  Archive.ContentItem.Expectations<T>;
export type GradingRubric<T = Annotation.PotentialAnnotation> =
  Archive.ContentItem.GradingRubric<T>;
export type Link<T = Annotation.PotentialAnnotation> =
  Archive.ContentItem.Link<T>;
export type News<T = Annotation.PotentialAnnotation> =
  Archive.ContentItem.News<T>;

export type RSSReader = Archive.ContentItem.RSSReader & {
  canvas?: Annotation.CanvasData;
};

export type Syllabus<T = Annotation.PotentialAnnotation> =
  Archive.ContentItem.Syllabus<T>;
export type Text<T = Annotation.PotentialAnnotation> =
  Archive.ContentItem.Text<T>;

export type Any<T = Annotation.PotentialAnnotation> =
  | Archive.ContentItem.Any<T>
  | RSSReader;
