'use client'

import Link from 'next/link'
import { matrixPathways, matrixRows, strengthLabels } from '@/lib/pathway-matrix'
import type { Strength, Redox } from '@/lib/pathway-matrix'

const cellStyle: Record<Strength, string> = {
  3: 'bg-grade-high text-white',
  2: 'bg-grade-high-bg text-grade-high',
  1: 'bg-secondary text-foreground/70',
  0: 'bg-transparent text-muted-foreground/40',
}
const cellGlyph: Record<Strength, string> = { 3: '●●●', 2: '●●', 1: '●', 0: '·' }

const redoxDot: Record<Redox, string> = {
  'pro-oxidant': 'bg-destructive',
  antioxidant: 'bg-grade-moderate',
  'context-dependent': 'bg-warn',
}
const redoxName: Record<Redox, string> = {
  'pro-oxidant': 'prooksydacyjna',
  antioxidant: 'antyoksydacyjna',
  'context-dependent': 'zależna od kontekstu',
}

export function PathwayMatrix() {
  return (
    <div>
      {/* Legenda */}
      <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><span className="inline-flex h-4 w-7 items-center justify-center rounded bg-grade-high text-[9px] text-white">●●●</span> {strengthLabels[3]}</span>
        <span className="flex items-center gap-1.5"><span className="inline-flex h-4 w-7 items-center justify-center rounded bg-grade-high-bg text-[9px] text-grade-high">●●</span> {strengthLabels[2]}</span>
        <span className="flex items-center gap-1.5"><span className="inline-flex h-4 w-7 items-center justify-center rounded bg-secondary text-[9px]">●</span> {strengthLabels[1]}</span>
        <span className="mx-2 hidden h-4 w-px bg-border sm:inline-block" />
        <span className="flex items-center gap-1.5"><span className={`h-2.5 w-2.5 rounded-full ${redoxDot['pro-oxidant']}`} /> prooksydacyjna</span>
        <span className="flex items-center gap-1.5"><span className={`h-2.5 w-2.5 rounded-full ${redoxDot['antioxidant']}`} /> antyoksydacyjna</span>
        <span className="flex items-center gap-1.5"><span className={`h-2.5 w-2.5 rounded-full ${redoxDot['context-dependent']}`} /> zależna od kontekstu</span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="sticky left-0 z-10 bg-primary px-3 py-3 text-left font-medium">Substancja</th>
              {matrixPathways.map((p) => (
                <th key={p.key} className="px-2 py-3 text-center align-bottom font-medium">
                  <span className="block text-[11px] leading-tight">{p.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrixRows.map((row) => (
              <tr key={row.substance} className="border-t border-border even:bg-secondary/30">
                <th scope="row" className="sticky left-0 z-10 bg-inherit px-3 py-2 text-left font-normal">
                  <span className="flex items-center gap-2">
                    {row.redox && (
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full ${redoxDot[row.redox]}`}
                        title={`Charakterystyka redoks: ${redoxName[row.redox]}`}
                        aria-label={`redoks: ${redoxName[row.redox]}`}
                      />
                    )}
                    {row.slug ? (
                      <Link href={`/metody/${row.slug}`} className="text-foreground hover:text-accent hover:underline">
                        {row.substance}
                      </Link>
                    ) : (
                      <span className="text-foreground">{row.substance}</span>
                    )}
                  </span>
                </th>
                {matrixPathways.map((p) => {
                  const v = row.values[p.key]
                  return (
                    <td key={p.key} className="px-1 py-2 text-center">
                      <span
                        className={`inline-flex h-6 min-w-[2rem] items-center justify-center rounded text-[10px] font-semibold ${cellStyle[v]}`}
                        title={`${row.substance} — ${p.label}: ${strengthLabels[v]}`}
                      >
                        {cellGlyph[v]}
                      </span>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
