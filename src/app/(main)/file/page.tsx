'use client';
import { Button, Col, Form, Input, Row, Select, Space, Table, TablePaginationConfig, TableProps, Tag, Tooltip } from "antd";
import styles from "./page.module.css";
import Container from "@/components/container"
import { useState } from "react";




export default function LoginPage() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    showSizeChanger: true,
    total: 0,
  })
  const handleSearchReset = () => {
    // 重置表单字段
    form.resetFields();
  };

  const handleFileEdit = () => {
    console.log("编辑文件")
  }

  interface DataType {
    key: string;
    name: string;
    size: number;
    address: string;
    tags: string[];
  }

  const columns: TableProps<DataType>['columns'] = [
    {
      title: '文件名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '大小',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: '位置',
      dataIndex: 'address',
      key: 'address',
      ellipsis: true,
      render: (text: string) => {
        return <Tooltip title={text} placement="topLeft">{text}</Tooltip>
      }
    },
    {
      title: '类型',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length >= 3 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={handleFileEdit}>编辑{record.name.slice(0, 5) + "...."}</Button>
          <Button type="link" danger >删除</Button>
        </Space>
      ),
    },
  ];

  const options = [
    { value: 'doc', label: '文档' },
    { value: 'img', label: '图片' },
    { value: 'video', label: '视频' },
    { value: 'audio', label: '音频' },
    { value: 'other', label: '其他' },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: '项目计划书.docx',
      size: 32,
      address: 'D:/工作文档/2023项目',
      tags: ['文档']
    },
    {
      key: '2',
      name: '产品演示.mp4',
      size: 1024,
      address: 'E:/视频资料/产品介绍',
      tags: ['视频']
    },
    {
      key: '3',
      name: '团队合影.jpg',
      size: 8,
      address: 'C:/图片/公司活动',
      tags: ['图片']
    },
    {
      key: '4',
      name: '客户资料',
      size: 256,
      address: 'D:/工作文档/客户管理',
      tags: ['文件夹']
    },
    {
      key: '5',
      name: '财务报表.xlsx',
      size: 64,
      address: 'F:/财务/2023年',
      tags: ['表格']
    },
    {
      key: '6',
      name: '项目汇报.pptx',
      size: 128,
      address: 'D:/工作文档/汇报材料',
      tags: ['演示文稿']
    },
    {
      key: '7',
      name: '背景音乐.mp3',
      size: 16,
      address: 'E:/媒体资源/音频',
      tags: ['音频']
    },
    {
      key: '8',
      name: '设计素材.zip',
      size: 512,
      address: 'C:/下载/设计资源',
      tags: ['压缩包']
    },
    {
      key: '9',
      name: '网站首页.html',
      size: 4,
      address: 'D:/项目代码/官网',
      tags: ['网页']
    },
    {
      key: '10',
      name: '系统配置.ini',
      size: 2,
      address: 'C:/程序/设置',
      tags: ['配置文件']
    },
    {
      key: '11',
      name: '用户手册.pdf',
      size: 48,
      address: 'D:/产品文档',
      tags: ['电子书']
    },
    {
      key: '12',
      name: '图标素材.ai',
      size: 96,
      address: 'E:/设计文件/矢量图',
      tags: ['矢量图']
    },
    {
      key: '13',
      name: '数据库备份.bak',
      size: 2048,
      address: 'F:/系统备份/2023-10',
      tags: ['备份']
    },
    {
      key: '14',
      name: '项目源码',
      size: 1024,
      address: 'D:/开发/主项目',
      tags: ['文件夹']
    },
    {
      key: '15',
      name: '数据分析.py',
      size: 12,
      address: 'D:/开发/脚本',
      tags: ['代码']
    },
    {
      key: '16',
      name: '界面设计.psd',
      size: 512,
      address: 'E:/设计文件/UI',
      tags: ['设计稿']
    },
    {
      key: '17',
      name: '系统日志.log',
      size: 8,
      address: 'C:/程序/日志',
      tags: ['日志']
    },
    {
      key: '18',
      name: '字体文件.ttf',
      size: 4,
      address: 'C:/Windows/Fonts',
      tags: ['字体']
    },
    {
      key: '19',
      name: '浏览器插件.crx',
      size: 6,
      address: 'C:/下载/扩展',
      tags: ['插件']
    },
    {
      key: '20',
      name: '自动化脚本.bat',
      size: 2,
      address: 'D:/工具脚本',
      tags: ['脚本']
    }
  ];
  //这里添加自己的后台数据，使用useEffect

  const onTableChange = (pagination: TablePaginationConfig) => {
    setPagination({
      current: pagination.current || 1, // 提供默认值
      pageSize: pagination.pageSize || 10,
      showSizeChanger: pagination.showSizeChanger as boolean,
      total: pagination.total || 0,
    });
  }
  return (
    <Container>
      <div className={styles.xh_Allfile}>
        <div >
          <Form
            name="search"
            form={form}
            layout="inline"
            onFinish={onFinish}
            initialValues={{
              price: {
                number: 0,
                currency: 'rmb',
              },
            }}
            className={styles.xh_Allfile_header}
          >
            <Row gutter={24} style={{ width: '100%' }}>
              <Col span={7}>
                <Form.Item name="name" label="名称" >
                  <Input placeholder="请输入文件名称"  ></Input>
                </Form.Item>
              </Col>
              <Col span={7}>
                <Form.Item name="user" label="用户" >
                  <Input placeholder="请输入用户名" ></Input>
                </Form.Item>
              </Col>
              <Col span={7}>
                <Form.Item name="type" label="类型" >
                  <Select options={options} className={styles.xh_Allfile_select} placeholder="请选择" showSearch></Select>
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item className={styles.xh_Allfile_btns} >
                  <Space>
                    <Button type="primary" htmlType="submit">
                      搜索
                    </Button>
                    <Button htmlType="submit" onClick={handleSearchReset}>
                      清空
                    </Button>
                  </Space>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <Table<DataType>
          columns={columns}
          dataSource={data}
          pagination={{
            ...pagination,
            showTotal: () => `共 ${pagination.total} 条数据`
          }}
          onChange={onTableChange}
          scroll={{ x: '100%', y: 45 * 10 }}
        />
      </div>
    </Container>
  );
}
