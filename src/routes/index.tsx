import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PUBLIC, PRIVATE, ERROR, AUTH } from "./routes";
import { useAppSelector } from "../store/hooks";
import Loader from "../components/common/loader";

// Layout components
const AuthLayout = lazy(() => import("../layouts/authLayout"));
const AdminLayout = lazy(() => import("../layouts/adminLayout"));
const PublicLayout = lazy(() => import("../layouts/publicLayout"));
const EmployerLayout = lazy(() => import("../layouts/employerLayout"));
const EmployeeLayout = lazy(() => import("../layouts/employeeLayout"));

// Auth components
const Login = lazy(() => import("../pages/auth/login"));
const Forgot = lazy(() => import("../pages/auth/forgot"));
const ResetPassword = lazy(() => import("../pages/auth/reset-password"));
const EmplyeeRegistration = lazy(() => import("../pages/auth/employeeRegister"));
const EmplyerRegistration = lazy(() => import("../pages/auth/employerRegister"));

// Admin components
const AdminDashboard = lazy(() => import("../pages/admin/Dashboard"));
const EmpoyerData = lazy(() => import("../pages/admin/employer"));
const EmpoyeeData = lazy(() => import("../pages/admin/employee"));
const AppliedJobs = lazy(() => import("../pages/admin/appliedJobs"));
const EmployeeDetail = lazy(() => import("../pages/admin/employeeDetails"));
const EmployerDetail = lazy(() => import("../pages/admin/employerDetails"));

// Public Components
const PublicLanding = lazy(() => import("../pages/public/home"));
const PublicJobs = lazy(() => import("../pages/public/jobs"));
const Jobsdetails = lazy(() => import("../pages/public/jobs/details"));
const EmployerResumes = lazy(() => import("../pages/public/resume"));
const EmployerResumesDetails = lazy(() => import("../pages/public/resume/details"));
const AboutUs = lazy(() => import("../pages/public/aboutUs/AboutUs"));
const ContactUs = lazy(() => import("../pages/public/contact-us/index"));

// Employer components
const EmployerProfile = lazy(() => import("../pages/employer/profile"));
const EmployerJobs = lazy(() => import("../pages/employer/jobs"));
const EmployerCreateJobs = lazy(() => import("../pages/employer/jobs/create"));

// Employer components
const EmployeeProfile = lazy(() => import("../pages/employee/employeeProfile"));

