import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import DashBoardPage from "./pages/DashBoardPage";
import DocManagementPage from "./pages/documents/DocManagementPage";
import CategoryManagementPage from "./pages/CategoryManagementPage";
import UserManagementPage from "./pages/UserManagementPage";
import NewDocPage from "./pages/documents/NewDocPage";
import EditDocPage from "./pages/documents/EditDocPage";
import ApprovedLogPage from "./pages/history/ApprovedLogPage";
import PendingPostPage from "./pages/pending/PendingPostPage";
import PendingAction from "./pages/pending/PendingAction";
import AuthPage from "./pages/auth/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import HistoryView from "./pages/history/HistoryView";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="dashboard" element={<DashBoardPage />} />
        <Route path="doc-manage" element={<DocManagementPage />} />
        <Route path="category-manage" element={<CategoryManagementPage />} />
        <Route path="user-manage" element={<UserManagementPage />} />
        <Route path="new-doc" element={<NewDocPage />} />
        <Route path="edit-doc/:id" element={<EditDocPage />} />
        <Route path="approved-log" element={<ApprovedLogPage />} />
        <Route path="pending-post" element={<PendingPostPage />} />
        <Route path="pending-action/:id" element={<PendingAction />} />
        <Route path="history-view/:id" element={<HistoryView />} />
      </Route>
      <Route path="/login" element={<AuthPage />} />
      <Route path="/" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
