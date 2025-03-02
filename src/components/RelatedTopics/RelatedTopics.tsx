import TTopic from "@/types/Topic";
import Link from "next/link";

export default function RelatedTopics({ relatedTopics }: { relatedTopics: TTopic[] }) {
    return (
        <div className="max-w-sm w-full mx-auto p-6 bg-white rounded-2xl border border-gray-200">
            <h2 className="text-xl font-bold text-center mb-4">Related Topics</h2>
            <ul className="space-y-4">
                {relatedTopics.map((topic, index) => (
                    <li key={index} className="text-sm">
                        <Link
                            href={'#'}
                            className={`underline`}
                        >
                            {topic.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
