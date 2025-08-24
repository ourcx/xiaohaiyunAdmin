'use client';

import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "@/app/layout.module.css"
import Image from "next/image";
import ThemeProvider from '@/components/ThemeProvider';
import { useRouter, usePathname } from 'next/navigation'; 
const { Header, Content, Sider } = Layout;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const items1 = [
  { key: '0', label: '主页' },
  { key: '1', label: 'github' },
  { key: '2', label: '关于' },
  { key: '3', label: '登出' },
];

const items = [
  {
    key: `file`,
    // icon: React.createElement(icon),
    label: `文件管理`,
    children: [
      { key: '1', label: '所有文件' },
      { key: '2', label: '回收站' },
      { key: '3', label: '增添文件' },
    ]
  },
  {
    key: `share`,
    // icon: React.createElement(icon),
    label: `文件分享`,
    children: [
      { key: '4', label: '分享文件' },
      { key: '5', label: '分享链接' },
      { key: '6', label: '全局分享设置' },
    ]
  },
  {
    key: `setting`,
    // icon: React.createElement(icon),
    label: `系统设置`,
    children: [
      { key: '7', label: '基本设置' },
      { key: '8', label: '安全设置' },
      { key: '9', label: '通知设置' },
    ]
  },
  {
    key: `user`,
    // icon: React.createElement(icon),
    label: `用户管理`,
    children: [
      { key: '10', label: '用户列表' },
      { key: '11', label: '封禁用户' },
      { key: '12', label: '用户会员' },
      { key: '13', label: '用户隐私' },
    ]
  },
  {
    key: `logs`,
    // icon: React.createElement(icon),
    label: `系统日志`,
    children: [
      { key: '13', label: '操作日志' },
      { key: '14', label: '登录日志' },
      { key: '15', label: '错误日志' },
    ]
  },
]



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const router = useRouter();
  const handleMenuClick = (e: any) => {
    router.push(e.key);
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AntdRegistry>
          <ThemeProvider>
            <Layout>
              <Header className={styles.header}>
                <div className={styles.logoContainer}>
                  <Image
                    src="https://s2.loli.net/2025/03/24/nDA7s16FJ4Rytmf.png"
                    alt="logo"
                    width={32}
                    height={32}
                    className={styles.logoImage}
                  />
                  <div className={styles.logoText}>
                    小海网盘管理系统
                  </div>
                </div>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  items={items1}
                  className={styles.menu}
                />
              </Header>
              <Layout>
                <Sider width={200} style={{ background: colorBgContainer }}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderInlineEnd: 0 }}
                    items={items}
                    onClick={handleMenuClick}
                  />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                  <Breadcrumb
                    items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
                    style={{ margin: '16px 0' }}
                  />
                  <Content
                    style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 280,
                      background: colorBgContainer,
                      borderRadius: borderRadiusLG,
                    }}
                  >
                    {children}
                  </Content>
                </Layout>
              </Layout>
            </Layout>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}