import React from 'react';
import Thead from "./Thead";
import Tbody from "./Tbody";

import styles from './index.module.css';

interface TableProps {
  columns: any;
  dataSource: any;
}

const Table: React.FC<TableProps> = ({ columns, dataSource }) => {
  return <div className={styles.table}>
    <Thead columns={columns}/>
    <Tbody columns={columns} dataSource={dataSource}/>
  </div>;
};

export default Table;
