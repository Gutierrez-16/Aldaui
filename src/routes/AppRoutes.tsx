import { Route, Routes } from "react-router-dom";
import Page from "../layouts/auth/page";
import LoginLayout from "../layouts/auth/loginl-layout";
import RecoverLayout from "../layouts/auth/recover-layout";
import { ToastProvider } from "../components/ui/ToastContext";
import ToastContainer from "../components/ui/ToastContainer";
import SignupLayout from "../layouts/auth/signup-layout";
import Dashboard from "../layouts/dashboard/dashboard";
import Home from "../layouts/landing/page";
import { ThemeProvider } from "../lib/theme-provider";  
import Chart from "../layouts/chart/chart";
import { Components } from "../layouts/landing/app/page";
import Button from "../layouts/landing/preview";
import AldauiInstallation from "../layouts/landing/app/get-start/AldauiInstallation";
import TailwindInstall from "../layouts/landing/app/tailwind/TailwindInstall";
import ConfigAldaui from "../layouts/landing/app/get-start/ConfigAldaui";

function AppRoutes() {
  return (
    <ThemeProvider> 
      <ToastProvider>
        <Routes>
          <Route path="/login" element={<Page />}>
            <Route index element={<LoginLayout />} />
            <Route path="recover" element={<RecoverLayout />} />
            <Route path="signup" element={<SignupLayout />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />

          <Route path="/ui" element={<Components />}>
            <Route path="buttons" element={<Button />} />
            <Route index element={<AldauiInstallation />} />
            <Route path="configuration" element={<ConfigAldaui />} />
            <Route path="install-tailwind" element={<TailwindInstall />} />
          </Route>
        </Routes>
        <ToastContainer />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default AppRoutes;
