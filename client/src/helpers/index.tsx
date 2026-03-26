import { settingsConfig, type AccountSettingsValues, type SettingDefinition } from '@/utils/types';
import { TextField, Switch, FormControlLabel, Checkbox, FormGroup, MenuItem } from '@mui/material';
import type React from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

type FieldRenderer = (
  field: ControllerRenderProps<any>,
  setting: SettingDefinition,
  error?: string
) => React.ReactElement;

export const fieldRenderers: Record<string, FieldRenderer> = {
  switch: (field, setting) => (
    <FormControlLabel
      control={
        <Switch checked={Boolean(field.value)} onChange={(e) => field.onChange(e.target.checked)} />
      }
      label={setting.label}
      sx={{ display: 'block', marginY: 1 }}
    />
  ),
  text: (field, setting, error) => (
    <TextField
      {...field}
      value={field.value ?? ''}
      label={setting.label}
      fullWidth
      margin="normal"
      error={!!error}
      helperText={error || ' '}
    />
  ),
  number: (field, setting, error) => (
    <TextField
      {...field}
      value={field.value ?? ''}
      type="number"
      label={setting.label}
      fullWidth
      margin="normal"
      error={!!error}
      helperText={error || ' '}
    />
  ),
  select: (field, setting, error) => (
    <TextField
      {...field}
      select
      value={field.value ?? ''}
      label={setting.label}
      fullWidth
      margin="normal"
      error={!!error}
      helperText={error || ' '}
    >
      {setting.options?.map((opt) => (
        <MenuItem key={opt} value={opt}>
          {opt}
        </MenuItem>
      ))}
    </TextField>
  ),
  multiselect: (field, setting, error) => (
    <FormGroup>
      {setting.options?.map((opt) => (
        <FormControlLabel
          key={opt}
          control={
            <Checkbox
              checked={(field.value || []).includes(opt)}
              onChange={(e) => {
                const value = field.value || [];
                field.onChange(
                  e.target.checked ? [...value, opt] : value.filter((v: string) => v !== opt)
                );
              }}
            />
          }
          label={opt}
          sx={{ display: 'block', marginY: 0.5 }}
        />
      ))}
      <span style={{ color: 'red', fontSize: 12, minHeight: 20 }}>{error || ' '}</span>
    </FormGroup>
  ),
};
export const getDefaultValues = (): AccountSettingsValues => {
  const defaults: any = {};
  settingsConfig.forEach((setting) => {
    if (setting.type === 'multiselect') {
      defaults[setting.id] = [];
    } else if (setting.type === 'switch') {
      defaults[setting.id] = false;
    } else {
      defaults[setting.id] = '';
    }
  });
  return defaults;
};
