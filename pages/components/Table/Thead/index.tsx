import React, {useState} from 'react';
import styles from './index.module.css'

interface THeadProps {
  columns: any;
}

const THead: React.FC<THeadProps> = ({ columns }) => {

  return <div className={styles.theadWrapper}>
          <div className={styles.theadContent}>
            {columns.map((item: any, index: number)=> <span className={styles.title} key={index}>{item.title}</span>)}
          </div>
      </div>
};

export default THead;
