import React from 'react'
import Contact from './Contact'

import { useGetContactsQuery } from './contactsApiSlice'

const ContactsList = () => {

  const { 
    data: contacts, 
    isLoading,
    isSuccess,
    isError,   
    error
  } = useGetContactsQuery()

  let content

  if (isLoading) content = <div>Loading...</div>

  if (isError) content = <div>{JSON.stringify(error)}</div>

  if (isSuccess) {

    const {ids} = contacts

    content = ids?.length
    ? ids.map(contactId => <Contact key={contactId} contactId={contactId} />)
    : null

  }

  return content
  
}

export default ContactsList