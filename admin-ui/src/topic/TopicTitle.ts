import { Topic as TTopic } from "../api/topic/Topic";

export const TOPIC_TITLE_FIELD = "title";

export const TopicTitle = (record: TTopic): string => {
  return record.title || record.id;
};
