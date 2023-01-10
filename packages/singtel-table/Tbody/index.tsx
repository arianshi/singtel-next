import React, { useCallback, useState, memo } from 'react';
import styles from './index.module.css';

interface columnsProps {
  title: string;
  key: string;
  dataIndex: string;
  render: (item: string, object: any) => void;
}

interface TbodyProps {
  columns: columnsProps[];
  data: [];
  rowSelection?:
    | {
        type: 'checkbox';
        selectedRowKeys: [];
        onSelect: () => void;
      }
    | any;
}

const Tbody: React.FC<TbodyProps> = ({ rowSelection, columns, data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState(
    rowSelection?.selectedRowKeys || []
  );
  const [selectedRows, setSelectedRows] = useState([]);
  const isCheckbox = rowSelection?.type === 'checkbox';

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

  console.log('rowSelection', rowSelection);
  rowSelection?.onSelect(
    selectedRowKeys?.filter((i: string) => i && i?.trim()),
    selectedRows
  );

  const readerTbody = (index: number, object: any, data: any) => {
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
                onClick={(e: any) => handleClick(e, object)}
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
                  ? item.render(object[item.key], object)
                  : object[item.key]}
              </span>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.tableContainer}>
      {data?.map((object, index) => {
        return readerTbody(index, object, data);
      })}
    </div>
  );
};

export default memo(Tbody);
