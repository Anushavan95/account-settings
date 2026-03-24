import React, { useState } from 'react';
import { Grid, Paper, Box } from '@mui/material';
import DynamicTypography from '@/components/ui/typography';
import type { Account } from '@/components/types';
import { AccountsList } from '@/components/accounts';
import { SettingsForm } from '@/components/settings-account';
import { useAccountSettings } from '@/hooks/useAccount';

const accounts: Account[] = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Wayne Rooney' },
];

const Home: React.FC = () => {
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
        backgroundColor: '#f5f5f5',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        p: 2,
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: 1500 }}>
        <Grid container spacing={2} sx={{ maxWidth: { xs: '20%', md: 300 }, width: '100%' }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <DynamicTypography variant="subtitle1" colorVariant="secondary" mb={1}>
              Accounts
            </DynamicTypography>
            <AccountsList accounts={accounts} selectedId={selectedId} onSelect={setSelectedId} />
          </Paper>
        </Grid>

        <Grid container spacing={2} sx={{ maxWidth: { xs: '100%', md: 900 }, width: '100%' }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <DynamicTypography variant="h6" colorVariant="primary" mb={2}>
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
