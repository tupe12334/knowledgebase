import { TopicListRelationFilter } from "./TopicListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TopicWhereInput = {
  dependOn?: TopicListRelationFilter;
  dependOnMe?: TopicListRelationFilter;
  id?: StringFilter;
  knownUsers?: UserListRelationFilter;
};
