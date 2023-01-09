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

const Tbody: React.FC<TbodyProps> = ({columns, dataSource}) => {
    const readerTbody = (index: number, object: any) => {
        return (
            <div
                className={styles.tbodyWrapper}
                key={index}
            >
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
        );
    }
    return <div className={styles.table}>
        {dataSource?.map((object, index) => {
            return readerTbody(index, object);
        })}
    </div>;
};

export default Tbody;
