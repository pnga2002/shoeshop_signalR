import React, { useEffect } from 'react'
import { deleteOrder, getOrderPaging } from '../../redux/reducers/orderReducer';
import { Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { connection } from '../..';

const Order = () => {
    
  const { OrderPaging } = useSelector(state => state.orderReducer)
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrderPaging(1,10));
        //Có 1 client nào thực hiện việc đặt hàng thành công mình sẽ load lại danh sách phòng vé của lịch chiếu đó
        // loadOrderAdmin tên này được BE khai báo và để ở function đặt hàng 
        connection.on('loadOrderAdmin', () =>  {
            dispatch(getOrderPaging(1,10));
        })
      }, [])
    const column=[
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: 'date',
            dataIndex: 'date',
            key: 'date',
          },
          {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
          },
          {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'action',
            render:data=>(<button  className="btn btn-danger" onClick={() => { 
                dispatch(deleteOrder(data.id))
             }}>Delete</button>)
            ,
            key: 'action',
          },

    ]
  return (
    <div>
        <Table columns={column} dataSource={OrderPaging?.items }/>
    </div>
  )
}

export default Order