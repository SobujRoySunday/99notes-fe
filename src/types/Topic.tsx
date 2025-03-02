import TTimestamp from "./Timestamp";

type TTopic = {
    id: number;
    documentId: string;
    name: string;
    createdAt: TTimestamp;
    updatedAt: TTimestamp;
    publishedAt: TTimestamp;
}

export default TTopic