import React, { useState } from 'react';
// import { SettingsForm } from '../components/SettingsForm/SettingsForm';
// import { useAccountSettings } from '../hooks/useAccountSettings';
import { Grid, Paper, Typography } from '@mui/material';
import type { Account } from '../components/types';
import { AccountsList } from '../components/accounts';
import { SettingsForm } from '../components/settings-account';
import { settingsConfig } from '../utils/types';
import { useAccountSettings } from '../hooks/useAccount';

const accounts: Account[] = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Wayne Rooney' },
];

export const Home: React.FC = () => {
  const [selectedId, setSelectedId] = useState(accounts[0].id);
  const { values, save } = useAccountSettings(selectedId);
  console.log('Selected Account ID:', selectedId, values, settingsConfig);
  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Typography variant="h6" p={1}>
            Accounts
          </Typography>
          <AccountsList accounts={accounts} selectedId={selectedId} onSelect={setSelectedId} />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6" mb={2}>
            Settings
          </Typography>
          <SettingsForm values={values} onSave={save} />
        </Paper>
      </Grid>
    </Grid>
  );
};
