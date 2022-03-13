import { TopicUpdateManyWithoutUsersInput } from "./TopicUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  knownTopics?: TopicUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
