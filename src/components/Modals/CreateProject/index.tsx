'use client'

import { ModalSlugs } from '../slugs'
import BaseModal from '../Base'
import { useState } from 'react'

export function CreateProjectModal() {
  const formId = 'create-project'
  const [title, setTitle] = useState('')

  return (
    <BaseModal slug={ModalSlugs.CREATE_PROJECT} label="Create Project">
      <form id={formId} className="form">
        <div>
          <label htmlFor="title">Project Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </form>
    </BaseModal>
  )
}
