import React from 'react';
import styles from './index.module.css'

interface TbodyProps {
  title: string;
}

const Tbody: React.FC<TbodyProps> = ({ title}) => {
  return <div className={styles.table}>{title}</div>;
};

export default Tbody;
