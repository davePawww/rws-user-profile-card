import type { Meta, StoryObj } from '@storybook/react-vite';

import UserProfileCard from '@/pages/user-profile-card.page';

const meta = {
  title: 'User Profile/Card',
  component: UserProfileCard,
} satisfies Meta<typeof UserProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
