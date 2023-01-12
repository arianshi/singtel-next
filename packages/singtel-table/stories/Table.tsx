import React, { useState } from 'react';
import SingtelTable from 'singtel-table';
import './table.css';
interface TableProps {
  /**
   * Is this the principal call to action on the page?
   */
  showHead?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Table = ({ showHead = false, ...props }: TableProps) => {
  const data = [
    {
      id: 1,
      price: 170000,
      operator: 'Aelcom Axiatavvv',
      display: 'CELCOM / My Celcom / 502 19',
      availability: 'Yes',
    },
    {
      id: 2,
      price: 250000,
      operator: 'HiGiTelecom',
      display: 'DiGi 1800 / DiGi /  MYMY18',
      availability: 'Yes',
    },
    {
      id: 3,
      price: 160000,
      operator: 'Kaxis (LTE)',
      display: 'U Mobile / MYS 18 / MY 18',
      availability: 'Yes',
    },
    {
      id: 4,
      price: 460000,
      operator: 'DMobile (LTE)',
      display: 'U Mobile / MYS 18 / MY 18',
      availability: 'Yes',
    },
  ];
  const columns = [
    {
      title: 'Operator',
      key: 'operator',
      dataIndex: 'operator',
      sortDirections: ['descend'],
      render: (e: any) => <span>{e}</span>,
      sorter: (
        a: { operator: string | any[] },
        b: { operator: string | any[] }
      ) => {
        return a.operator.length - b.operator.length;
      },
    },
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
      sortDirections: ['ascend'],
      render: (e: any) => <span>{e}</span>,
      sorter: (a: { price: number }, b: { price: number }) => {
        return a.price - b.price;
      },
    },
    {
      title: 'Headset Display',
      key: 'display',
      dataIndex: 'display',
      render: (e: any) => <span>{e}</span>,
    },
    {
      title: '3G Availability',
      key: 'availability',
      dataIndex: 'availability',
      render: (e: any) => <span>{e}</span>,
    },
  ];
  const [type, setType] = useState('radio');
  const [selectedRowKeys, setSelectedRowKeys] = useState(['0']);
  return (
    <SingtelTable
      showHead
      rowSelection={{
        type,
        selectedRowKeys,
        onSelect: (selectedRowKeys: any, selectedRows: any) => {
          console.log('selectedRowKeys:', selectedRowKeys, selectedRows);
        },
      }}
      columns={columns}
      data={data}
    />
  );
};
