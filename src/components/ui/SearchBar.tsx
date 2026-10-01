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
      className={cn('flex items-center gap-3', className)}
    >
      <label htmlFor="course-search" className="sr-only">
        Search courses
      </label>
      <div className="flex h-12 w-full max-w-md items-center gap-3 rounded-full bg-white px-5 text-muted">
        <Search size={18} aria-hidden="true" />
        <input
          id="course-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          maxLength={100}
          className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
        />
      </div>
      <Button type="submit" className="h-12">
        Search
      </Button>
    </form>
  )
}