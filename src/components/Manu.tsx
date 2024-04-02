"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  AppstoreOutlined,
  MailOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

import { Menu } from "antd";

const Manu: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isReady, setIsReady] = useState(false);
  const [current, setCurrent] = useState("about");

  useEffect(() => {
    if (pathname === "/") {
      setCurrent("about");
    } else {
      setCurrent(pathname.slice(1));
    }

    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return null;
  }

  const items: MenuProps["items"] = [
    {
      key: "about",
      icon: <MailOutlined />,
      label: "About me",
    },
    {
      label: "TO_DO_LATER",
      key: "app",
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: "Projects",
      key: "projects",
      icon: <BarChartOutlined />,
      children: [
        {
          label: "Project 1",
          key: "project_1",
        },
        {
          label: "Project 2",
          key: "project_2",
        },
      ],
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);

    if (e.key === "about") {
      router.push("/about");
    }
    if (e.key === "project_1") {
      router.push("/project_1");
    }
    if (e.key === "project_2") {
      router.push("/project_2");
    }
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ padding: "1rem 1rem 0.3rem 5rem" }}
    />
  );
};

export default Manu;
