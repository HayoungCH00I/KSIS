/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Archive from './pages/Archive';
import Activities from './pages/Activities';
import Community from './pages/Board';
import { ROUTES } from './constants';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.ARCHIVE} element={<Archive />} />
          <Route path={ROUTES.ACTIVITIES} element={<Activities />} />
          <Route path={ROUTES.COMMUNITY} element={<Community />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
