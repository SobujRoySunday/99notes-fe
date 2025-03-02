import TTimestamp from "./Timestamp";

type TTag = {
  id: number;
  documentId: string;
  name: string;
  createdAt: TTimestamp;
  updatedAt: TTimestamp;
  publishedAt: TTimestamp;
};

export default TTag;
