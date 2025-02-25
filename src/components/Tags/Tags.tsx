export default function Tags() {
    const tags = [
        { name: 'Decline of Harappan Culture', },
        { name: 'Harappan Civilisation', },
        { name: 'The Mahajanapadas' }
    ];

    return (
        <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl border">
            <h2 className="text-xl font-bold mb-4">Tags</h2>
            <div className="w-full h-[1px] bg-black mb-4"></div>
            <div className="space-y-2 text-sm">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className={`inline-block px-4 py-2 rounded-lg border text-gray-500`}
                    >
                        # {tag.name}
                    </span>
                ))}
            </div>
        </div>
    );
}