import React from 'react';
import Thead from "./Thead";
import Tbody from "./Tbody";

import styles from './index.module.css';

interface TableProps {
  showHead: boolean;
  columns: any;
  data: any;
}

const Table: React.FC<TableProps> = ({ showHead, columns, data }) => {
  return <div className={styles.table}>
    {showHead && <Thead columns={columns}/>}
    <Tbody columns={columns} data={data}/>
  </div>;
};

export default Table;
