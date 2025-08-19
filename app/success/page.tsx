// app/success/page.tsx
import HomeButton from '@/components/HomeButton';
export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1>Thank you for your payment!</h1>
      <p>Your payment was successful. We’ll get started on your order shortly.</p>
      <HomeButton />
    </div>
  );
}
