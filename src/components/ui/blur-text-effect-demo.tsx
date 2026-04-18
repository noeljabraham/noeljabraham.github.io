import { BlurTextEffect } from '@/components/ui/blur-text-effect';

export default function BlurTextPreview() {
  return (
    <div className="flex min-h-screen w-full select-none items-center justify-center">
      <BlurTextEffect className="text-primary text-2xl font-semibold sm:text-4xl">
        Your ideas, Blur style.
      </BlurTextEffect>
    </div>
  );
}
