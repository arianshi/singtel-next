import React, {useCallback, useState, memo} from 'react';
import styles from './index.module.css'

interface columnsProps {
    title: string;
    key: string;
    dataIndex: string;
    render: any;
}

interface TbodyProps {
    columns: columnsProps[];
    data: [];
    rowSelection: any,
}

const Tbody: React.FC<TbodyProps> = ({columns, data}) => {

    const [selectedRowKeys, setSelectedRowKeys] = useState(['']);

    const onSelect = useCallback(
        (e: any) => {
            const value = e.target.value;
            let newCheckboxArr = [...selectedRowKeys];
            if (newCheckboxArr.indexOf(value) >= 0) {
                newCheckboxArr.splice(newCheckboxArr.indexOf(value), 1)
            } else {
                newCheckboxArr.push(value);
            }
            setSelectedRowKeys(newCheckboxArr);
        },
        [selectedRowKeys]
    );

    const readerTbody = (index: number, object: any) => {


        return (
            <div
                className={styles.tbodyWrapper}
                key={index}>
                <label className={selectedRowKeys.includes(index.toString()) ? styles.tbodyCheckboxChecked : styles.tbodyCheckbox}>
                    <input onClick={onSelect}  className={styles.inputRadio} type="checkbox" name={'checkbox'} value={index}/>
                </label>
                {columns.map((item, index) => {
                    return (
                        <span className={styles.tbodyItem} key={item.key + index}>
                            {item.render  ? item.render(object[item.key], object) : object[item.key]}
                        </span>
                    );
                })}
            </div>
        );
    }
    return <div className={styles.table}>
        {data?.map((object, index) => {
            return readerTbody(index, object);
        })}
    </div>;
};

export default memo(Tbody);
