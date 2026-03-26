import React from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import type { Account } from '../types';

interface AccountsListProps {
  accounts: Account[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export const AccountsList: React.FC<AccountsListProps> = ({ accounts, selectedId, onSelect }) => {
  return (
    <List>
      {accounts &&
        accounts.map((acc) => {
          return (
            <ListItemButton
              key={acc.id}
              selected={acc.id === selectedId}
              onClick={() => onSelect(acc.id)}
            >
              <ListItemText primary={acc.name} />
            </ListItemButton>
          );
        })}
    </List>
  );
};
