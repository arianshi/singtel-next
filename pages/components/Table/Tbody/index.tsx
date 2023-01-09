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
    data: [];
    rowSelection: any,
}

const Tbody: React.FC<TbodyProps> = ({columns, data}) => {
    const readerTbody = (index: number, object: any) => {
        return (
            <div
                className={styles.tbodyWrapper}
                key={index}>
                <div className={styles.tbodyRowSelection}>
                    <input className={styles.inputRadio} type="radio" value="2"/>
                    <span className={styles.radio}/>
                </div>
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

export default Tbody;
