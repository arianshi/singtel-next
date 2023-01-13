# `singtel-table`

singtel-table is a javaScript package for creating your table.

## Usage

```js
import { createRoot } from 'react-dom/client';
import {
  useState,
} from 'react';
import Table from 'singtel-table';
import './index.css';
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
function App() {
  const [type] = useState('radio');
  const [selectedRowKeys] = useState(['0']);
  return (
    <>
      <Table
        showHead
        columns={columns}
        data={data}
        rowSelection={
          {
            type,
            selectedRowKeys,
            onSelect: (selectedRowKeys, selectedRows) => {
              console.log('selectedRowKeys:', selectedRowKeys, selectedRows);
            }
          }
        }
      />
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

```

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root, [singtel-table-theme="cHVycGxl"]  {
  --singtel-table-radio-checked: #5C50BB;
  --singtel-table-hover: #EFEDFD;
  --singtel-table-sort-checked: #DEDAFA;
}
/* pink 主题pink经过原生btoa方法加密 cGluaw== */
[singtel-table-theme="cGluaw=="] {
  --singtel-table-radio-checked: pink;
  --singtel-table-hover: #ffe6e6;
  --singtel-table-sort-checked: pink;
}
/* blue 主题 blue经过原生btoa方法加密 Z3JlZW4= */
[singtel-table-theme="Ymx1ZQ=="] {
  --singtel-table-radio-checked: #0958d9;
  --singtel-table-hover:#91caff;
  --singtel-table-sort-checked: #0958d9;
}

```
## Theme
Purple Theme:
![Purple Theme](https://github.com/arianshi/singtel-next/blob/main/packages/singtel-table/demo/purple_theme.png "Purple Theme")
Pink Theme:
![Pink Theme](https://github.com/arianshi/singtel-next/blob/main/packages/singtel-table/demo/pink_theme.png "Purple Theme")
Blue Theme:
![Blue Theme](https://github.com/arianshi/singtel-next/blob/main/packages/singtel-table/demo/blue_theme.png "Purple Theme")

## Table bookStory

![bookStory](https://github.com/arianshi/singtel-next/blob/main/packages/singtel-table/demo/bookStory.png "Table bookStory")


