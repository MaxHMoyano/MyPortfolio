import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ICard {
  title: string;
  subtitle: string;
  icon?: IconDefinition;
  action(): void;
}
