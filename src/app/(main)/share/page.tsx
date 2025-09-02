'use client';
import { Button, Col, Form, Input, Row, Select, Space, Table, TablePaginationConfig, TableProps, Tag, Tooltip } from "antd";
import styles from "./page.module.css";
import Container from "@/components/container"
import { useEffect, useState } from "react";



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
    form.resetFields();
  };

  const handleFileEdit = () => {
    console.log("编辑文件")
  }


  const copy = (e: string) => {
    //复制链接
    navigator.clipboard.writeText(e).then(() => {
      console.log('复制成功！');
    })
  }

  interface DataType {
    key: string;
    name: string;
    size: number;
    link: string;
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
      title: '分享链接',
      dataIndex: 'link',
      key: 'link',
      ellipsis: true,
      render: (text: string) => {
        return (
          <Tooltip title={text} placement="topLeft" >
            <span style={{ cursor: "pointer" }} onClick={() => copy(text)}>{text}</span>
          </Tooltip>
        )
      }
      //可以触发点击
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
      link: 'file:///D:/工作文档/2023项目/项目计划书.docx',
      tags: ['文档']
    },
    {
      key: '2',
      name: '产品演示.mp4',
      size: 1024,
      link: 'file:///E:/视频资料/产品介绍/产品演示.mp4',
      tags: ['视频']
    },
    {
      key: '3',
      name: '团队合影.jpg',
      size: 8,
      link: 'file:///C:/图片/公司活动/团队合影.jpg',
      tags: ['图片']
    },
    {
      key: '4',
      name: '客户资料',
      size: 256,
      link: 'file:///D:/工作文档/客户管理',
      tags: ['文件夹']
    },
    {
      key: '5',
      name: '财务报表.xlsx',
      size: 64,
      link: 'file:///F:/财务/2023年/财务报表.xlsx',
      tags: ['表格']
    },
    {
      key: '6',
      name: '项目汇报.pptx',
      size: 128,
      link: 'file:///D:/工作文档/汇报材料/项目汇报.pptx',
      tags: ['演示文稿']
    },
    {
      key: '7',
      name: '背景音乐.mp3',
      size: 16,
      link: 'file:///E:/媒体资源/音频/背景音乐.mp3',
      tags: ['音频']
    },
    {
      key: '8',
      name: '设计素材.zip',
      size: 512,
      link: 'file:///C:/下载/设计资源/设计素材.zip',
      tags: ['压缩包']
    },
    {
      key: '9',
      name: '网站首页.html',
      size: 4,
      link: 'file:///D:/项目代码/官网/网站首页.html',
      tags: ['网页']
    },
    {
      key: '10',
      name: '系统配置.ini',
      size: 2,
      link: 'file:///C:/程序/设置/系统配置.ini',
      tags: ['配置文件']
    },
    {
      key: '11',
      name: '用户手册.pdf',
      size: 48,
      link: 'file:///D:/产品文档/用户手册.pdf',
      tags: ['电子书']
    },
    {
      key: '12',
      name: '图标素材.ai',
      size: 96,
      link: 'file:///E:/设计文件/矢量图/图标素材.ai',
      tags: ['矢量图']
    },
    {
      key: '13',
      name: '数据库备份.bak',
      size: 2048,
      link: 'file:///F:/系统备份/2023-10/数据库备份.bak',
      tags: ['备份']
    },
    {
      key: '14',
      name: '项目源码',
      size: 1024,
      link: 'file:///D:/开发/主项目',
      tags: ['文件夹']
    },
    {
      key: '15',
      name: '数据分析.py',
      size: 12,
      link: 'file:///D:/开发/脚本/数据分析.py',
      tags: ['代码']
    },
    {
      key: '16',
      name: '界面设计.psd',
      size: 512,
      link: 'file:///E:/设计文件/UI/界面设计.psd',
      tags: ['设计稿']
    },
    {
      key: '17',
      name: '系统日志.log',
      size: 8,
      link: 'file:///C:/程序/日志/系统日志.log',
      tags: ['日志']
    },
    {
      key: '18',
      name: '字体文件.ttf',
      size: 4,
      link: 'file:///C:/Windows/Fonts/字体文件.ttf',
      tags: ['字体']
    },
    {
      key: '19',
      name: '浏览器插件.crx',
      size: 6,
      link: 'file:///C:/下载/扩展/浏览器插件.crx',
      tags: ['插件']
    },
    {
      key: '20',
      name: '自动化脚本.bat',
      size: 2,
      link: 'file:///D:/工具脚本/自动化脚本.bat',
      tags: ['脚本']
    }
  ];
  //这里添加自己的后台数据，使用useEffect

  const [linkOptions, setLinkOptions] = useState<{ value: string; label: string }[]>([]);
  useEffect(() => {
    const links = data.map(item => ({ value: item.link, label: item.link.slice(0, 20)+"..." }));
    setLinkOptions(links);
  }, []);

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
                <Form.Item name="user" label="链接" >
                  <Select options={linkOptions} className={styles.xh_Allfile_select} placeholder="请选择" showSearch></Select>
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
