'use client';


import { Button, Input, Space, message } from "antd";
import styles from "./page.module.css";

export default function TipPage() {
  const handleSubmit = () => {
    message.success('提交成功！');
  };

  return (
      <div className={styles.tipContainer}>
        <h1 className={styles.title}>小海云提示</h1>
        
        <div className={styles.inputGroup}>
            <p className={styles.tipText}>请输入您的邮箱，小海云会向该邮箱发送邮件，请及时查看。</p>
          <Space.Compact style={{ width: '100%' }}>
            <Input 
              placeholder="当前通知邮箱" 
              size="large"
              type="email"
              disabled
            />
            <Input 
              placeholder="请输入您的邮箱" 
              size="large"
              type="email"
            />
            <Button 
              type="primary" 
              size="large"
              onClick={handleSubmit}
              className={styles.submitButton}
            >
              提交
            </Button>
          </Space.Compact>
        </div>
      </div>
  );
}