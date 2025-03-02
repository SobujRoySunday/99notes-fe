import TArticle from "@/types/Article";

const fetchArticleByDocumentId = async (documentId: string): Promise<TArticle | null> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${documentId}`);
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching article:", error);
        return null;
    }
}

export default fetchArticleByDocumentId;