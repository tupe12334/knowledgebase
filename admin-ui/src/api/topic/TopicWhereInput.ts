import { TopicListRelationFilter } from "./TopicListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type TopicWhereInput = {
  dependOn?: TopicListRelationFilter;
  dependOnMe?: TopicListRelationFilter;
  id?: StringFilter;
};
