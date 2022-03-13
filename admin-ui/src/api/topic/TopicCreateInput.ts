import { TopicCreateNestedManyWithoutTopicsInput } from "./TopicCreateNestedManyWithoutTopicsInput";

export type TopicCreateInput = {
  dependOn?: TopicCreateNestedManyWithoutTopicsInput;
  dependOnMe?: TopicCreateNestedManyWithoutTopicsInput;
};
