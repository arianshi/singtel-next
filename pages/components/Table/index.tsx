import React from 'react';
import styles from './table.module.css'

interface ITable {
  title: string;
  colorType?: 'brand' | 'orange' | 'green' | 'red';
}

const Table: React.FC<ITable> = ({ title, colorType = 'brand' }) => {
  return <div className={styles.tag}>{title}</div>;
};

export default Table;
