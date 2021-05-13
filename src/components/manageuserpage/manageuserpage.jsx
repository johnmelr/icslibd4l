import React from 'react'
import FilterMenu from './filterMenu'
import UserTable from './userTable'
import UserSearch from './userSearch'

export default function ManageUserPage() {


  return (
    <div className="manageuser-container">
      <UserSearch />
      <FilterMenu />
      <div className="usertable-container" style={{padding: '50px', backgroundColor: '#F5F5F5'}}>
        <UserTable />
      </div>
    </div>
  )
}