import React, { useState } from 'react';
import { Grid, Paper, Box, useTheme } from '@mui/material';
import DynamicTypography from '@/components/ui/typography';
import type { Account } from '@/components/types';
import { AccountsList } from '@/components/accounts/accounts-list';
import { SettingsForm } from '@/components/settings-account/settings-account';
import { useAccountSettings } from '@/hooks/useAccount';

const accounts: Account[] = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Wayne Rooney' },
];

const Home: React.FC = () => {
  const theme = useTheme();
  const [selectedId, setSelectedId] = useState(accounts[0].id);
  const { values, save } = useAccountSettings(selectedId);
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: theme.palette.background.default,
        p: 2,
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: 1500 }}>
        <Grid container spacing={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <DynamicTypography variant="subtitle1" mb={1}>
              Accounts
            </DynamicTypography>
            <AccountsList accounts={accounts} selectedId={selectedId} onSelect={setSelectedId} />
          </Paper>
        </Grid>

        <Grid container spacing={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <DynamicTypography variant="h6" mb={2}>
              Settings
            </DynamicTypography>
            <SettingsForm values={values} onSave={save} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
