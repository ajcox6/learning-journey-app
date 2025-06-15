export enum Status {
  ALL = 'all',
  IN_PROGRESS = 'In progress',
  COMPLETED = 'Completed'
}

export interface Item {
  id: number;
  title: string;
  description: string;
  status: Status;
}