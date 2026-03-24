export type SettingType = 'boolean' | 'text' | 'number' | 'select' | 'multiselect';

export interface SettingDefinition {
  id: string;
  label: string;
  type: SettingType;
  options?: string[];
}

export interface AccountSettingsValues {
  [key: string]: boolean | string | number | string[];
}

export const settingsConfig: SettingDefinition[] = [
  { id: 'enableNotifications', label: 'Enable Notifications', type: 'boolean' },
  { id: 'supportEmail', label: 'Support Email', type: 'text' },
  { id: 'dailyEmailLimit', label: 'Daily Email Limit', type: 'number' },
  { id: 'timezone', label: 'Timezone', type: 'select', options: ['UTC', 'GMT+1', 'GMT+2'] },
  {
    id: 'allowedChannels',
    label: 'Allowed Channels',
    type: 'multiselect',
    options: ['Email', 'SMS', 'Push'],
  },
];
