import React, {useState} from 'react';
import styles from './index.module.css'

interface THeadProps {
    columns: any;
    rowSelection?: {
        type: 'checkbox',
        selectedRowKeys: [],
        onSelect: () => void,
    } | any;
    data: any;
    setCopyNewData: any;
}
interface sortCheckedProps {
    [key: string]: boolean;
}

const THead: React.FC<THeadProps> = ({ columns, rowSelection, data, setCopyNewData }) => {

    const [sortChecked, setSortChecked] = useState<sortCheckedProps>({});

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
                        data?.sort(item?.sorter);
                        setCopyNewData(data.slice());
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
