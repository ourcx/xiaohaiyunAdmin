'use client';
import { Button, Col, Form, Input, Row, Select, Space, Table, TableProps, Tag } from "antd";
import styles from "./page.module.css";
import Container from "@/components/container"




export default function LoginPage() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };
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
          <Button type="link" onClick={handleFileEdit}>编辑{record.name.slice(0,5)+"...."}</Button>
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
      name: 'John Brown',
      size: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['图片'],
    },
    {
      key: '2',
      name: 'Jim Green',
      size: 42,
      address: 'London No. 1 Lake Park',
      tags: ['视频'],
    },
    {
      key: '3',
      name: 'Joe Black',
      size: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['文档'],
    },
    {
      name: 'Jon Snow',
      size: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['文件夹'],
      key: '4',
    }
  ];

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
        <Table<DataType> columns={columns} dataSource={data} scroll={{ x: 1000 }} />
      </div>
    </Container>
  );
}
