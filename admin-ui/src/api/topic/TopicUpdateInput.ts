import { TopicUpdateManyWithoutTopicsInput } from "./TopicUpdateManyWithoutTopicsInput";
import { UserUpdateManyWithoutTopicsInput } from "./UserUpdateManyWithoutTopicsInput";

export type TopicUpdateInput = {
  dependOn?: TopicUpdateManyWithoutTopicsInput;
  dependOnMe?: TopicUpdateManyWithoutTopicsInput;
  knownUsers?: UserUpdateManyWithoutTopicsInput;
};
