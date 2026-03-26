import type { RegisterOptions } from 'react-hook-form';

export type SettingType = 'boolean' | 'text' | 'number' | 'select' | 'multiselect' | 'switch';

export interface SettingDefinition {
  id: string;
  label: string;
  type: 'switch' | 'text' | 'number' | 'select' | 'multiselect';
  options?: string[];
  rules?: RegisterOptions;
}

export interface AccountSettingsValues {
  [key: string]: boolean | string | number | string[];
}

export type SettingOption = string;

export interface BaseSetting<T extends SettingType> {
  id: string;
  label: string;
  type: T;
  rules?: RegisterOptions;
}

export interface BooleanSetting extends BaseSetting<'boolean'> {}
export interface TextSetting extends BaseSetting<'text'> {}
export interface NumberSetting extends BaseSetting<'number'> {}
export interface SelectSetting extends BaseSetting<'select'> {
  options: SettingOption[];
}
export interface MultiSelectSetting extends BaseSetting<'multiselect'> {
  options: SettingOption[];
}

export const settingsConfig: SettingDefinition[] = [
  { id: 'enableNotifications', label: 'Enable Notifications', type: 'switch' },

  {
    id: 'supportEmail',
    label: 'Support Email',
    type: 'text',
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email format',
      },
    },
  },
  {
    id: 'dailyEmailLimit',
    label: 'Daily Email Limit',
    type: 'number',
    rules: {
      required: 'Daily limit is required',
      min: { value: 1, message: 'Minimum value is 1' },
      max: { value: 100, message: 'Maximum value is 100' },
      pattern: { value: /^[0-9]+$/, message: 'Must be a number' },
    },
  },

  {
    id: 'timezone',
    label: 'Timezone',
    type: 'select',
    options: ['UTC', 'GMT+1', 'GMT+2'],
    rules: { required: 'Select timezone' },
  },

  {
    id: 'allowedChannels',
    label: 'Allowed Channels',
    type: 'multiselect',
    options: ['Email', 'SMS', 'Push'],
  },
];
