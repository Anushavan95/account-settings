import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  Button,
} from '@mui/material';
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

  console.log('SettingsForm Rendered with values:', values);

  const submit = (data: AccountSettingsValues) => onSave(data);

  return (
    <form onSubmit={handleSubmit(submit)}>
      {settingsConfig.map((setting) => {
        switch (setting.type) {
          case 'boolean':
            return (
              <Controller
                key={setting.id}
                name={setting.id}
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={field.value || false} />}
                    label={setting.label}
                  />
                )}
              />
            );
          case 'text':
            return (
              <Controller
                key={setting.id}
                name={setting.id}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label={setting.label} fullWidth margin="normal" />
                )}
              />
            );
          case 'number':
            return (
              <Controller
                key={setting.id}
                name={setting.id}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={setting.label}
                    fullWidth
                    margin="normal"
                  />
                )}
              />
            );
          case 'select':
            return (
              <Controller
                key={setting.id}
                name={setting.id}
                control={control}
                render={({ field }) => (
                  <Select {...field} fullWidth displayEmpty>
                    {setting.options?.map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            );
          case 'multiselect':
            return (
              <Controller
                key={setting.id}
                name={setting.id}
                control={control}
                render={({ field }) => (
                  <FormGroup>
                    {setting.options?.map((opt) => (
                      <FormControlLabel
                        key={opt}
                        control={
                          <Checkbox
                            checked={(field.value || []).includes(opt)}
                            onChange={(e) => {
                              const value = field.value || [];
                              if (e.target.checked) field.onChange([...value, opt]);
                              else field.onChange(value.filter((v) => v !== opt));
                            }}
                          />
                        }
                        label={opt}
                      />
                    ))}
                  </FormGroup>
                )}
              />
            );
        }
      })}
      <CustomButton
        variant="contained"
        sx={{ backgroundColor: 'secondary.main', color: 'secondary.contrastText', mt: 2 }}
        type="submit"
      >
        Save
      </CustomButton>
      <CustomButton variant="outlined" sx={{ mt: 2, ml: 1 }} onClick={() => reset(values)}>
        Reset
      </CustomButton>
    </form>
  );
};
