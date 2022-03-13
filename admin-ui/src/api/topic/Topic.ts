import { User } from "../user/User";

export type Topic = {
  createdAt: Date;
  dependOn?: Array<Topic>;
  dependOnMe?: Array<Topic>;
  description: string | null;
  id: string;
  knownUsers?: Array<User>;
  title: string | null;
  updatedAt: Date;
};
