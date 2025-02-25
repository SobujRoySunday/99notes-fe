import { HtmlToWeb, QuizCard, UPSCNotesCard, RelatedTopics, Tags } from "@/components";
import { HISTORY_IMG, Lock } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 md:p-12 flex flex-col items-center gap-12">
      <div>
        <Image src={HISTORY_IMG} width={1920} height={1080} alt="History Image" />
      </div>

      <div className="text-center font-medium">
        <h4 className="">ANCIENT INDIA</h4>
        <h2 className="text-5xl">What is History? Sources & Types of History</h2>
      </div>

      <div className="w-full flex flex-col md:flex-row text-center font-semibold gap-4">
        <div className="w-full md:w-1/3 border rounded p-4">
          Article
        </div>
        <div className="w-full md:w-1/3 border rounded p-4 flex items-center justify-center">
          <div className="flex gap-2 items-center">
            <Lock size={24} />
            Practice Questions
          </div>
        </div>
        <div className="w-full md:w-1/3 border rounded p-4 flex items-center justify-center">
          <div className="flex gap-2 items-center">
            <Lock size={24} />
            Videos
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row gap-4">
        <div className="w-3/4 rounded border h-fit p-8">
          <HtmlToWeb content={`
            <h1>What is History?</h1>
    <p>The word history is derived from the <span class="highlight">ancient Greek word</span> ‘Historia’, which translates into <span class="highlight">“an inquiry”</span>. Thus, the knowledge acquired by the investigation of the events of the past is history. In simple terms, <strong>it is the enquiry of the ‘human past’.</strong></p>
    
    <h2>Types of History</h2>
    <ul>
        <li><strong>Political History:</strong> Focuses on governance, power, and political events.</li>
        <li><strong>Diplomatic History:</strong> Studies international relations, treaties, conflicts, and diplomacy.</li>
        <li><strong>Cultural History:</strong> Explores art, literature, music, religion, and traditions.</li>
        <li><strong>Economic History:</strong> Focuses on trade routes, economic policies, and industrialization.</li>
        <li><strong>Social History:</strong> Studies social interactions, class dynamics, and cultural practices.</li>
        <li><strong>Intellectual History:</strong> Explores the evolution of ideas, philosophical developments, scientific advancements, cultural ideologies, and intellectual movements.</li>
    </ul>
    
    <h2>Classification of the Timeline in Historical Studies</h2>
    <h3>Pre-history</h3>
    <ul>
        <li><strong>Palaeolithic Age (Old Stone Age):</strong> From 2,500,000 MYA to 11,700 years ago, featuring rough stone tools and the evolution of proto-humans to humans.</li>
        <li><strong>Mesolithic Period (Middle Stone Age):</strong> Extends from 11,700 years ago to 6000 BCE. Known for microliths and early domestication of animals and plants.</li>
        <li><strong>Neolithic Period (New Stone Age):</strong> From 6000 BCE to 1000 BCE. Marked by agriculture, polished stone tools, and settled life.</li>
        <li><strong>Chalcolithic Period (Stone-Copper Age):</strong> Around 3000 BCE, people started using copper with stone tools.</li>
    </ul>
    
    <h3>Proto-history</h3>
    <p>Refers to the civilization phase before the invention of writing. Example: <span class="highlight">Indus Valley Civilization</span> (IVC), mentioned in Mesopotamian records.</p>
    
    <h3>History</h3>
    <p>Events occurring after the invention of writing. Example: The <span class="highlight">Edicts of Ashoka</span> help reconstruct the Mauryan era.</p>
    
    <h2>Classification of the Historical Period</h2>
    <ul>
        <li><strong>Ancient History:</strong> Before the invention of paper; based on inscriptions and written artefacts.</li>
        <li><strong>Medieval History:</strong> 500 AD - 1500 AD (globally), 11th century - 1750 AD (India); marked by increased text records.</li>
        <li><strong>Modern History:</strong> Post-1500 AD (Europe) and post-Mughal decline (India); includes British rule in India.</li>
        <li><strong>Contemporary History:</strong> Post-1947 Indian history; some historians also include world wars.</li>
    </ul>
    
    <h2>Sources of Indian History</h2>
    <h3>Classification Based on Originality of Sources</h3>
    <ul>
        <li><strong>Primary Sources:</strong> Direct evidence like Harappan seals and Kushan coins.</li>
        <li><strong>Secondary Sources:</strong> Historian-written analyses and chronicles.</li>
    </ul>
    
    <h3>Classification Based on Type of Evidence</h3>
    <ul>
        <li><strong>Literary Sources:</strong> Written works like <i>Rajatarangini</i> by Kalhana.</li>
        <li><strong>Foreign Sources:</strong> Accounts of travelers like <i>Hiuen Tsang</i> and diplomats like <i>Megasthenes</i>.</li>
        <li><strong>Archaeological Sources:</strong> Material evidence like monuments, coins, and pottery.</li>
        <li><strong>Palaeontological Sources:</strong> Fossil evidence, such as the <i>Narmada man</i> skull.</li>
        <li><strong>Linguistic Theories:</strong> Studies of language families like Indo-European and Dravidian.</li>
        <li><strong>Biological Studies:</strong> Genetic research on ancient migrations, including <i>Negritos, Aryans, Mongoloids</i>.</li>
    </ul>
            `} />
        </div>
        <div className="w-1/4 flex flex-col gap-4">
          <QuizCard />
          <UPSCNotesCard />
          <RelatedTopics />
          <Tags />
        </div>
      </div>
    </div>
  );
}
