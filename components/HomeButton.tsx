'use client'
import { useRouter } from 'next/navigation';

export default function HomeButton() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push('/')}
        className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-50"
      >
        Home
      </button>
    </div>
  );
}
