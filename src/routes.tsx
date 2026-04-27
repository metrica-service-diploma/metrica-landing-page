import { Route, Routes } from "react-router-dom";
import { routesList } from "./constants/routes";
import { HomePage } from "./pages/home-page";
import { Layout } from "./components/layout";
import { AboutPage } from "./pages/about-page";
import { ContactsPage } from "./pages/contacts-page";
import { ServicesPage } from "./pages/services-page";

export const routes = (
  <Routes>
    <Route element={<Layout />}>
      <Route path={routesList.Home} element={<HomePage />} index={true} />
      <Route path={routesList.About} element={<AboutPage />} />
      <Route path={routesList.Contacts} element={<ContactsPage />} />
      <Route path={routesList.Services} element={<ServicesPage />} />
    </Route>
  </Routes>
);
