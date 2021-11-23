export declare enum Permission {
  ADMIN = 'admin',
  READ_USER = 'readUser',
}

export interface User {
  email: string;
  password: string;
  permissions: Permission[];
  description?: string;
  id: string;
  legacyObjectId?: string;
}
