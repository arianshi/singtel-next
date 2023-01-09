import React, {useCallback, useState, memo} from 'react';
import styles from './index.module.css'
import {number, string} from "prop-types";

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


const Tbody: React.FC<TbodyProps> = ({ rowSelection, columns, data}) => {

    const [selectedRowKeys, setSelectedRowKeys] = useState(rowSelection.selectedRowKeys);
    const isCheckbox = rowSelection.type === 'checkbox';

    const handleClick = useCallback(
        (e: any) => {
            const value = e.target.value;
            isCheckbox ? handleCheckBoxClick(value) : handleRadioClick(value);
        },
        [selectedRowKeys]
    );

    const handleCheckBoxClick = (value: string) => {
        let newCheckboxArr = [...selectedRowKeys];
        if (newCheckboxArr.indexOf(value) >= 0) {
            newCheckboxArr.splice(newCheckboxArr.indexOf(value), 1)
        } else {
            newCheckboxArr.push(value);
        }
        setSelectedRowKeys(newCheckboxArr);
    }

    const handleRadioClick = (value: string) => {
        setSelectedRowKeys([value]);
    }

    rowSelection.onSelect(selectedRowKeys?.filter((i: string)=>i && i?.trim()))

    const readerTbody = (index: number, object: any) => {

        return (
            <div
                className={styles.tbodyWrapper}
                key={index}>
                <label className={selectedRowKeys.includes(index.toString()) ?
                    styles[`${rowSelection.type}Checked`]: styles[rowSelection.type]}>
                    <input onClick={handleClick}
                           className={styles.inputRadio}
                           type={rowSelection.type}
                           name={rowSelection.type}
                           value={index}/>
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
