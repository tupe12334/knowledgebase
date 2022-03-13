import { Topic } from "../topic/Topic";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  knownTopics?: Array<Topic>;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
