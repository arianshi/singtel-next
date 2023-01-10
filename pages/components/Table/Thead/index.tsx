import React from 'react';
import styles from './index.module.css'

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
    const compare = function (prop: string) {
        return function (obj1: any, obj2: any) {
            //console.log('obj2', obj2)
            let val1 = obj1[prop];
            let val2 = obj2[prop];
            if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                val1 = Number(val1);
                val2 = Number(val2);
            }
            if (val1 < val2) {
                return -1;
            } else if (val1 > val2) {
                return 1;
            } else {
                return 0;
            }
        }
    }
    return <div className={styles.theadWrapper}>
        <div className={styles.theadContent}>
            {rowSelection && <label className={styles.checkbox}>
                <input className={styles.inputRadio}/>
            </label>}
            {columns.map((item: any, index: number) => {
                return <div  key={index} className={styles.theadItem}>
                    <span className={styles.theadItemText}>{item.title}</span>
                    {item?.sorter && <div onClick={() => {
                        data?.sort(compare(item.key));
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
