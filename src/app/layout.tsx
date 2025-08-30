// app/layout.tsx
import ThemeProvider from '@/components/ThemeProvider';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
// import { ThemeProvider } from '...'; // 假设你有主题提供者

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "小海网盘系统",
  description: "管理系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <ThemeProvider>
          <AntdRegistry>
            {/* <ThemeProvider> */}
            {children} {/* 直接渲染子路由，不做任何额外包裹 */}
            {/* </ThemeProvider> */}
          </AntdRegistry>
        </ThemeProvider>

      </body>
    </html>
  );
}