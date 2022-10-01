import React, { useEffect, useMemo, useState } from 'react';
import { Button, Table, notification, Typography, ConfigProvider } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CheckCircleFilled } from '@ant-design/icons';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const initialData: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

function mockRemoteCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}

function NotiDescription({ rowAmount, resetToLastSnapshot }) {
  const [undoLoading, setUndoLoading] = useState(false);
  const [undoDone, setUndoDone] = useState(false);
  return (
    <div>
      <Typography.Text>{rowAmount} rows are deleted</Typography.Text>
      <div className="flex justify-end">
        {!undoDone && (
          <Button
            loading={undoLoading}
            onClick={async () => {
              setUndoLoading(true);
              await mockRemoteCall();
              resetToLastSnapshot();
              setUndoLoading(false);
              setUndoDone(true);
              setTimeout(() => {
                notification.destroy();
              }, 1000);
            }}
            type="link"
          >
            Undo
          </Button>
        )}
        {undoDone && (
          <Button icon={<CheckCircleFilled />} type="link" disabled>
            Undo
          </Button>
        )}
      </div>
    </div>
  );
}

function HowThingsShouldLookLike(props) {
  const [data, setData] = useState<DataType[]>([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    setData(initialData);
  }, []);

  // rowSelection object indicates the need for row selection
  const rowSelection = useMemo(
    () => ({
      onChange: (selectedRowKeys: React.Key[], _selectedRows: DataType[]) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          'selectedRows: ',
          setSelectedRows(_selectedRows)
        );
        setSelectedRows;
      },
      getCheckboxProps: (record: DataType) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    }),
    []
  );
  return (
    <div>
      <div className=" max-w-5xl m-auto">
        <Typography.Title>Undo feature</Typography.Title>
        <Table
          className="mb-2"
          pagination={false}
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
        <div className="flex justify-end">
          {selectedRows.length !== 0 && (
            <Button
              loading={isDeleting}
              onClick={async () => {
                setIsDeleting(true);
                const newData = data.filter((item) => {
                  return !selectedRows.map((r) => r.key).includes(item.key);
                });
                const lastRowDataSnapshot = [...data];
                const lastRowSelectionSnapshot = [...selectedRows];

                await mockRemoteCall();
                setSelectedRows([]);
                setData([...newData]);
                notification.success({
                  message: 'Done',
                  description: (
                    <NotiDescription
                      resetToLastSnapshot={() => {
                        setData([...lastRowDataSnapshot]);
                        setSelectedRows([...lastRowSelectionSnapshot]);
                      }}
                      rowAmount={selectedRows.length}
                    />
                  ),
                });
                setIsDeleting(false);
              }}
              danger
              type="primary"
            >
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HowThingsShouldLookLike;
