import React from 'react';
import styles from './index.module.css'

interface columnsProps {
    title: string;
    key: string;
    dataIndex: string;
    render: any;
}
interface TbodyProps {
  columns: columnsProps[];
  dataSource: [];
}

const Tbody: React.FC<TbodyProps> = ({ columns, dataSource}) => {
  const readerTbody = (index: number, obj: any) => {
    return (
        <div
            className={styles.tbodyWrapper}
            key={index}
        >
          {columns.map((item, index) => {
            return (
                <span className={styles.tbodyItem} key={item.key + index}>
                  {item.render
                      ? item.render(obj[item.key], obj)
                      : obj[item.key]}
                </span>
            );
          })}
        </div>
    );
  }
  return <div className={styles.table}>
      {dataSource?.map((obj, index) => {
          return readerTbody(index, obj);
      })}
  </div>;
};

export default Tbody;
