import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

export const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'>Me</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3>Passionate Web Design</h3>
                    <p className='text-muted-foreground'>
                        With over 1 years of experience in web design, I specialize
                        in creating responsive, accessible, and preformant web 
                        applications useing modern techologies.
                    </p>

                    <p className='text-muted-foreground'>
                        I'm passionate about creating elegant solutions to complex
                        problems, and I'm constantly learing new techologies and
                        techiques to stay at the forefront of the ever-evloing web
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href='#contact' className='cosmic-button'>
                            Get In Touch
                        </a>
                        <a href='' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                            Download CV
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Code className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>Web Design</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive website and web applications with 
                                    modern framework
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <User className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Designing intuitive user interfaces and seamless user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Briefcase className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>Project Mangement</h4>
                                <p className="text-muted-foreground">
                                    Learing project from conception to completion with agile
                                    methodologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
