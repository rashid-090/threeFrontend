import ROLES from "../config/roles";

export const PUBLIC = {
  BASE_PATH: "/",
  PAGES: {
    LANDING: "home",
    JOBS: "jobs",
    JOBS_DETAILS: "job-details/:id",
    RESUMES: "resumes",
    RESUME_DETAILS: "resume-details/:id",
    ABOUT_US: "about-us",
    CONTACT_US: "contact-us",
  },
};

// AUTH
export const AUTH = {
  BASE_PATH: "/auth",
  PAGES: {
    LOGIN: "login",
    FORGOT_PASSWORD: "forgot-password",
    RESET_PASSWORD: "reset-password",
    EMPLOYEE_REGISTRATION: "employee-registration",
    EMPLOYER_REGISTRATION: "employer-registration",
  },
};

//PRIVATE
export const PRIVATE = {
  BASE_PATH: "/:userType",
  ADMIN: {
    ADMIN_BASE_PATH: ROLES.ADMIN,
    SUPER_ADMIN_BASE_PATH: ROLES.SUPER_ADMIN,
    PAGES: {
      INDEX: "dashboard",
      EMPLOYER: "employer",
      EMPLOYEE: "employee",
      APPLIED_JOBS: "applied-jobs",
      EMPLOYEE_DETAILS: "employee-details/:id",
      EMPLOYER_DETAILS: "employer-details/:id",
      SETTINGS: "settings",
      CHANGE_PASSWORD: "settings/change-password",
    },
  },
  EMPLOYER: {
    EMPLOYER_BASE_PATH: ROLES.EMPLOYER,
    PAGES: {
      PROFILE: "profile",
      JOBS: "jobs",
      CREATE_JOB: "create-job",
      EDIT_JOB: "edit-job",
      RESUMES: "resumes",
      SETTINGS: "settings",
      CHANGE_PASSWORD: "settings/change-password",
    },
  },
  EMPLOYEE: {
    EMPLOYEE_BASE_PATH: ROLES.EMPLOYEE,
    PAGES: {
      PROFILE: "profile",
      SETTINGS: "settings",
      CHANGE_PASSWORD: "settings/change-password",
    },
  },
};

export const ERROR = {
  ERROR_403: "/403",
  CATCH_ALL: "*",
};
