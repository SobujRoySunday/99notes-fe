import { UPSC_NOTES_IMG } from '@/constants';
import Image from 'next/image';

export default function UPSCNotesCard() {
    return (
        <div className="max-w-sm mx-auto p-6 bg-[#F2F2F2] rounded-2xl border border-gray-200 text-center">
            <h2 className="text-2xl font-bold mb-4">BUY HANDWRITTEN UPSC NOTES BY</h2>
            <h2 className="text-3xl font-extrabold text-purple-700">TOPPERS</h2>
            <div className="relative flex items-center justify-center mt-4">
                <Image src={UPSC_NOTES_IMG} alt="UPSC Notes" width={300} height={300} />
            </div>
        </div>
    );
}
