"use client";

import { Layout, Menu } from "antd";
import { useState } from "react";
import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const role = USER_ROLE.STUDENT;

  return (
    <div>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <div className="text-2xl font-semibold text-white flex items-center justify-center my-3">
          PH_UNIVERSITY
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems(role)}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
