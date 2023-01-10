import React from 'react';
import styles from './index.module.css'

interface THeadProps {
    columns: any;
    rowSelection?: {
        type: 'checkbox',
        selectedRowKeys: [],
        onSelect: () => void,
    } | any;
}

const THead: React.FC<THeadProps> = ({ columns, rowSelection }) => {
    console.log('rowSelection', rowSelection);
    return <div className={styles.theadWrapper}>
        <div className={styles.theadContent}>
            {rowSelection && <label className={styles.checkbox}>
                <input className={styles.inputRadio}/>
            </label>}
            {columns.map((item: any, index: number) => <span className={styles.title} key={index}>{item.title}</span>)}
        </div>
    </div>
};

export default THead;
