import { TopicUpdateManyWithoutTopicsInput } from "./TopicUpdateManyWithoutTopicsInput";
import { UserUpdateManyWithoutTopicsInput } from "./UserUpdateManyWithoutTopicsInput";

export type TopicUpdateInput = {
  dependOn?: TopicUpdateManyWithoutTopicsInput;
  dependOnMe?: TopicUpdateManyWithoutTopicsInput;
  description?: string | null;
  knownUsers?: UserUpdateManyWithoutTopicsInput;
  title?: string | null;
};
