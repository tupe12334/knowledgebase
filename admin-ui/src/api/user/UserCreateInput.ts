import { TopicCreateNestedManyWithoutUsersInput } from "./TopicCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  knownTopics?: TopicCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
