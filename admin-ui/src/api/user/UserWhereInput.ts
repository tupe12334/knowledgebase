import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TopicListRelationFilter } from "../topic/TopicListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  knownTopics?: TopicListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
