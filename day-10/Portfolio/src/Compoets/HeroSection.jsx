import { ArrowDown } from "lucide-react";
import profile from "../assets/Photo.png"

export const HeroSection = () => {
    return (
        <section id="hero"
        className="relative min-h-screen flex flex-col  justify-center px-4"
        >
            <div className="container max-w-4xl  z-10">
                <div className="md:flex justify-between">
                    <div className="space-y-6 md:text-left ">
                        <h1 className="text-4xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1">Marwa</span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Kashify</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            I Create Stellar web experiences with modern techolodies.<br className="md:flex hidden"/>
                            Specializing in front-end development, I bulid interfaces that are
                            both beautiful and functional.
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                View My Work
                            </a>
                        </div>
                    </div>
                    <div className="opacity-0 animate-fade-in-delay-1">
                        <img src={profile} className="md:w-[430px] mx-auto w-[300px]  md:my-0 my-10 border-2 border-primary shadow-[0_0_20px_#8000ff]"/>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    );
};