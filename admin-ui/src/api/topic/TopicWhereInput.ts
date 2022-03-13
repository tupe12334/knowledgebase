import { TopicListRelationFilter } from "./TopicListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TopicWhereInput = {
  dependOn?: TopicListRelationFilter;
  dependOnMe?: TopicListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  knownUsers?: UserListRelationFilter;
  title?: StringNullableFilter;
};
