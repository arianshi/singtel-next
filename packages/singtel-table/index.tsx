import React, { memo, useEffect, useState } from 'react';
import Thead from './Thead';
import Tbody from './Tbody';

import styles from './index.module.css';

interface TableProps {
  showHead: boolean;
  columns: any;
  data: any;
  rowSelection?:
    | {
        type: 'checkbox';
        selectedRowKeys: [];
        onSelect: () => void;
      }
    | any;
}

interface sortCheckedProps {
  [key: string]: boolean;
}

const Table: React.FC<TableProps> = ({
  rowSelection,
  showHead,
  columns,
  data,
}) => {
  const [sortChecked, setSortChecked] = useState<sortCheckedProps>({});
  const [copyNewData, setCopyNewData] = useState(data);
  return (
    <div className={styles.table}>
      {showHead && (
        <Thead
          rowSelection={rowSelection}
          columns={columns}
          oldData={data}
          newData={copyNewData}
          sortChecked={sortChecked}
          setSortChecked={setSortChecked}
          setCopyNewData={setCopyNewData}
        />
      )}
      <Tbody rowSelection={rowSelection} columns={columns} data={copyNewData} />
    </div>
  );
};

export default memo(Table);
