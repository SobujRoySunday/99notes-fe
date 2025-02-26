import Image from "next/image";

const cards = [
    {
        title: "History",
        description:
            "The study of History is important for both Hindus and Muslims. It covers Ancient and Medieval India with a particular emphasis on Indian heritage and culture.",
        image: "/history_category.png", // Replace with actual image path
    },
    {
        title: "Society",
        description:
            "The study of Society is vital for India's perspective and growth. The syllabus of Indian Society is quite a broad field which has its own literature.",
        image: "/society_category.png", // Replace with actual image path
    },
    {
        title: "Geography",
        description:
            "The syllabus of Geography includes features of the world’s physical geography. It explores natural resources and the factors responsible for the location of industries.",
        image: "/geography_category.png", // Replace with actual image path
    },
];

export default function CardGrid() {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden border border-gray-200"
                    >
                        <div className="relative w-full h-48">
                            <Image
                                src={card.image}
                                alt={card.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-b-2xl"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
