import { fieldRenderers } from '@/config';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { settingsConfig, type AccountSettingsValues } from '../../utils/types';
import CustomButton from '../ui/button';

interface SettingsFormProps {
  values: AccountSettingsValues;
  onSave: (values: AccountSettingsValues) => void;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ values, onSave }) => {
  const { control, handleSubmit, reset } = useForm<AccountSettingsValues>({
    defaultValues: values,
  });

  useEffect(() => {
    reset(values);
  }, [values, reset]);

  const submit = (data: AccountSettingsValues) => onSave(data);

  return (
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
      <CustomButton variant="contained" sx={{ mt: 2 }} type="submit">
        Save
      </CustomButton>
      <CustomButton variant="outlined" sx={{ mt: 2, ml: 1 }} onClick={() => reset(values)}>
        Reset
      </CustomButton>
    </form>
  );
};
