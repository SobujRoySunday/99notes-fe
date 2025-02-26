import React from 'react'
import Image from 'next/image'
import { GS1_IMG } from '@/constants'
import { CardGrid, Heading, HtmlToWeb } from '@/components'
import Link from 'next/link'

const relatedLinks = [
    { text: "UPSC Syllabus", href: "/upsc-syllabus" },
    { text: "GS2 Syllabus & Notes", href: "/gs2-syllabus-notes" },
    { text: "GS3 Syllabus & Notes", href: "/gs3-syllabus-notes" },
    { text: "GS4 Syllabus & Notes", href: "/gs4-syllabus-notes" },
]

const GS1 = () => {
    return (
        <div className="p-4 md:p-12 flex flex-col items-center gap-12">
            <div>
                <Image src={GS1_IMG} width={1920} height={1080} alt="History Image" />
            </div>

            <div className="text-center font-medium">
                <h2 className="text-5xl">GS 1 Notes for UPSC: General Studies Notes 1 UPSC</h2>
            </div>

            <CardGrid />

            <div className='w-full bg-[#F1E9E9] rounded-2xl grid grid-cols-3 gap-4 p-4 justify-center items-center'>
                <h2 className='text-2xl font-bold text-center'>BUY HANDWRITTEN<br />UPSC NOTES BY</h2>

                <h1 className='text-7xl font-extrabold text-purple-700 text-center'>TOPPERS</h1>

                <div className='flex items-center justify-center'><Image className='-translate-y-8 scale-110' src={`/notes.png`} width={300} height={300} alt={'Notes'} /></div>
            </div>

            <div className='flex flex-col gap-12 w-full'>
                <Heading text={'UPSC GS 1 Syllabus'} />
                <HtmlToWeb content={`<p>The General Studies (GS) 1 paper of the UPSC Civil Services Examination (CSE) covers the subjects of Indian Heritage and Culture, History, and Geography. It aims to test the candidate’s knowledge of India’s cultural and physical diversity, as well as its history and geographical features.</p>

    <h2>Here are some tips on how to prepare for the GS 1 paper in detail:</h2>

    <h3>1. History</h3>
    <p>To prepare for this section of the GS 1 paper, you should study the major events and movements that have shaped India’s history, as well as the major themes and issues in Indian history. Some key topics to cover include:</p>
    <ul>
        <li>The ancient and medieval periods of Indian history, including the Indus Valley Civilization, the Mauryan and Gupta empires, and the Mughal Empire.</li>
        <li>The British colonial period and the independence movement.</li>
        <li>The partition of India and the emergence of modern India.</li>
        <li>The major social, cultural, and political developments in India, such as the impact of colonialism, the emergence of democratic institutions, and the development of a federal system of government.</li>
        <li>The major issues and challenges facing India today, such as poverty, inequality, and communalism.</li>
    </ul>

    <h3>2. Indian Heritage and Culture</h3>
    <p>To prepare for this section of the GS 1 paper, you should familiarize yourself with the major cultural traditions, religions, languages, and art forms of India. This includes studying the ancient and modern history of India, as well as its cultural diversity. Some key topics to cover include:</p>
    <ul>
        <li>The Indus Valley Civilization and ancient India.</li>
        <li>The Mauryan and Gupta empires.</li>
        <li>The Mughal Empire and its impact on Indian culture.</li>
        <li>The British colonial period and the independence movement.</li>
        <li>The cultural, linguistic, and religious diversity of India.</li>
        <li>The major art forms and cultural traditions of India, such as literature, music, dance, and cinema.</li>
    </ul>

    <h3>3. Geography</h3>
    <p>To prepare for this section of the GS 1 paper, you should study the major physical and geographical features of India, as well as its climate and natural resources. Some key topics to cover include:</p>
    <ul>
        <li>The physical features of India, such as the mountains, rivers, and plateaus.</li>
        <li>The climate of India, including the monsoon system and the major climatic regions.</li>
        <li>The natural resources of India, such as minerals, forests, and water.</li>
        <li>The major agricultural and industrial regions of India.</li>
        <li>The major environmental and biodiversity issues facing India, such as pollution, deforestation, and climate change.</li>
    </ul>

    <h2>Analyzing and Interpreting Historical and Cultural Information</h2>
    <p>In the GS 1 paper, you will be expected to not only recall facts and information but also analyze and interpret them. This involves examining the context and significance of historical and cultural events and developments and being able to draw connections and conclusions from them. To prepare for this, you should practice analyzing and interpreting information by:</p>
    <ul>
        <li>Examining the causes and consequences of historical and cultural events and developments.</li>
        <li>Evaluating the impact of these events and developments on society and culture.</li>
        <li>Drawing connections between different events and developments and analyzing their interrelationships.</li>
        <li>Synthesizing information from multiple sources to form a coherent and well-supported argument.</li>
    </ul>

    <h2>Practice Answering Sample Questions and Take Mock Tests</h2>
    <p>To improve your test-taking skills, you should practice answering sample questions and take mock tests. This will help you understand the types of questions that are asked in the GS 1 paper and improve your time management skills. You can find sample questions and mock tests online or in study guides for the CSE.</p>

    <h2>Stay Updated on Current Affairs</h2>
    <p>Many questions in the GS 1 paper are based on recent events and developments, so it is important to stay updated on current affairs. You should regularly read newspapers, magazines, and online news sources to stay informed about the latest developments in Indian history, culture, and geography. You should also pay attention to national and international news.</p>

    <p>Overall, to prepare for the GS 1 paper of the CSE, you should follow a structured study plan and cover all the topics in each subject. You should also practice answering sample questions and take mock tests and stay updated on current affairs. By following these tips, you can develop a strong foundation of knowledge and skills in Indian heritage, culture, history, and geography, and be well-prepared for the GS 1 paper of the CSE.</p>
`} />
            </div>


            <div className='w-full flex flex-col items-center gap-4'>
                <Heading text="Related Links" />
                <Image src={'/timeline.png'} width={914} height={83} className='w-[914px]' alt="Timeline" />
                <div className='flex flex-row justify-between text-sm w-[1000px] -mt-8'>
                    {relatedLinks.map((link, index) => (
                        <li className='list-none' key={index}>
                            <Link href={link.href}>{link.text}</Link>
                        </li>
                    ))}
                </div>
            </div>

            {/* Guide to Get Started with USC CSE 2024 */}
            <div className='w-full'>
                <Heading text="Guide to Get Started with USC CSE 2024" />
            </div>

            {/* A Guide to Getting Started with UPSC CSE 2024 */}
            <div className="rounded-lg p-6 w-full border">
                <h2 className="text-xl font-semibold text-center mb-4">
                    A Guide to Getting Started with UPSC CSE 2024
                </h2>
                <ul className="list-disc space-y-4 px-8 py-4 text-sm">
                    <li>Understand the Eligibility Criteria: Before you start your UPSC CSE 2024 journey, it is important to understand the eligibility criteria. The eligibility criteria for UPSC CSE 2024 is that you must be a citizen of India, you must be at least 21 years old and you must have a Bachelor’s degree or equivalent qualification from a recognized university.</li>
                    <li>Get Familiar with the Syllabus: The syllabus for the UPSC CSE 2024 exam is vast and diverse. It covers topics from all the major subjects such as General Studies, Current Affairs, History, Geography, Economics, Political Science, Public Administration, Law, and more. You can find the detailed syllabus on the UPSC website.</li>
                    <li>Start Preparing Early: It is important to start your preparation for UPSC CSE 2024 as early as possible. This will give you enough time to cover all the topics in the syllabus and to practice as much as possible.</li>
                    <li>Prepare a Study Plan: It is important to have a well-structured study plan. This plan should include topics to cover, time to dedicate to each topic, and a timeline to complete the syllabus.</li>
                    <li>Use Mock Tests: To get an idea of the exam pattern and to practice for the UPSC CSE 2024 exam, it is important to take mock tests. There are many online and offline resources available that can help you practice for the exam.</li>
                    <li>Stay Up to Date with Current Affairs: Current affairs are an important part of the UPSC CSE 2024 exam. It is important to stay up to date with the latest news and developments in the world.</li>
                    <li>Take Adequate Rest: It is important to take adequate rest and maintain a healthy lifestyle during the preparation period. This will help you stay focused and energized during the exam.</li>
                    <li>Clear Your Doubts: If you have any doubts or questions related to the UPSC CSE 2024 exam, it is important to clear them as soon as possible. You can do this by asking your teachers, friends, or taking help from online forums.</li>
                </ul>
            </div>
        </div >
    )
}

export default GS1