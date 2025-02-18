import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function MetaTrendCard({
  trend,
  className,
}: {
  trend: Pick<IMetaTrend, 'title' | 'url'>
  className?: string
}) {
  return (
    <Link
      href={`/meta-trends/${trend.url}`}
      className={['p-2.5 lg:p-5 flex justify-between items-center group', className]
        .filter(Boolean)
        .join(' ')}
    >
      <p className="text-xs lg:text-base group-hover:text-btn-primary">{trend.title}</p>
      <div className="flex space-x-0.5 items-center text-btn-primary group-hover:underline underline-offset-4">
        <span className="text-[10px] lg:text-sm">View Analysis</span>
        <ArrowRight color="#000BA7" width={12} />
      </div>
    </Link>
  )
}
