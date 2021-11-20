import { Permission } from './Permission';

export type User = {
  email: string;
  password: string;
  permission: Permission[];
  description?: string;
  id: string;
  legacyObjectId?: string;
};
