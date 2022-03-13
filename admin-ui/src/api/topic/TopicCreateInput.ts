import { TopicCreateNestedManyWithoutTopicsInput } from "./TopicCreateNestedManyWithoutTopicsInput";
import { UserCreateNestedManyWithoutTopicsInput } from "./UserCreateNestedManyWithoutTopicsInput";

export type TopicCreateInput = {
  dependOn?: TopicCreateNestedManyWithoutTopicsInput;
  dependOnMe?: TopicCreateNestedManyWithoutTopicsInput;
  knownUsers?: UserCreateNestedManyWithoutTopicsInput;
};
