import TTag from "./Tag";
import TTimestamp from "./Timestamp";
import TTopic from "./Topic";

interface Author {
  id: number;
  documentId: string;
  name: string;
  email: string;
  createdAt: TTimestamp;
  updatedAt: TTimestamp;
  publishedAt: TTimestamp;
}

interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string | null;
  description: string | null;
  createdAt: TTimestamp;
  updatedAt: TTimestamp;
  publishedAt: TTimestamp;
}

interface Quiz {
  id: number;
  documentId: string;
  name: string;
  type: string;
  date: string;
  createdAt: TTimestamp;
  updatedAt: TTimestamp;
  publishedAt: TTimestamp;
}

interface PracticeQuestion {
  id: number;
  documentId: string;
  slug: string;
  name: string;
  date: string;
  createdAt: TTimestamp;
  updatedAt: TTimestamp;
  publishedAt: TTimestamp;
}

type TArticle = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  reading_time: string;
  content: string;
  createdAt: TTimestamp;
  updatedAt: TTimestamp;
  publishedAt: TTimestamp;
  cover: string | null;
  author: Author;
  category: Category;
  tags: TTag[];
  quizzes: Quiz[];
  topic: TTopic;
  subject: TTopic;
  related_topic: TTopic[];
  practice_question: PracticeQuestion;
};

export default TArticle;
