"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Navbar } from "./components/ui/mini-navbar";
import { LogoLoop } from "./components/ui/LogoLoop";
import Preloader from "./components/Preloader";
import { ScrollTriggered } from "./components/ui/stack-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { Footer } from "./components/ui/modem-animated-footer";
import {LinkPreview} from "./components/ui/LinkPreview";
import { HandWrittenTitle } from "./components/HandwrittenTitle";
import { AnimatedFolder } from "./components/ui/3d-folder";
import { Timeline } from "./components/ui/TimelineEntry";
import { projects } from "@/lib/projects";
import Image from "next/image";
import StickerPeel from './components/ui/StickerPeel';
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  NotepadTextDashed,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

  const data = [
    {
      title: "2010",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
            Completed schooling from SIES High School
          </p>
          <div>
            <Image
              src="/images/SIES-School.avif"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-36 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
            Continued my journey as a science student at SIES College of Arts,
            Science and Commerce
          </p>
          <div>
            <Image
              src="/images/SIES-College.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-36 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Currently studying Artificial Intelligence and Machine Learning in Thakur College of Engineering and Technology
          </p>
          <div>
            <Image
              src="/images/TCET.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-36 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  
  const socialLinks = [
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:contact@resumegpt.com",
      label: "Email",
    },
  ];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number] },
      opacity: { duration: 0.5 },
    },
  },
};

const portfolioData = [
  {
    title: "Branding",
    projects: [
      { id: "1", image: "https://plus.unsplash.com/premium_photo-1723489242223-865b4a8cf7b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0", title: "Lumnia" },
      { id: "2", image: "https://i.pinimg.com/1200x/99/ca/5c/99ca5cf82cf12df8801f7b2bef38d325.jpg", title: "Prism" },
      { id: "3", image: "https://i.pinimg.com/736x/7c/15/39/7c1539cf7ff0207cb49ce0d338de1e5f.jpg", title: "Vertex" },
    ]
  }
]

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [heroReady, setHeroReady] = useState(false);

  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/images/hero.jpg";
    img.decode().then(() => setHeroReady(true));
  }, []);

  const handleFreeze = useCallback((_?: boolean) => {
    if (heroReady) setLoading(false);
  }, [heroReady]);

  if (loading) {
    return <Preloader onFreeze={handleFreeze} />;
  }

  if (loading) return <Preloader onFreeze={() => setLoading(false)}/>;

function ExperienceHeading() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 90%", "end 40%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <div
      ref={wrapperRef}
      className="relative mb-28 flex items-center justify-center"
    >
      <motion.svg
        viewBox="0 0 600 260"
        className="absolute -inset-12 w-[140%] h-[140%] pointer-events-none"
      >
        <motion.path
          d="
            M 80 140
            C 90 40, 510 40, 520 140
            C 530 230, 90 230, 80 140
            C 70 100, 120 90, 160 90
          "
          fill="none"
          stroke="#628141"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength, opacity }}
        />
      </motion.svg>

      {/* TEXT */}
      <h1 className="relative z-10 text-4xl md:text-6xl font-bold">
        Experience
      </h1>
    </div>
  );
}


  return (
    <div className="relative w-full overflow-hidden">
      <section
        id="home"
        className="relative min-h-dvh w-full text-white bg-cover bg-center bg-no-repeat bg-hero"
        style={{
          backgroundImage: 'url("/images/hero.jpg")',
        }}
      >

        {/* Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-20"
        >
          <Navbar />
        </motion.div>

        {/* Logo Loop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-full z-10"
        >
          <div className="relative overflow-hidden h-[120px] md:h-[150px]">
            <LogoLoop
              logos={techLogos}
              speed={150}
              direction="left"
              logoHeight={50}
              gap={30}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#EBD5AB"
            />
          </div>
        </motion.div>
      </section>

    <section id="about" ref={aboutRef} className="min-h-dvh px-6 md:px-12 bg-background text-foreground">
      <div className="flex justify-center mb-12 text-for">
        <HandWrittenTitle title="About me" />
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
          <div className="flex justify-center lg:justify-start relative min-h-[500px]">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="w-[560px] h-[420px] rounded-2xl border-2 border-neutral-400 dark:border-neutral-600 flex items-center justify-center text-lg font-semibold text-foreground/100-600 dark:text-foreground/100-300">
                <img src="/images/Bala.png" className="w-full h-full object-cover"></img>
              </div>
            </div>
          </div>
          {/* Right Text */}
          <div className="flex flex-col justify-center space-y-8 font-serif">
            <div className="text-foreground dark:text-foreground text-xl md:text-3xl max-w-3xl">
              Hello everyone, I’m{" "}
              <LinkPreview
                url="https://ui.aceternity.com"
                imageSrc="/images/Bala-Banner.jpg"
                isStatic
                className="font-bold bg-clip-text"
              >
                Bala Sudalaimuthu
              </LinkPreview>
              .
            </div>

            <div className="text-foreground/100-500 dark:text-foreground/100-400 text-xl md:text-3xl max-w-3xl">
              I am currently pursuing Artificial Intelligence and Machine Learning Engineering at{" "}
              <LinkPreview
                url="https://bala-ten.vercel.app/"
                imageSrc="/images/TCET.jpeg"
                isStatic
                className="font-bold"
              >
                Thakur College of Engineering and Technology (TCET)
              </LinkPreview>
              .
            </div>

            <div className="text-foreground/100-500 dark:text-foreground/100-400 text-xl md:text-3xl max-w-3xl">
              I am a passionate{" "}
              <LinkPreview
                url="/projects"
                imageSrc="/images/Full-Stack.png"
                isStatic
                className="font-bold"
              >
                full-stack developer
              </LinkPreview>{" "}
              with strong frontend and creative UI skills.
            </div>
          </div>
        </div>
      </div>
    </section>


<section
  id="education"
  ref={educationRef}
  className="relative min-h-dvh px-6 md:px-12 bg-background text-foreground"
>
  <div className="flex justify-center mb-12">
    <HandWrittenTitle title="Education" />
  </div>

  <div className="w-full max-w-6xl mx-auto">
    <Timeline data={data} />
  </div>
</section>


      {/* PROJECTS / TESTIMONIALS SECTION */}
<section id="project" ref={projectRef} className="min-h-dvh bg-background text-foreground px-6 md:px-12">
  <div className="flex justify-center pt-12 pb-8 text-primary">
    <HandWrittenTitle title="Projects" />
  </div>

  <div className="w-full max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <AnimatedFolder title="Featured" projects={projects} className="text-foreground" />
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-4">More projects</h3>
        <p className="text-muted-foreground mb-6">Explore the full project gallery including case studies, demos, and source links.</p>
        <div className="flex gap-4">
          <a href="/projects" className="px-4 py-2 rounded bg-accent text-white">View All Projects</a>
        </div>
      </div>
    </div>
  </div>
</section>




<section
  id="experience"
  ref={experienceRef}
  className="min-h-dvh flex flex-col items-center justify-start px-6 md:px-12 py-32 bg-background text-foreground relative"
>
  <HandWrittenTitle title="Experience" />

  <ScrollTriggered />
</section>


    <Footer
      brandName="Bala"
    />
    </div>
  );
}
