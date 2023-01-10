import React from 'react';
import styles from './index.module.css'
import {compare} from "../utils/compare";

interface THeadProps {
    columns: any;
    rowSelection?: {
        type: 'checkbox',
        selectedRowKeys: [],
        onSelect: () => void,
    } | any;
    data: any;
}

const THead: React.FC<THeadProps> = ({ columns, rowSelection, data }) => {
    return <div className={styles.theadWrapper}>
        <div className={styles.theadContent}>
            {rowSelection && <label className={styles.checkbox}>
                <input className={styles.inputRadio}/>
            </label>}
            {columns.map((item: any, index: number) => {
                return <div  key={index} className={styles.theadItem}>
                    <span className={styles.theadItemText}>{item.title}</span>
                    {item?.sorter && <div onClick={() => {
                        data?.sort(compare(item.key, item.sortDirections || [item.defaultSortOrder]));
                        item?.sorter(data);
                    }}
                      className={styles.theadItemSortWrapper}>
                     <span className={styles.theadItemSort}/>
                    </div>}
                </div>
            })}
        </div>
    </div>
};

export default THead;
