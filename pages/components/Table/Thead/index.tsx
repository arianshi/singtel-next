import React, {useState} from 'react';
import styles from './index.module.css'

interface THeadProps {
    columns: any;
    rowSelection?: {
        type: 'checkbox',
        selectedRowKeys: [],
        onSelect: () => void,
    } | any;
    oldData: any;
    newData: any;
    setCopyNewData: any;
    sortChecked: any;
    setSortChecked: any;
}

const THead: React.FC<THeadProps> = ({ columns, rowSelection, oldData, newData, setCopyNewData, sortChecked, setSortChecked }) => {

    return <div className={styles.theadWrapper}>
        <div className={styles.theadContent}>
            {rowSelection && <label className={styles.checkbox}>
                <input className={styles.inputRadio}/>
            </label>}
            {columns.map((item: any, index: number) => {
                return <div  key={index} className={styles.theadItem}>
                    <span className={styles.theadItemText}>{item.title}</span>
                    {item?.sorter && <div
                        className={`${styles.theadItemSortWrapper} ${sortChecked[index] ? styles.theadItemSortCheckedWrapper : ''}`}
                        onClick={() => {
                        newData?.sort(item?.sorter);
                        setCopyNewData(newData?.slice());
                        console.log('newData slice', newData);
                        console.log('oldData', oldData)
                        setSortChecked({
                                ...sortChecked,
                                [index]: !sortChecked[index]
                         });
                    }}>
                     <span className={styles.theadItemSort}/>
                    </div>}
                </div>
            })}
        </div>
    </div>
};

export default THead;
