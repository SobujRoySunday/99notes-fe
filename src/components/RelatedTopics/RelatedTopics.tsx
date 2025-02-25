import Link from "next/link";

export default function RelatedTopics() {
    const topics = [
        { name: 'Stone Age', link: '#', bold: true },
        { name: 'Harappan Civilisation', link: '#' },
        { name: 'The Mahajanapadas', link: '#' },
        { name: 'Mauryan Empire', link: '#' },
        { name: 'Mauryan Empire', link: '#' },
        { name: 'Copper Age', link: '#', bold: true },
        { name: 'Vedic Culture', link: '#' },
        { name: 'Persian & Greek Invasions', link: '#' },
        { name: 'Gupta Empire', link: '#' }
    ];

    return (
        <div className="max-w-sm w-full mx-auto p-6 bg-white rounded-2xl border border-gray-200">
            <h2 className="text-xl font-bold text-center mb-4">Related Topics</h2>
            <ul className="space-y-4">
                {topics.map((topic, index) => (
                    <li key={index} className="text-sm">
                        <Link
                            href={topic.link}
                            className={`underline ${topic.bold ? 'font-bold' : ''}`}
                        >
                            {topic.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
