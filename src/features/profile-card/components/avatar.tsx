import usericon from '@/assets/dave.jpeg';
import { Separator } from '@/components/ui/separator';

export function Avatar() {
  return (
    <div className="mb-12 flex flex-col items-center">
      <Separator className="mt-12" />
      <img
        src={usericon}
        alt="User Icon"
        className="absolute z-50 h-24 w-24 rounded-full border-5 shadow-sm"
      />
    </div>
  );
}
