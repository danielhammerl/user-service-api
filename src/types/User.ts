import { Permission } from './Permission';

export type User = {
  email: string;
  password: string;
  permissions: Permission[];
  description?: string;
  id: string;
  legacyObjectId?: string;
};
