import React from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const NotFoundPage = () => {
    useEffect(() => {
      toast.error('Error page, please navigate back home')
    }, [])
    
  return (
    <div>
      <h1 className="display-1 text-center py-5 text-danger fw-bold">
        NOT FOUND PAGE
      </h1>
    </div>
  )
}

export default NotFoundPage
