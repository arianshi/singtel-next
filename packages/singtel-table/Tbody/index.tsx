import React, {useCallback, useState, useEffect, ReactNode} from 'react';
import styles from './index.module.css';
import {ROW_SELECTION_TYPE} from "../constants";
import {columns} from "../../../pages";

export interface ColumnsType<T> {
  title: ReactNode;
  key: string;
  dataIndex: string;
  render?: (record: T, records: T[]) => ReactNode;
  sorter?: (record: T, index: number, records: T[]) => void;
}

interface TbodyProps<T>  {
  columns: Array<ColumnsType<T>>;
  data: T[];
  rowSelection?:
    | {
        type: ROW_SELECTION_TYPE.CHECK_BOX;
        selectedRowKeys: [];
        onSelect: () => void;
      }
    | any;
}

const Tbody: React.FC<TbodyProps<any>> = ({ rowSelection, columns, data }) => {

  const isRadio = rowSelection?.type === ROW_SELECTION_TYPE.RADIO;
  const isCheckbox = rowSelection?.type === ROW_SELECTION_TYPE.CHECK_BOX;
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState(
    rowSelection?.selectedRowKeys || []
  );

  useEffect(() => {
    if ([isRadio, isCheckbox].includes(true)) {
      setSelectedRowKeys(rowSelection?.selectedRowKeys || []);
    }
  }, [rowSelection, rowSelection?.type]);

  const handleClick = useCallback(
    (e: any, object: any) => {
      const value = e.target.value;
      isCheckbox
        ? handleCheckBoxClick(value, object)
        : handleRadioClick(value, object);
    },
    [selectedRowKeys]
  );
  const handleCheckBoxClick = (value: string, object: any) => {
    let newCheckboxArr = [...selectedRowKeys];
    if (newCheckboxArr.indexOf(value) >= 0) {
      newCheckboxArr.splice(newCheckboxArr.indexOf(value), 1);
    } else {
      newCheckboxArr.push(value);
    }
    setSelectedRowKeys(newCheckboxArr);
  };

  const handleRadioClick = (value: string, object: any) => {
    setSelectedRowKeys([value]);
    setSelectedRows(object);
  };

  rowSelection?.onSelect(
    selectedRowKeys?.filter((i: string) => i && i?.trim()),
    selectedRows
  );

  const readerTbody = (index: number, columnItem: any, data: any) => {
    return (
      <div className={styles.tbodyWrapper} key={index}>
        <div
          className={`${styles.tbodyContent} ${
            data?.length - 1 === index ? styles.tbodyContentLast : ''
          }`}
        >
          {rowSelection && (
            <label
              className={
                selectedRowKeys.includes(index.toString())
                  ? styles[`${rowSelection.type}Checked`]
                  : styles[rowSelection.type]
              }
            >
              <input
                onClick={(e: any) => handleClick(e, columnItem)}
                className={styles.inputRadio}
                type={rowSelection.type}
                name={rowSelection.type}
                value={index}
              />
            </label>
          )}
          {columns.map((item, index) => {
            return (
              <span className={styles.tbodyItem} key={item.key + index}>
                {item.render
                  ? item.render(columnItem[item.key], columnItem)
                  : columnItem[item.key]}
              </span>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.tableContainer}>
      {data?.map((columnItem, index) => {
        return readerTbody(index, columnItem, data);
      })}
    </div>
  );
};

export default Tbody;
