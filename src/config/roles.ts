enum ROLES {
  SUPER_ADMIN = "superAdmin",
  ADMIN = "admin",
  USER = 'user',
  EMPLOYER = 'Employer',
  EMPLOYEE = 'Employee',
}

export const BLOCKED_ROLES = [ROLES.USER];

export default ROLES;
