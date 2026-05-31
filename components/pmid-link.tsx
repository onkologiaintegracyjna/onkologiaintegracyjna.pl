import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

export function PMIDLink({
  pmid,
  className,
}: {
  pmid: string
  className?: string
}) {
  return (
    <a
      href={`https://pubmed.ncbi.nlm.nih.gov/${pmid}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1 rounded-md font-mono text-xs font-medium text-accent underline-offset-2 hover:underline',
        className
      )}
    >
      PMID {pmid}
      <ExternalLink className="h-3 w-3" aria-hidden="true" />
    </a>
  )
}
