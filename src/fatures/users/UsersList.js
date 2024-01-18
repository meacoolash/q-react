import React from 'react'
import User from './User'

import { useGetUsersQuery } from './usersApiSlice'

const UsersList = () => {

  const { 
    data: users, 
    isLoading,
    isSuccess,
    isError,   
    error
  } = useGetUsersQuery()

  let content

  if (isLoading) content = <div>Loading...</div>

  if (isError) content = <div>{JSON.stringify(error)}</div>

  if (isSuccess) {

    const {ids} = users
    content = ids?.length
    ? ids.map(userId => <User key={userId} userId={userId} />)
    : null

  }

  return content
  
}

export default UsersList