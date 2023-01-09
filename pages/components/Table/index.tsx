import React from 'react';
import styles from './table.module.css'

interface ITable {
  title: string;
}

const Table: React.FC<ITable> = ({ title}) => {
  return <div className={styles.tag}>{title}</div>;
};

export default Table;
