import React, {useState} from 'react';
import styles from './index.module.css'

interface THeadProps {
  columns: any;
}

const THead: React.FC<THeadProps> = ({ columns }) => {

  return <div className={styles.thead}>
        <label className={styles.tbodyCheckbox}/>
        {columns.map((item: any, index: number)=> <span className={styles.title} key={index}>{item.title}</span>)}
      </div>
};

export default THead;
