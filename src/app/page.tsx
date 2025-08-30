"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/components/container";
import { Button, Statistic, Row, Col } from "antd"; // 導入 Button 和 Statistic
import type { CountdownProps } from 'antd';
import Link from "next/link";

// 倒數計時的結束時間點
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // 2天零30秒後

const onFinish: CountdownProps['onFinish'] = () => {
  console.log('finished!');
};

export default function Home() {
  return (
    <Container title="小海云">
      <div className={styles.main}>
        {/* 主要視覺區域 */}
        <div className={styles.hero}>
          <img src="https://s2.loli.net/2025/05/28/rHvJMm9PzCW4gOD.png" alt="Logo" className={styles.logo} />
          
          <h1 className={styles.title}>小海云 - 网盘</h1>
          
          <p className={styles.description}>
           一个基于腾讯云cos储存的网盘系统，后端由go开发，前端使用vue+element进行开发，管理系统是next进行开发，集成了很多技术栈
          </p>
          
          <div className={styles.countdownWrapper}>
            <Statistic.Countdown 
              title="距离bata版上线还有" 
              value={deadline} 
              onFinish={onFinish}
              format="D 天 H 时 m 分 s 秒"
            />
          </div>

          <Button type="primary" size="large" className={styles.ctaButton}  >
            <Link href="/login">立即体验</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}