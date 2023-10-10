import React from "react";
import { Layout, Menu } from "antd";
import Sidebar from "@/component/UI/Layout/Sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <div className="min-h-[100vh] bg-secondary">
        <Sidebar></Sidebar>
      </div>

      <div className="min-h-[100vh]">{children}</div>
    </Layout>
  );
};

export default DashboardLayout;
