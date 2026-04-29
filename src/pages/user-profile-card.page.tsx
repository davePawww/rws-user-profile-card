import { motion } from 'motion/react';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, ProfileTexts, Socials, Stats, StatusIndicator } from '@/features/profile-card';

export default function UserProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: 'easeInOut' }}
    >
      <Card className="relative h-96 w-72 shadow-lg">
        <CardContent>
          <StatusIndicator isOnline={true} />
          <Avatar />
          <ProfileTexts />
          <Stats />
          <Socials />
        </CardContent>
      </Card>
    </motion.div>
  );
}
