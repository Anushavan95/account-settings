import type { AccountSettingsValues } from '../utils/types';

export const loadSettings = (accountId: string): AccountSettingsValues => {
  const stored = localStorage.getItem(`settings_${accountId}`);
  return stored ? JSON.parse(stored) : {};
};

export const saveSettings = (accountId: string, values: AccountSettingsValues) => {
  localStorage.setItem(`settings_${accountId}`, JSON.stringify(values));
};
