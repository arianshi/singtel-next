import React, {memo} from 'react';
import Thead from "./Thead";
import Tbody from "./Tbody";

import styles from './index.module.css';

interface TableProps {
  showHead: boolean;
  columns: any;
  data: any;
  rowSelection: any
}

const Table: React.FC<TableProps> = ({ rowSelection, showHead, columns, data }) => {
  return <div className={styles.table}>
    {showHead && <Thead columns={columns}/>}
    <Tbody rowSelection={rowSelection} columns={columns} data={data}/>
  </div>;
};

export default memo(Table);
