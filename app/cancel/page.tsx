// app/cancel/page.tsx
import HomeButton from '@/components/HomeButton';
export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1>Payment Canceled</h1>
      <p>Your payment was not completed. Feel free to try again later.</p>
      <HomeButton />
    </div>
  );
}
