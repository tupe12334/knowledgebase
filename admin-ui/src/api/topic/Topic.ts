import { User } from "../user/User";

export type Topic = {
  createdAt: Date;
  dependOn?: Array<Topic>;
  dependOnMe?: Array<Topic>;
  id: string;
  knownUsers?: Array<User>;
  updatedAt: Date;
};