const MainRoute: React.FC<any> = () => {
  const { isAppInitialized, user } = useAppSelector((state: any) => state.user);

  if (!isAppInitialized) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Auth Routes  Starts*/}
        <Route path={AUTH.BASE_PATH} element={<AuthLayout />}>
          <Route
            path={AUTH.PAGES.LOGIN}
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path={AUTH.PAGES.FORGOT_PASSWORD}
            element={
              <Suspense fallback={<Loader />}>
                <Forgot />
              </Suspense>
            }
          />
          <Route
            path={AUTH.PAGES.RESET_PASSWORD}
            element={
              <Suspense fallback={<Loader />}>
                <ResetPassword />
              </Suspense>
            }
          />
          <Route
            path={AUTH.PAGES.EMPLOYEE_REGISTRATION}
            element={
              <Suspense fallback={<Loader />}>
                <EmplyeeRegistration />
              </Suspense>
            }
          />
          <Route
            path={AUTH.PAGES.EMPLOYER_REGISTRATION}
            element={
              <Suspense fallback={<Loader />}>
                <EmplyerRegistration />
              </Suspense>
            }
          />
          <Route index element={<Navigate to={AUTH.PAGES.LOGIN} />} />
        </Route>
        {/* Auth Routes end */}

        {/* Admin Routes Starts */}
        <Route
          path={PRIVATE.ADMIN.SUPER_ADMIN_BASE_PATH}
          element={<AdminLayout />}
        >
          <Route
            path={PRIVATE.ADMIN.PAGES.INDEX}
            element={
              <Suspense fallback={<Loader />}>
                <AdminDashboard />
              </Suspense>
            }
          />
          <Route
            path={PRIVATE.ADMIN.PAGES.EMPLOYER}
            element={
              <Suspense fallback={<Loader />}>
                <EmpoyerData />
              </Suspense>
            }
          />
          <Route
            path={PRIVATE.ADMIN.PAGES.EMPLOYEE}
            element={
              <Suspense fallback={<Loader />}>
                <EmpoyeeData />
              </Suspense>
            }
          />
          <Route
            path={PRIVATE.ADMIN.PAGES.APPLIED_JOBS}
            element={
              <Suspense fallback={<Loader />}>
                <AppliedJobs />
              </Suspense>
            }
          />
          <Route
            path={PRIVATE.ADMIN.PAGES.EMPLOYEE_DETAILS}
            element={
              <Suspense fallback={<Loader />}>
                <EmployeeDetail />
              </Suspense>
            }
          />
          <Route
            path={PRIVATE.ADMIN.PAGES.EMPLOYER_DETAILS}
            element={
              <Suspense fallback={<Loader />}>
                <EmployerDetail />
              </Suspense>
            }
          />
          <Route index element={<Navigate to={PRIVATE.ADMIN.PAGES.INDEX} />} />
        </Route>
        {/* Admin Routes end */}

        {/* Public and user Layout start */}
        <Route path={PUBLIC.BASE_PATH} element={<PublicLayout />}>
          <Route
            path={PUBLIC.PAGES.LANDING}
            element={
              <Suspense fallback={<Loader />}>
                <PublicLanding />
              </Suspense>
            }
          />
           <Route
            path={PUBLIC.PAGES.JOBS}
            element={
              <Suspense fallback={<Loader />}>
                <PublicJobs />
              </Suspense>
            }
          />
          <Route
            path={PUBLIC.PAGES.JOBS_DETAILS}
            element={
              <Suspense fallback={<Loader />}>
                <Jobsdetails />
              </Suspense>
            }
          />
          <Route
            path={PUBLIC.PAGES.RESUMES}
            element={
              <Suspense fallback={<Loader />}>
                <EmployerResumes />
              </Suspense>
            }
          />
          <Route
            path={PUBLIC.PAGES.RESUME_DETAILS}
            element={
              <Suspense fallback={<Loader />}>
                <EmployerResumesDetails />
              </Suspense>
            }
          />
          <Route
            path={PUBLIC.PAGES.ABOUT_US}
            element={
              <Suspense fallback={<Loader />}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path={PUBLIC.PAGES.CONTACT_US}
            element={
              <Suspense fallback={<Loader />}>
                <ContactUs />
              </Suspense>
            }
          />
          <Route index element={<Navigate to={PUBLIC.PAGES.LANDING} />} />
        </Route>
        {/* Public and user Layout end */}

        {/* Employer Layout start */}
        <Route path={PRIVATE.EMPLOYER.EMPLOYER_BASE_PATH} element={<EmployerLayout />}>
          <Route
            path={PRIVATE.EMPLOYER.PAGES.PROFILE}
            element={
              <Suspense fallback={<Loader />}>
                <EmployerProfile />
              </Suspense>
            }
          />
          <Route
            path={PRIVATE.EMPLOYER.PAGES.JOBS}
            element={
              <Suspense fallback={<Loader />}>
                <EmployerJobs />
              </Suspense>
            }
          />
          <Route
            path={PRIVATE.EMPLOYER.PAGES.CREATE_JOB}
            element={
              <Suspense fallback={<Loader />}>
                <EmployerCreateJobs />
              </Suspense>
            }
          />
          
          <Route index element={<Navigate to={PRIVATE.EMPLOYER.PAGES.PROFILE} />} />
        </Route>
        {/* Employer Layout end */}

        {/* Employee Layout start */}
        <Route path={PRIVATE.EMPLOYEE.EMPLOYEE_BASE_PATH} element={<EmployeeLayout />}>
          <Route
            path={PRIVATE.EMPLOYEE.PAGES.PROFILE}
            element={
              <Suspense fallback={<Loader />}>
                <EmployeeProfile />
              </Suspense>
            }
          />
          
          <Route index element={<Navigate to={PRIVATE.EMPLOYEE.PAGES.PROFILE} />} />
        </Route>
        {/* Employee Layout end */}

        <Route index element={<Navigate to={PUBLIC.PAGES.LANDING} />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoute;
