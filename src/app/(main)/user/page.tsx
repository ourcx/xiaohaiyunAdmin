'use client';

import Container from "@/components/container";
import { Button, Flex, Statistic, StatisticProps, Table, TableColumnsType, TableProps } from "antd";
import Head from "next/head";
import CountUp from 'react-countup';
import style from './page.module.css'
import { useState } from "react";

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));
export default function UserListPage() {
  const formatter: StatisticProps['formatter'] = (value) => (
    <CountUp end={value as number} separator="," />
  );

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;
  return (
    <Container>
      <div className={style.main}>
        <div className={style.title}>
          <Statistic title="用户列表" value={112893} formatter={formatter} />
        </div>
        <div className={style.container}>

          <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : "请选择用户进行批量操作"}

          <Table<DataType> rowSelection={rowSelection} columns={columns} dataSource={dataSource} style={{ width: '100%' }} />
        </div>
      </div>
    </Container>
  );
}
