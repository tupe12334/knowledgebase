import { TopicWhereInput } from "./TopicWhereInput";
import { TopicOrderByInput } from "./TopicOrderByInput";

export type TopicFindManyArgs = {
  where?: TopicWhereInput;
  orderBy?: TopicOrderByInput;
  skip?: number;
  take?: number;
};
