export interface AccountSettings {
  theme?: string;
  notifications?: boolean;
  [key: string]: any;
}

export interface Account {
  id: number;
  name: string;
  settings: AccountSettings;
}
