import React, {memo} from 'react';
import Thead from "./Thead";
import Tbody from "./Tbody";

import styles from './index.module.css';

interface TableProps {
  showHead: boolean;
  columns: any;
  data: any;
  rowSelection?: {
    type: 'checkbox',
    selectedRowKeys: [],
    onSelect: () => void,
  } | any;
}

const Table: React.FC<TableProps> = ({ rowSelection, showHead, columns, data }) => {
  console.log('reader Table')
  return <div className={styles.table}>
    {showHead && <Thead rowSelection={rowSelection} columns={columns} data={data}/>}
    <Tbody rowSelection={rowSelection} columns={columns} data={data}/>
  </div>;
};

export default memo(Table);
