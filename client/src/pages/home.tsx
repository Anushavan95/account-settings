import React, { useEffect, useMemo, useState } from 'react';
import { Grid, Paper, Box, useTheme } from '@mui/material';
import DynamicTypography from '@/components/ui/typography';
import type { Account } from '@/components/types';
import { AccountsList } from '@/components/accounts/accounts-list';
import { SettingsForm } from '@/components/settings-account/settings-account';
import { useFetch } from '@/hooks/useFetch';
import SimpleAlert from '@/components/ui/alert/simple-alert';

const Home: React.FC = () => {
  const theme = useTheme();

  const { data: accounts, fetchData } = useFetch<undefined, Account[]>('/accounts');
  const [selectedId, setSelectedId] = useState<string>('1');
  const [status, setStatus] = useState<string | null>();

  useEffect(() => {
    const getAsyncData = async () => {
      const result: any = await fetchData();
      setSelectedId(result[0].id);
    };
    getAsyncData();
  }, []);

  const resultFiltered = useMemo(() => {
    return accounts?.find((acc) => acc.id === selectedId)?.settings || {};
  }, [accounts, selectedId]);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      {status && (
        <Box
          sx={{
            position: 'fixed',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            width: 300,
          }}
        >
          <SimpleAlert message="Saved successfully" />
        </Box>
      )}

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
        <Grid container spacing={2} sx={{ maxWidth: '100%' }}>
          <Grid spacing={2}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <DynamicTypography variant="subtitle1" mb={1}>
                Accounts
              </DynamicTypography>
              <AccountsList
                accounts={accounts ?? []}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            </Paper>
          </Grid>
          <Grid container spacing={2}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <DynamicTypography variant="h6" mb={2}>
                Settings
              </DynamicTypography>
              <SettingsForm
                values={resultFiltered}
                setStatus={setStatus}
                selectedId={selectedId}
                refetchAccounts={fetchData}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
