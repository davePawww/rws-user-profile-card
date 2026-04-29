import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import type { AvatarIconProps } from '@/types/common.types';

const socials = [
  { link: 'https://x.com/davePawww', icon: <FaTwitter size={22} /> },
  { link: 'https://www.linkedin.com/in/davepaurillo/', icon: <FaLinkedin size={22} /> },
  { link: 'https://github.com/davePawww', icon: <FaGithub size={22} /> },
];

export function Socials() {
  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      {socials.map((social) => {
        return <SocialsIcon key={social.link} {...social} />;
      })}
    </div>
  );
}

function SocialsIcon({ link, icon }: AvatarIconProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex size-8 items-center justify-center"
      aria-label={`Link to ${link}`}
    >
      {icon}
    </a>
  );
}
