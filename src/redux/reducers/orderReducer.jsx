import { createSlice } from '@reduxjs/toolkit'
import { https } from '../../util/config';

const initialState = {
    OrderPaging:[]
}

const orderReducer = createSlice({
  name: 'orderReducer',
  initialState,
  reducers: {
    getOrderPagingAction: (state, action) => {
        state.OrderPaging = action.payload;
      },
  }
});

export const {
    getOrderPagingAction
} = orderReducer.actions

export default orderReducer.reducer

export const getOrderPaging=(pageIndex,pageSize) => { 
    return async(dispatch)=>{
        const res = await https.get(`/api/Order/getPaging?pageIndex=${pageIndex}&pageSize=${pageSize}`)
        dispatch(getOrderPagingAction(res.data.content))
    }
 }
export const deleteOrder=(id) => { 
    return async(dispatch)=>{
        const res = await https.delete(`api/Order?id=${id}`)
        dispatch(getOrderPaging(1,10))
    }
 }