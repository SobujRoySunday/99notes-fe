'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchArticleByDocumentId } from '@/services';
import { Container, HtmlToWeb, QuizCard, UPSCNotesCard, RelatedTopics, Tags, ArticleInfo } from "@/components";
import { HISTORY_IMG, Lock } from "@/constants";
import Image from "next/image";
import TArticle from '@/types/Article';
import Link from 'next/link';

const Article = () => {
    const params = useParams();
    const { documentId } = params;
    const [article, setArticle] = React.useState<TArticle | null>(null);

    console.log(article);

    useEffect(() => {
        const fetchArticle = async () => {
            const article = await fetchArticleByDocumentId(documentId as string);
            setArticle(article);
        }
        fetchArticle();
    }, [documentId]);

    return (
        <Container>
            {article ? (
                <>
                    <div>
                        <Image src={`${article.cover || HISTORY_IMG}`} width={1920} height={1080} alt="History Image" />
                    </div>

                    <div className="text-center font-medium">
                        <h4 className="uppercase">{article.topic.name}</h4>
                        <h2 className="text-5xl">{article.title}</h2>
                    </div>

                    <div className="w-full flex flex-col md:flex-row text-center font-semibold gap-4">
                        <Link href={`/articles`} className="w-full md:w-1/3 border rounded p-4">
                            Articles
                        </Link>
                        <Link href={`/quizzes`} className="w-full md:w-1/3 border rounded p-4 flex items-center justify-center">
                            <div className="flex gap-2 items-center">
                                <Lock size={24} />
                                Practice Questions
                            </div>
                        </Link>
                        <Link href={`/videos`} className="w-full md:w-1/3 border rounded p-4 flex items-center justify-center">
                            <div className="flex gap-2 items-center">
                                <Lock size={24} />
                                Videos
                            </div>
                        </Link>
                    </div>

                    <div className="w-full flex flex-row gap-4">
                        <div className="w-3/4 rounded border h-fit p-8">
                            <HtmlToWeb id={1} content={article.content} />
                        </div>
                        <div className="w-1/4 flex flex-col gap-4">
                            <QuizCard />
                            <UPSCNotesCard />
                            <RelatedTopics relatedTopics={article.related_topic} />
                            <Tags tags={article.tags} />
                            <ArticleInfo
                                category={article.category.name}
                                updated={article.updatedAt}
                                author={article.author.name}
                                readingTime={article.reading_time}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <div className='w-full text-center p-4 border rounded-lg text-red-500'>Article not found</div>
            )}
        </Container>
    )
}

export default Article