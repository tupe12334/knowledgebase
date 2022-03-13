import { TopicCreateNestedManyWithoutTopicsInput } from "./TopicCreateNestedManyWithoutTopicsInput";
import { UserCreateNestedManyWithoutTopicsInput } from "./UserCreateNestedManyWithoutTopicsInput";

export type TopicCreateInput = {
  dependOn?: TopicCreateNestedManyWithoutTopicsInput;
  dependOnMe?: TopicCreateNestedManyWithoutTopicsInput;
  description?: string | null;
  knownUsers?: UserCreateNestedManyWithoutTopicsInput;
  title?: string | null;
};
