import React, { useState } from 'react'
import { cn } from '@/lib/utils'

const skils = [
    // Frontend
    { name: "HTML/CSS", level: "95", category: "frontend" },
    { name: "JavaScript", level: "90", category: "frontend" },
    { name: "React", level: "90", category: "frontend" },
    { name: "TypeScript", level: "65", category: "frontend" },
    { name: "Next.js", level: "65", category: "frontend" },

    // Backend 
    { name: "Node.js", level: 75, category: "backend"},
    { name: "Express", level: 65, category: "backend"},
    { name: "PostgreSQL", level: 85, category: "backend"},

    // Tool 
    { name: "Git/GitHup", level: 90, category: "tools"},
    { name: "Docker", level: 70, category: "tools"},
    { name: "Figma", level: 65, category: "tools"},
    { name: "VS Code", level: 95, category: "tools"},
]

const categories = ["all", "frontend", "backend", "tools"];

export const SkilsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkils = skils.filter(
    (skil) => activeCategory === "all" || skil.category === activeCategory
  );

  return (
    <section id='skils' className='py-24 px-4 relative bg-secondary/30'>
       <div className='container mx-auto max-w-5xl'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            My <span className='text-primary'>Skils</span>
          </h2>

          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {categories.map((category, key) => (
              <button 
              key={key}
              onClick={() => setActiveCategory(category)} 
              className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer',
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}>
                {category}
              </button>
            ))}
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredSkils.map((skil, key) => (
              <div key={key} className='bg-card p-6 rounded-lg shadow-lg card-hover'>
                <div className='text-left mb-4'>
                  <h3 className='font-semibold text-lg'>{skil.name}</h3>
                </div>
                <div className='w-full bg-secondary/50 rounded-full h-auto'>
                    <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                     style={{width: skil.level + "%"}}>

                    </div>
                    <div className='text-right mt-2'>
                      <span className='text-sm text-muted-foreground'>
                        {skil.level}%
                       
                      </span>
                    </div>
                </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  )
}
