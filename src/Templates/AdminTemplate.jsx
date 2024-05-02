import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminTemplate = () => {
    return (
        <div>
            <div></div>
            <div style={{ minHeight: "75vh" }}>
        <Outlet />
      </div>

        </div>
    )
}

export default AdminTemplate