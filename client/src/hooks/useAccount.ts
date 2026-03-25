import { useState, useEffect } from 'react';
import type { AccountSettingsValues } from '../utils/types';
import { loadSettings, saveSettings } from '../api';

export const useAccountSettings = (accountId: string) => {
  const [values, setValues] = useState<AccountSettingsValues>({});

  useEffect(() => {
    setValues(loadSettings(accountId));
  }, [accountId]);

  const save = (newValues: AccountSettingsValues) => {
    setValues(newValues);
    saveSettings(accountId, newValues);
  };

  return { values, save };
};
