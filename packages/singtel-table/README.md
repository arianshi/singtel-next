# `singtel-table`

singtel-table is a javaScript package for creating your table.

## Usage

```js
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Table from 'singtel-table';

function Counter() {
  const data = [
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
  const columns =  [
    {
      title: 'Operator',
      key: 'operator',
      dataIndex: 'operator',
      sortDirections: ['descend'],
      render: (e) => (
        <span>{e}</span>
      ),
      sorter: (a, b) => {
        return a.operator.length - b.operator.length;
      },
    },
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
      sortDirections: ['ascend'],
      render: (e) => {
        return <span>{parseInt(e?.toString())?.toLocaleString('en-US')}</span>;
      },
      sorter: (a, b) => {
        return a.price - b.price;
      },
    },
    {
      title: 'Headset Display',
      key: 'display',
      dataIndex: 'display',
      render: (e) => (
        <span>{e}</span>
      ),
    },
    {
      title: '3G Availability',
      key: 'availability',
      dataIndex: 'availability',
      render: (e) => (
        <span>{e}</span>
      ),
    },
  ]
  return (
    <>
      <Table  
        showHead
        columns={columns}
        data={data}/>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```
## Theme
Purple Theme:
![Purple Theme logo](https://github.com/arianshi/singtel-next/blob/main/packages/singtel-table/demo/purple_theme.png "Purple Theme")
Pink Theme:
![Pink Theme logo](https://github.com/arianshi/singtel-next/blob/main/packages/singtel-table/demo/pink_theme.png "Purple Theme")
Blue Theme:
![Blue Theme logo](https://github.com/arianshi/singtel-next/blob/main/packages/singtel-table/demo/blue_theme.png "Purple Theme")




