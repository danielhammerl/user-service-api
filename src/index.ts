export enum Permission {
  ADMIN = 'admin',
  READ_USER = 'readUser',
  REGISTER_TO_PI_MONITORING_SERVER = 'register-to-pi-monitoring-server',
  READ_PI_MONITORING_STATUS = 'read-pi-monitoring-status',
}

export interface User {
  email: string;
  password: string;
  permissions: Permission[];
  description?: string;
  id: string;
  legacyObjectId?: string;
}
