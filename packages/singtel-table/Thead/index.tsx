import React from 'react';
import { ROW_SELECTION_TYPE, SORT_TYPE } from "../constants";
import { ColumnsType } from "../index";


import styles from './index.module.css';

interface THeadProps<T> {
  columns: Array<ColumnsType<T>>;
  rowSelection?:
    | {
        type: ROW_SELECTION_TYPE.CHECK_BOX;
        selectedRowKeys: [];
        onSelect: () => void;
      }
    | any;
  oldData: T[];
  newData:T[];
  setCopyNewData: (data: any) => void;
  sortChecked: T[];
  setSortChecked:(data: any) => void;
}

const THead: React.FC<THeadProps<any>> = ({
  columns,
  rowSelection,
  newData,
  setCopyNewData,
  sortChecked,
  setSortChecked,
}) => {

  return (
    <div className={styles.theadWrapper}>
      <div className={styles.theadContent}>
        {rowSelection && (
          <label className={styles.checkbox}>
            <input className={styles.inputRadio} />
          </label>
        )}
        {columns.map((item: any, index: number) => {
          return (
            <div key={index} className={styles.theadItem}>
              <span className={styles.theadItemText}>{item.title}</span>
              {item?.sorter && (
                <div
                  className={`${styles.theadItemSortWrapper} ${
                    sortChecked.includes(index)
                      ? styles.theadItemSortCheckedWrapper
                      : ''
                  }`}
                  onClick={() => {
                    newData?.sort(item?.sorter);
                    setCopyNewData(newData?.slice());
                    setSortChecked([index]);
                  }}
                >
                  <span
                    className={
                      item?.sortDirections?.includes(SORT_TYPE.DESCEND)
                        ? styles.theadItemSortDescend
                        : item?.sortDirections?.includes(SORT_TYPE.ASCEND)
                        ? styles.theadItemSortAscend
                        : styles.theadItemSortAscendAndDescend
                    }
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em">
                      <path
                      d="M558.933333 853.333333V128h-42.666666v733.866667l-145.066667-145.066667-29.866667 29.866667 192 192 192-192-29.866666-29.866667-136.533334 136.533333z"
                      fill="#444444"/>
                    </svg>
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default THead;
