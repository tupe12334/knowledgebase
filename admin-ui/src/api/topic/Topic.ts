export type Topic = {
  createdAt: Date;
  dependOn?: Array<Topic>;
  dependOnMe?: Array<Topic>;
  id: string;
  updatedAt: Date;
};
