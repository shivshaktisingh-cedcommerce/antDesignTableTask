import React, { useEffect, useState } from 'react';
import { Table ,Button} from 'antd';
import UseFetch from './UseFetch';
import { v4 as uuidv4 } from 'uuid';

export default function Userdatatable() {
    var url = "https://jsonplaceholder.typicode.com/users";
    const [extractDataFromApi] = UseFetch()
    const [data , setData]=useState([])
    const deletefun=(index)=>{
    let temp = [...data]
    temp = temp.filter(item=>{
        return item.id!==index
      })
      setData(temp)
    }
    
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'name',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    width: '30%',
    key: 'phone',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    width: '30%',
    key: 'website',
  },
  {
    title: 'Action',
    width: '30%',
    key: 'operation',
    render: (record) => <Button type="link" onClick={()=>deletefun(record.id)}>Delete</Button>
  },
];

useEffect(()=>{
  let temp = [];
  extractDataFromApi(url).then((res)=>{
    res.map((item)=>{
      item.key = uuidv4();
      temp.push(item)
    })
    setData(temp)
  })

},[])
console.log(data)
  return (
    <>
   {data && <Table
      columns={columns}
      // rowSelection={{
      //   ...rowSelection,
      // }}
      dataSource={data}
    />}
  </>
  )
}
