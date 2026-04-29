import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function Stats() {
  return (
    <Card className="mt-6 w-full shadow-sm">
      <CardContent className="flex items-center justify-around">
        <div className="text-center">
          <h3 className="text-lg font-medium">3.8k</h3>
          <p className="text-muted-foreground text-xs">Likes</p>
        </div>
        <Separator orientation="vertical" className="mx-4" />
        <div className="text-center">
          <h3 className="text-lg font-medium">1.6k</h3>
          <p className="text-muted-foreground text-xs">Posts</p>
        </div>
        <Separator orientation="vertical" className="mx-4" />
        <div className="text-center">
          <h3 className="text-lg font-medium">8.2m</h3>
          <p className="text-muted-foreground text-xs">Views</p>
        </div>
      </CardContent>
    </Card>
  );
}
