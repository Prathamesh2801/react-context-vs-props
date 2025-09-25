import React from 'react'

export default function Toast() {
    const currentTime = new Date().getTime();
  return (
   
    <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <img src="..." class="rounded me-2" alt="..."/>
          <strong class="me-auto">SuccessFully Registered</strong>
          <small>{currentTime}</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
    </div>
  )
}
