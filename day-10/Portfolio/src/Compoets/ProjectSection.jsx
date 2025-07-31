import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
  {
    id: 1,
    title: "Book Store",
    description: "A beautiful landing page app using React and Tailwindcss",
    image: "/projects/project1.PNG",
    tags: ["React", "TailwindCSS", "Supbase"],
    demoUrl: "https://github.com/marwa-k01/BookStore.git",
    githubUrl: "https://github.com/marwa-k01/BookStore.git"
  },
  {
    id: 2,
    title: "HooBank",
    description: "A beautiful landing page app using React and Tailwindcss",
    image: "/projects/project2.PNG",
    tags: ["React", "TailwindCSS", "Supbase"],
    demoUrl: "https://github.com/marwa-k01/project-task.git",
    githubUrl: "https://github.com/marwa-k01/project-task.git"
  },
  {
    id: 3,
    title: "Mobxd",
    description: "A beautiful landing page app using React and Tailwindcss",
    image: "/projects/project3.PNG",
    tags: ["HTML", "TailwindCSS", "Supbase"],
    demoUrl: "https://github.com/marwa-k01/Tailwinds-Project.git",
    githubUrl: "https://github.com/marwa-k01/Tailwinds-Project.git",
  },
]

export const ProjectSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Featured <span className='text-primary'>Project</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 text-w-2xl mx-auto'>
          Here are some of recent projects. Each project was cerafully
          crefted with attention to detail, preformance, and user experience.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, key) => (
            <div key={key} className='group bg-card rounded-lg overflow-hidden'>
              <div className='h-44 overflow-hidden'>
                <img 
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              
              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag) => (
                    <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
              <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
              <div className='flex justify-between items-center'>
                <div className='flex space-x-3'>
                  <a 
                  href={project.demoUrl}
                  target="_blank"
                  className='text-foreground/80 hover:text-primary transition-colors duration-300'
                  >
                    <ExternalLink size={20}/>
                  </a>
                  <a 
                  href={project.githubUrl}
                  arget="_blank"
                  className='text-foreground/80 hover:text-primary transition-colors duration-300'
                  >
                    <Github size={20}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a
          className='cosmic-button w-fit flex items-center mx-auto gap-2'
          target='_blank'
          href='https://github.com/marwa-k01'
          >
            Check My Github <ArrowRight size={16}/>
          </a>
        </div>
      </div>      
    </section>
  )
}
