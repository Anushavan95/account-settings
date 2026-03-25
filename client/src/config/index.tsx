import type { SettingDefinition } from '@/utils/types';
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
      control={<Switch {...field} checked={Boolean(field.value)} />}
      label={setting.label}
    />
  ),

  text: (field, setting, error) => (
    <TextField
      {...field}
      label={setting.label}
      fullWidth
      margin="normal"
      error={!!error}
      helperText={error}
    />
  ),

  number: (field, setting, error) => (
    <TextField
      {...field}
      label={setting.label}
      type="number"
      fullWidth
      margin="normal"
      error={!!error}
      helperText={error}
    />
  ),

  select: (field, setting, error) => (
    <TextField
      {...field}
      select
      fullWidth
      margin="normal"
      label={setting.label}
      error={!!error}
      helperText={error}
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
        />
      ))}
      {error && <span style={{ color: 'red', fontSize: 12 }}>{error}</span>}
    </FormGroup>
  ),
};
