import React from 'react';
import styles from './index.module.css'

interface THeadProps {
  title: string;
}

const THead: React.FC<THeadProps> = ({ title}) => {
  return <div className={styles.table}>{title}</div>;
};

export default THead;
