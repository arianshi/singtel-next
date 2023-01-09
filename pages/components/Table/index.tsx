import React from 'react';
import styles from './table.module.css'

interface TableProps {
  title: string;
}

const Table: React.FC<TableProps> = ({ title}) => {
  return <div className={styles.table}>{title}</div>;
};

export default Table;
