import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from './Layout';
import { MenuItem } from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta;

const menuItems: MenuItem[] = [
  { key: 'dashboard', text: 'Dashboard', icon: 'Home', onClick: () => alert('Dashboard') },
  { key: 'users', text: 'Users', icon: 'People', onClick: () => alert('Users') },
  { key: 'settings', text: 'Settings', icon: 'Settings', onClick: () => alert('Settings') },
];

const Template: Story<any> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuItems,
  userName: 'John Doe',
  userEmail: 'john@example.com',
  children: (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      <p>This is a live preview inside Storybook!</p>
    </div>
  ),
};
