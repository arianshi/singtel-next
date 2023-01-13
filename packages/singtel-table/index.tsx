import React, { memo, ReactNode, useEffect, useState } from 'react';
import Thead from './Thead';
import Tbody from './Tbody';

import styles from './index.module.css';

export interface ColumnsType<T> {
  title: string;
  key: string;
  dataIndex: string;
  render?: (record: T, records: T[]) => ReactNode;
  sorter?: (record: T, index: number, records: T[]) => void;
}

interface TableProps<T> {
  theme?: string | 'purple';
  showHead?: boolean;
  columns: Array<ColumnsType<T>>;
  data: T[];
  rowSelection?:
    | {
        type: 'checkbox';
        selectedRowKeys: [];
        onSelect: () => void;
      }
    | any;
}

const Table: React.FC<TableProps<any>> = ({
  rowSelection,
  showHead,
  columns,
  data,
  theme,
}) => {
  useEffect(() => {
    if (typeof theme === 'string') {
      document?.documentElement?.setAttribute(
        'singtel-table-theme',
        window.btoa(theme)
      );
    }
  }, [theme]);

  const [sortChecked, setSortChecked] = useState([]);
  const [copyNewData, setCopyNewData] = useState(data);
  return (
    <div className={styles.table}>
      {showHead && (
        <Thead
          rowSelection={rowSelection}
          columns={columns}
          oldData={data}
          newData={copyNewData}
          sortChecked={sortChecked}
          setSortChecked={setSortChecked}
          setCopyNewData={setCopyNewData}
        />
      )}
      <Tbody rowSelection={rowSelection} columns={columns} data={copyNewData} />
    </div>
  );
};

export default memo(Table);
