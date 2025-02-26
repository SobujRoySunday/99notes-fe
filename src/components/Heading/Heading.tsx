export default function Heading({ text }: { text: string }) {
    return (
        <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900 relative inline-block">
                {text}
                <span className="block h-1 bg-yellow-400 w-full mt-1"></span>
            </h2>
        </div>
    );
}
