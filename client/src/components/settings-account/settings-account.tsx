import { fieldRenderers, getDefaultValues } from '@/helpers';
import React, { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
// import { settingsConfig, type AccountSettingsValues } from '../../utils/types';
import { useFetch } from '@/hooks/useFetch';
import CustomButton from '../ui/button';
import { settingsConfig, type AccountSettingsValues } from '@/utils/types';

interface SettingsFormProps {
  values: AccountSettingsValues;
  selectedId: string;
  setStatus: (str: string) => void;
  refetchAccounts: () => Promise<any>;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({
  values,
  setStatus,
  refetchAccounts,
  selectedId,
}) => {
  const { fetchData, loading } = useFetch(`/accounts/${selectedId}`, {
    method: 'PUT',
  });

  const defaultValues = useMemo(() => getDefaultValues(), []);

  const { control, handleSubmit, reset } = useForm<AccountSettingsValues>({
    mode: 'onChange',
    defaultValues,
  });

  useEffect(() => {
    const formValues =
      values && Object.keys(values).length > 0 ? { ...defaultValues, ...values } : defaultValues;

    reset(formValues);
  }, [values, reset, defaultValues]);

  const submit = async (data: AccountSettingsValues) => {
    try {
      await fetchData(data);

      await refetchAccounts();

      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div style={{ width: '800px' }}>
      <form onSubmit={handleSubmit(submit)}>
        {settingsConfig.map((setting) => (
          <Controller
            key={setting.id}
            name={setting.id}
            control={control}
            rules={setting.rules}
            render={({ field, fieldState }) =>
              fieldRenderers[setting.type](field, setting, fieldState.error?.message)
            }
          />
        ))}
        <CustomButton
          variant="contained"
          sx={{ mt: 2 }}
          type="submit"
          disabled={loading}
          loading={loading}
        >
          Save
        </CustomButton>
        <CustomButton variant="outlined" sx={{ mt: 2, ml: 1 }} onClick={() => reset(values || {})}>
          Reset
        </CustomButton>
      </form>
    </div>
  );
};
