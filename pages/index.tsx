import Head from 'next/head';
import {
  ReactElement,
  JSXElementConstructor,
  useState,
  useEffect,
} from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

export const data = [
  {
    id: 1,
    price: 170000,
    operator: 'Aelcom Axiatavvv',
    display: 'CELCOM / My Celcom / 502 19',
    availability: 'Yes',
  },
  {
    id: 2,
    price: 250000,
    operator: 'HiGiTelecom',
    display: 'DiGi 1800 / DiGi /  MYMY18',
    availability: 'Yes',
  },
  {
    id: 3,
    price: 160000,
    operator: 'Kaxis (LTE)',
    display: 'U Mobile / MYS 18 / MY 18',
    availability: 'Yes',
  },
  {
    id: 4,
    price: 460000,
    operator: 'DMobile (LTE)',
    display: 'U Mobile / MYS 18 / MY 18',
    availability: 'Yes',
  },
];
export const columns = [
  {
    title: 'Operator',
    key: 'operator',
    dataIndex: 'operator',
    sortDirections: ['descend'],
    render: (e: ReactElement<any, string | JSXElementConstructor<any>>) => (
      <span>{e}</span>
    ),
    sorter: (a: any, b: any) => {
      return a.operator.length - b.operator.length;
    },
  },
  {
    title: 'Price',
    key: 'price',
    dataIndex: 'price',
    sortDirections: ['ascend'],
    render: (e: ReactElement<any, string | JSXElementConstructor<any>>) => {
      return <span>{parseInt(e?.toString())?.toLocaleString('en-US')}</span>;
    },
    sorter: (a: any, b: any) => {
      return a.price - b.price;
    },
  },
  {
    title: 'Headset Display',
    key: 'display',
    dataIndex: 'display',
    render: (e: ReactElement<any, string | JSXElementConstructor<any>>) => (
      <span>{e}</span>
    ),
  },
  {
    title: '3G Availability',
    key: 'availability',
    dataIndex: 'availability',
    render: (e: ReactElement<any, string | JSXElementConstructor<any>>) => (
      <span>{e}</span>
    ),
  },
];
export default function Home() {
  const Table = dynamic(() => import('../packages/singtel-table'), {
    ssr: false,
  });
  //Type
  const [type, setType] = useState<string>('radio');
  const selectedRowType = ['radio', 'checkbox'];
  //RowSelection
  const [showRowSelection, setShowRowSelection] = useState<string>('Open');
  const rowSelectionAction = ['Open', 'Closed'];
  // Head
  const [showHead, setShowHead] = useState<string>('Open');
  const headAction = ['Open', 'Closed'];
  // Theme
  const [theme, setTheme] = useState<string>('purple');
  const themes = ['purple', 'pink', 'green'];

  const [selectedRowKeys, setSelectedRowKeys] = useState(['0']);
  const handleTypeClick = (item: string) => {
    setType(item);
  };
  const handleRowSelectionClick = (item: string) => {
    setShowRowSelection(item);
  };
  const handleHeadClick = (item: string) => {
    setShowHead(item);
  };
  const handleThemeClick = (item: string) => {
    setTheme(item);
  };

  useEffect(() => {
    // 为了不向外面暴露当前的主题，统一主题通过window.btoa进行加密。
    document?.documentElement?.setAttribute(
      'singtel-table-theme',
      window.btoa(theme)
    );
  }, [theme]);

  return (
    <>
      <Head>
        <title>Table Component</title>
        <meta name="description" content="Table Component" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <span className={styles.title}>Table Component</span>
        <div className={styles.tableFilter}>
          <div className={styles.tableFilterItem}>
            <span className={styles.typeText}>Theme:</span>
            <div className={styles.tableType}>
              {themes.map((item, index) => (
                <span
                  onClick={() => {
                    handleThemeClick(item);
                  }}
                  key={index}
                  className={item === theme ? styles.checked : styles.normal}
                >
                  {`${item.charAt(0).toUpperCase()}${item.slice(1)}`}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.tableFilterItem}>
            <span className={styles.typeText}>Header:</span>
            <div className={styles.tableType}>
              {rowSelectionAction.map((item, index) => (
                <span
                  onClick={() => {
                    handleHeadClick(item);
                  }}
                  key={index}
                  className={item === showHead ? styles.checked : styles.normal}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.tableFilterItem}>
            <span className={styles.typeText}>RowSelection:</span>
            <div className={styles.tableType}>
              {headAction.map((item, index) => (
                <span
                  onClick={() => {
                    handleRowSelectionClick(item);
                  }}
                  key={index}
                  className={
                    item === showRowSelection ? styles.checked : styles.normal
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.tableFilterItem}>
            {showRowSelection === 'Open' && (
              <>
                <span className={styles.typeText}>Type:</span>
                <div className={styles.tableType}>
                  {selectedRowType.map((item, index) => (
                    <span
                      onClick={() => {
                        handleTypeClick(item);
                      }}
                      key={index}
                      className={item === type ? styles.checked : styles.normal}
                    >{`${item.charAt(0).toUpperCase()}${item.slice(1)}`}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <Table
          columns={columns}
          data={data}
          showHead={showHead === 'Open'}
          rowSelection={
            showRowSelection === 'Open'
              ? {
                  type,
                  selectedRowKeys,
                  onSelect: (selectedRowKeys: number, selectedRows: []) => {
                    //console.log('selectedRowKeys:', selectedRowKeys, selectedRows);
                  },
                }
              : null
          }
        />
      </main>
    </>
  );
}
