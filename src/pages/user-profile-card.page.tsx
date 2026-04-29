import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: 'easeInOut' }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
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
