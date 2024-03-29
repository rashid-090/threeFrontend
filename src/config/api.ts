enum API {
  LOGIN = "/auth/login",
  SIGNUP = "/auth/signup",
  LOGOUT = "/auth/logout",
  FORGOT_PASSWORD = "/auth/forgot-password",
  RESET_PASSWORD = "/auth/reset-password",
  VALIDATE_RESET_PASSWORD = "/auth/reset-password/validate",
  REFRESH_TOKEN = "/auth/token",
  PROFILE = "/user/profile",
  LIST_NEW_USER = 'admin/user/new-users/list?page=&size=&search=&sort={"createdAt":"DESC"}&filters=',
  ADMIN_APPROVE_USER = '/admin/user/:id/approve',
  ADMIN_DECLINE_USER = '/admin/user/:id/decline',
  LIST_USERS = '/admin/user/?page=&size=&search=&sort={"updatedAt":"DESC"}',
  ADD_USER = "/admin/user/",
  GET_USER = "/admin/user/:id",
  EDIT_USER = "/admin/user/:id",
  DELETE_USER = "/admin/user/:id/archive",
  BULK_DELETE = "/admin/user/bulk-action",
  BULK_ROLE = "/admin/user/change-role",
  GET_USER_ROLES = "/form-value/user-types",

  GET_PROFILE = "/account/profile",
  EDIT_PROFILE = "/account/profile",
  EDIT_ADMIN_PROFILE = "/admin/profile",
  CHANGE_PASSWORD = "/account/change-password",

  LIST_ROLES = "admin/role?page=",
  ADD_ROLE = "/admin/role",
  GET_ROLE = "/admin/role/:name",
  EDIT_ROLE = "/admin/role/:name",
  DELETE_ROLE = "/admin/role/:id",

  LIST_POSTS = '/content/?sort={"createdAt":"DESC"}&topicId=&sectorId=&search=&dateFrom=&size=10&page=&authorId=&type=',
  ADD_POST = "/content/",
  GET_POST = "/content/:id",
  EDIT_POST = "/content/:id",
  APPROVE_POST = "/content/:id/approve",
  PUBLISH_POST = "/content/:id/publish",
  DELETE_POST = "/content/:id",
  DELETE_COMMENT= "/admin/comment/:id",
  AUTHOR_DROPDOWN = "/form-value/admin/author-dropdown",
  LANGUAGE_LIST = "/form-value/admin/post/language",
  GET_COMMENT = "/admin/comment/:id",

  GET_FEATURED_IMAGE = '/content/featured-image/:id?sort={"createdAt":"DESC"}',
  UPLOAD_FEATURED_IMAGE = "/admin/files/",
  SET_FEATURED_IMAGE = "/content/featured-image",
  POST_BULK_DELETE = "/content/bulk-action",

  LIST_TOPICS = '/admin/topic/?size=&sort={"updatedAt":"desc"}&search=&page=',
  TOPIC_DROPDOWN = "/form-value/admin/topic-dropdown",
  TOPIC_POST = '/form-value/admin/post/topic/?size=&sort={"updatedAt":"desc"}&search=&page=',
  ADD_TOPIC = "/admin/topic/",
  GET_TOPIC = "/admin/topic/:id",
  EDIT_TOPIC = "/admin/topic/:id",
  DELETE_TOPIC = "/admin/topic/:id",
  LOCATION_LIST = "/form-value/admin/post/location",

  LIST_SECTORS = '/sectors/?size=&sort={"updatedAt":"desc"}&search=&page=',
  SECTOR_DROPDOWN = "/form-value/admin/sector-dropdown",
  SECTORS_POST = '/form-value/admin/post/sector?size=&sort={"updatedAt":"desc"}&search=&page=',
  ADD_SECTOR = "/admin/sector/",
  GET_SECTOR = "/admin/sector/:id",
  EDIT_SECTOR = "/admin/sector/:id",
  DELETE_SECTOR = "/admin/sector/:id",
  THEME = "/form-value/themes/",

  GET_LOCATION = "/form-value/admin/user/location",

  GET_ROLES = "/form-value/admin/user/role",
  GET_ROLE_PERMISSION = "/form-value/admin/role/permission",

  GET_COMPLAINT_TYPE="/form-value/complaint-categories",
  GET_VEHICLE_TYPE="/form-value/vehicle-types",

  GET_PERMISSIONS = "/permissions/role/:id",

  // LIST_TAGS = '/admin/tag/?size=&sort={"updatedAt":"desc"}&search=&page=',
  // TAGS_Post = '/form-value/admin/post/tag?search=&size=&sort={"updatedAt":"desc"}&page=',
  // ADD_TAG = "/admin/tag/",
  // GET_TAG = "/admin/tag/:id",
  // EDIT_TAG = "/admin/tag/:id",
  // DELETE_TAG = "/admin/tag/:id",

  LIST_SUBSCRIPTIONS = '/admin/subscription/users/list?size=&sort={"createdAt":"desc"}&search=&page=',
  GET_SUBSCRIPTION = "/admin/subscription/:id",
  GET_SUBSCRIBED_USER = "/admin/subscription/user/:id",
  EDIT_SUBSCRIPTION = "/admin/user/color/:id",
  DELETE_SUBSCRIPTION = "/admin/subscription/:id",


  GET_DASHBOARD_DATA = "/admin/dashboard",
  GET_DASHBOARD_REVENUE = "/admin/dashboard/revenue?type=monthly",

  ADD_LOCATION = "/admin/location/",
  GET_LOCATION_BY_ID = "/admin/location/:id",
  EDIT_LOCATION = "/admin/location/:id",
  DELETE_LOCATION = "/admin/location/:id",
  LIST_LOCATIONS="/admin/location/tree",

  ADD_COMPLAINT = "/admin/complaint",
  GET_COMPLAINT_BY_ID = "/admin/complaint/:id",
  EDIT_COMPLAINT = "/admin/complaint/:id",
  DELETE_COMPLAINT = "/admin/complaint/:id/archive",
  LIST_COMPLAINT=`/admin/complaint?size=&sort={"createdAt":"desc"}&search=&page=`,


  GET_MEDIA_FILES = '/admin/media?size=&sort={"updatedAt":"desc"}&search=&page=',
  DELETE_MEDIA_FILES = '/admin/files/delete-file',

  // Employee APIs
  UPDATE_EMPLOYEE_PROFILE = '/employee/resume',
  GET_EMPLOYEE_PROFILE = "/account/profile",
  APPLY_JOB = "/employee/job",

  // employer APIs
  CREATE_JOB="/employer/job",
  LIST_JOB="/employer/job",
  LIST_RESUME="/employer/user?role=Employee&search=&filters=",
  GET_RESUME="/employer/user/:id",

  // SuperAdmin APIs
  LIST_EMPLOYER="/admin/user?role=",
  GET_EMPLOYER="/admin/user/:id",
  GET_APPLIEND_JOB="/admin/jobs/applied",
  GET_EXCEL="/admin/user/excel",
  GET_EXCEL_EMPLOYEE="/admin/user/excel-employee",
  GET_APPLIED_XL="/admin/user/excel-applied",

  // Public routes
  LIST_PUBLIC_JOB="/public/job?search=",
  LIST_PUBLIC_JOB_DETAILS="/public/job/:id",
  UPDATE_PROFILE_IMAGE = "/account/profile",
}

const publicEndpoints = [
  API.FORGOT_PASSWORD,
  API.LOGIN,
  API.RESET_PASSWORD,
  API.LOGOUT,
  API.REFRESH_TOKEN,
  API.RESET_PASSWORD,
  API.SIGNUP,
  API.VALIDATE_RESET_PASSWORD,
];

export { publicEndpoints };

export default API;
