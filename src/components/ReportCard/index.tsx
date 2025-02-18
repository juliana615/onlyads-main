'use client'

import TickIcon from '@/icons/TickIcon'
import { ArrowRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ReportCard({ report }: { report: IReport }) {
  const router = useRouter()

  const handleRedirect = () => {
    router.push(`/reports/${report.path}`)
  }

  return (
    <div
      className="flex flex-col self-stretch justify-between p-5 border rounded-lg cursor-pointer border-surf-primary shadow-card group hover:border-btn-primary"
      onClick={() => handleRedirect()}
    >
      <div>
        <div className="text-sm font-semibold md:text-base group-hover:text-btn-primary">
          {new Date(report.timestamp * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          {report.highlights.map((highlight, index) => (
            <div className="flex items-center space-x-1.5" key={index}>
              <div className="basis-4">
                <TickIcon stroke="#262626" />
              </div>
              <p className="text-xs md:text-sm">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-9">
        <Link
          href={`reports/${report.path}`}
          className="flex items-center text-xs md:text-sm text-btn-primary space-x-1.5"
        >
          <span>Read Report</span> <ArrowRight />
        </Link>
      </div>
    </div>
  )
}
