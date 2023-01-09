import React from 'react';
import Thead from "./Thead";
import Tbody from "./Tbody";

import styles from './index.module.css';

interface TableProps {
  showHead: boolean;
  columns: any;
  dataSource: any;
}

const Table: React.FC<TableProps> = ({ showHead, columns, dataSource }) => {
  return <div className={styles.table}>
    {showHead && <Thead columns={columns}/>}
    <Tbody columns={columns} dataSource={dataSource}/>
  </div>;
};

export default Table;
