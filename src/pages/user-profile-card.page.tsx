import { motion } from 'motion/react';
import { useCallback } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Avatar,
  ProfileTexts,
  Socials,
  Stats,
  StatusIndicator,
  VerifiedBadge,
} from '@/features/profile-card';

export default function UserProfileCard() {
  const handleClick = useCallback(() => {
    window.open('https://github.com/davePawww', '_blank');
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: 'easeInOut' }}
    >
      <Card className="relative h-auto w-72 shadow-lg">
        <CardContent>
          <VerifiedBadge isVerified={true} />
          <StatusIndicator isOnline={true} />
          <Avatar />
          <ProfileTexts />
          <Stats />
          <Socials />
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleClick}>
            Get in touch
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
