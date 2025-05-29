"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { Input } from "@/app/blog/components/ui/input"
import { Button } from "@/app/blog/components/ui/button"
import type { Category } from "@/app/blog/types/blog"

interface BlogSidebarProps {
  categories: Category[]
  onSearchAction: (query: string) => void
  className?: string
}

export function BlogSidebar({ categories, onSearchAction, className }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearchAction(searchQuery)
  }

  return (
    <aside
      className={`
      w-full md:w-64 md:flex-shrink-0 
      bg-white
      border-2 border-black spa-shadow
      ${className}
    `}
    >
      <div className="sticky top-0 p-4 space-y-6">
        <div className="relative">
          <div className="inline-block bg-teal-100 px-3 py-1 mb-4 border-2 border-black spa-shadow rotate-2">
            <span className="text-sm font-bold">Spa Blog Search</span>
          </div>
          
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search posts..."
              className="pl-9 bg-white border-2 border-black focus-visible:ring-2 focus-visible:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-black" />
            <Button 
              type="submit" 
              className="mt-2 bg-teal-600 text-white px-4 py-2 font-bold spa-btn border-2 border-black hover:bg-teal-700"
            >
              Search
            </Button>
          </form>
        </div>

        <div className="border-t-2 border-black my-6"></div>

        <div className="border-2 border-black p-4 spa-shadow bg-white">
          <div className="mb-4">
            <h3 className="text-xl font-bold underline decoration-teal-500">Categories</h3>
          </div>
          <nav className="space-y-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="ghost"
                className="w-full justify-start text-black font-medium hover:bg-teal-100 border-2 border-black mb-2 spa-btn"
                onClick={() => onSearchAction(category.name)}
              >
                {category.name}
                <span className="ml-auto text-sm bg-teal-600 text-white px-2 py-1 border border-black">{category.count}</span>
              </Button>
            ))}
          </nav>
          <Button
            onClick={() => onSearchAction("")}
            className="w-full mt-4 bg-teal-600 text-white font-bold spa-btn border-2 border-black hover:bg-teal-700"
          >
            Reset Categories
          </Button>
        </div>
        
        <div className="absolute -bottom-5 bg-teal-600 text-white p-2 z-10 rotate-6 border-2 border-black">
          <span className="font-bold">Explore!</span>
        </div>
      </div>
    </aside>
  )
}