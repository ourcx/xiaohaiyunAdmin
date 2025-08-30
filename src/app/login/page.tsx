"use client";

import React from 'react';
import { Card, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './login.module.css';

export default function LoginPage() {
  
  // 登录表单提交处理函数
  const onFinish = (values: any) => {
    console.log('表单提交成功: ', values);
    // 在这里处理登录逻辑，例如发送 API 请求
  };

  return (
    <div className={styles.loginContainer}>
      <Card 
        title="欢迎登录小海云后台" 
        headStyle={{ textAlign: 'center', fontSize: '20px', borderBottom: 0 }} 
        className={styles.loginCard}
      >
        <Form
          name="login_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入您的账号!' }]}
          >
            <Input 
              prefix={<UserOutlined className="site-form-item-icon" />} 
              placeholder="账号 / 邮箱" 
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入您的密码!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <a className={styles.forgotPassword} href="/forgot-password">
              忘记密码?
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.loginButton} block>
              登 录
            </Button>
          </Form.Item>
          
          <div className={styles.registerPrompt}>
            还没有账号? <a href="/register">立即注册</a>
          </div>
        </Form>
      </Card>
    </div>
  );
}
