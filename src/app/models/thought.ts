export type CreateThoughtFormValues = Omit<Thought, 'id'>;

export interface Thought {
  id: string;
  model: string;
  content: string;
  authorship: string;
}
