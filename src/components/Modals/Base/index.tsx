'use client'

import { Modal, useModal } from '@faceless-ui/modal'
import { X } from '@phosphor-icons/react'
import React from 'react'
import { ModalSlugs } from '../slugs'

export function ModalFooter({ children }: { children: React.ReactNode }) {
  return
}

export default function BaseModal({
  slug,
  label,
  children,
  Buttons,
}: {
  slug: string
  label: string
  children: React.ReactNode
  Buttons?: Array<React.FC>
}) {
  const { toggleModal } = useModal()

  return (
    <Modal
      slug={slug}
      className="absolute w-10/12 max-w-3xl -translate-y-1/2 bg-transparent top-1/2"
    >
      <div className="bg-native-bg p-0.5 shadow-modal rounded-[14px]">
        <div className="rounded-xl">
          <div className="border border-surf-primary rounded-t-xl">
            <div className="flex px-3 py-3.5 justify-between items-center border-b border-surf-primary">
              <span>{label}</span>
              <button onClick={() => toggleModal(slug)}>
                <X width={12} height={12} weight="bold" />
              </button>
            </div>
            <div className="px-3 pt-3.5 pb-8 bg-white">{children}</div>
          </div>
          <div className="px-3 py-2 flex justify-end space-x-2.5">
            <button
              className="p-2.5 rounded-xl border border-surf-primary"
              onClick={() => toggleModal(slug)}
            >
              Cancel
            </button>
            {Buttons?.map((Button, index) => <Button key={index} />)}
          </div>
        </div>
      </div>
    </Modal>
  )
}
