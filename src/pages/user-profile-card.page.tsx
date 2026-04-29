import { Card, CardContent } from '@/components/ui/card';
import { Avatar, ProfileTexts, Socials, Stats } from '@/features/profile-card';

export default function UserProfileCard() {
  return (
    <Card className="h-96 w-72 shadow-lg">
      <CardContent>
        <Avatar />
        <ProfileTexts />
        <Stats />
        <Socials />
      </CardContent>
    </Card>
  );
}
