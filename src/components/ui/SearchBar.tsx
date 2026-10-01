import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

interface SearchBarProps {
  onSearch?: (query: string) => void
  className?: string
}

export function SearchBar({ onSearch, className }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch?.(query.trim())
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cn('flex items-start gap-4', className)}
    >
      <label htmlFor="course-search" className="sr-only">
        Search courses
      </label>
      <div className="flex h-[52px] w-full min-w-0 max-w-[460px] items-center gap-3 rounded-full bg-white px-6 text-muted">
        <Search size={20} aria-hidden="true" className="shrink-0" />
        <input
          id="course-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          maxLength={100}
          className="w-full bg-transparent text-base text-ink outline-none placeholder:text-muted"
        />
      </div>
      <Button type="submit" className="h-[46px] px-6 text-[18px] font-medium leading-[120%]">
        Search
      </Button>
    </form>
  )
}