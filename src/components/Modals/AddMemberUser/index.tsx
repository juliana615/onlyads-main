'use client'

import React, { useState } from 'react'
import BaseModal from '../Base'
import { ModalSlugs } from '../slugs'

export function AddMemberUserModal() {
  const formId = 'add-member-user'
  const [formState, setFormState] = useState({
    fullname: '',
    email: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <BaseModal slug={ModalSlugs.ADD_MEMBER_USER} label="Add User">
      <form id={formId} className="form">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="fullname">Full name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={formState['fullname']}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formState['email']}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </BaseModal>
  )
}
