"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown, GraduationCap, Code, CheckCircle, Mail, Globe } from "lucide-react";
import resumeData from "../data/resume.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Splash screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#05050a] fixed inset-0 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-light tracking-widest text-[#f0f0f5] mb-8 relative font-serif"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">BH</span>
        </motion.div>
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen px-6 py-20 md:px-24 tracking-wide relative">
      {/* Sticky Progress Indicator Component (mock text, relying on CSS for visual) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {['Hero', 'Experience'].map((item, idx) => (
          <div key={item} className="w-2 h-2 rounded-full bg-white/20 hover:bg-blue-400 transition-colors cursor-pointer" title={item} />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
        className="min-h-[85vh] flex flex-col md:flex-row justify-center md:justify-between items-center max-w-5xl mx-auto relative pt-10 gap-10"
      >
        <div className="flex-1 flex flex-col items-start mt-20 md:mt-0 text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-mono text-sm tracking-wider mb-4 block uppercase"
          >
            Welcome, I'm
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-blue-500">
            {resumeData.basics.name}
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-gray-400 font-light mb-8 max-w-2xl leading-relaxed">
            {resumeData.basics.title}
          </h2>

          <p className="text-lg text-gray-500 max-w-xl mb-12">
            {resumeData.basics.summary}
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 mt-4"
          >
            <a href="#experience" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] w-fit">
              View Experience <ChevronDown size={18} />
            </a>
          </motion.div>
        </div>

        {/* BH Text Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:w-1/3 flex justify-center mt-12 md:mt-0 relative"
        >
          <div className="absolute inset-0 bg-green-500 blur-[80px] opacity-20 rounded-full" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center border-4 border-white/10 shadow-[0_0_40px_rgba(34,197,94,0.3)] bg-[#0a0a15] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-8xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-600 relative z-10">
              BH
            </span>
          </div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      {resumeData.experience.length > 0 && (
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          id="experience" 
          className="max-w-5xl mx-auto py-24"
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Professional <span className="text-blue-500">Experience</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          <div className="space-y-12 border-l-2 border-white/10 pl-8 ml-4 relative">
            {resumeData.experience.map((exp, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative group">
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-[#05050a] border-2 border-blue-500 rounded-full group-hover:bg-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300" />
                <div className="glass glass-hover p-8 rounded-2xl -mt-5 transition-all duration-300 transform group-hover:-translate-y-1 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                      <p className="text-xl text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-sm text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-full inline-block">{exp.dates}</p>
                      <p className="text-sm text-gray-400 mt-1">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-gray-300 leading-relaxed">
                        <span className="text-blue-500 mt-1.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Projects Section */}
      {resumeData.projects.length > 0 && (
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          id="projects" 
          className="max-w-5xl mx-auto py-24"
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Featured <span className="text-purple-500">Projects</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {resumeData.projects.map((project, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass glass-hover rounded-3xl overflow-hidden group">
                <div className="h-64 w-full bg-blue-900/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent z-10" />
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  )}
                </div>
                <div className="p-8 -mt-6 relative z-20 flex flex-col min-h-[300px]">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-xs font-mono text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">{tech}</span>
                      ))}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                          <CheckCircle size={16} className="text-purple-500 flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {project.links && Object.keys(project.links).length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-3">
                      {Object.entries(project.links).map(([name, url]) => (
                        <a key={name} href={url as string} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white bg-white/5 hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                          <Globe size={14} />
                          {name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Education Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto py-24"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <GraduationCap className="text-blue-400" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif">Academic <span className="text-blue-500">Background</span></h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>
        
        <div className="space-y-12 border-l-2 border-white/10 pl-8 ml-4 relative">
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-[#05050a] border-2 border-blue-500 rounded-full group-hover:bg-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300" />
              
              <div className="glass glass-hover p-8 rounded-3xl -mt-5 transition-all duration-300 transform group-hover:-translate-y-1">
                <h4 className="text-2xl font-bold text-white mb-2">{edu.institution}</h4>
                {edu.degree && <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium mb-2">{edu.degree}</p>}
                {edu.dates && <p className="text-sm text-gray-500 font-mono inline-block px-3 py-1 bg-white/5 rounded-full">{edu.dates}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto pb-24"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20">
              <Code className="text-purple-400" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif">Technical <span className="text-purple-500">Expertise</span></h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </motion.div>
        
        <div className="flex flex-col gap-6">
          {resumeData.skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass p-6 md:p-8 rounded-3xl group flex flex-col md:flex-row gap-6 md:items-center relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="md:w-1/3 z-10">
                <h4 className="text-lg md:text-xl font-bold text-white flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  {skillGroup.category}
                </h4>
              </div>
              
              <div className="md:w-2/3 flex flex-wrap gap-3 z-10 w-full">
                {skillGroup.items.map((skill, i) => (
                  <div 
                    key={i} 
                    className="px-4 py-2.5 bg-[#0a0a15]/80 hover:bg-blue-500/20 border border-white/5 hover:border-blue-500/50 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all shadow-sm flex items-center gap-2 group/skill"
                  >
                    <CheckCircle size={16} className="text-blue-500/70 group-hover/skill:text-blue-400" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      {resumeData.certifications && resumeData.certifications.length > 0 && (
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto py-24"
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Featured <span className="text-green-500">Certifications</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {resumeData.certifications.map((cert, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass glass-hover p-8 rounded-3xl group transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-green-500/10 rounded-2xl border border-green-500/20 flex-shrink-0 mt-1">
                    <GraduationCap className="text-green-400" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 leading-tight">{cert.title}</h4>
                    <p className="text-green-400 font-medium mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 font-mono">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Footer / Connect Section */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto py-20 border-t border-white/10 mt-10 flex flex-col items-center justify-center text-center relative z-10"
      >
        <div className="w-full max-w-sm mb-12">
           <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Let's Connect</h3>
        <p className="text-gray-400 mb-10 max-w-lg text-lg">
          Currently open for new opportunities in AI, Machine Learning, and innovative Software Development.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <a href={`mailto:${resumeData.basics.email}`} className="px-6 py-3 glass glass-hover rounded-full text-blue-300 flex items-center gap-3 transition-all hover:text-blue-200">
            <Mail size={18} /> {resumeData.basics.email}
          </a>
          <a href={`https://${resumeData.basics.links.LinkedIn}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass glass-hover rounded-full text-blue-300 flex items-center gap-3 transition-all hover:text-blue-200">
            <Globe size={18} /> LinkedIn Profile
          </a>
        </div>
      </motion.footer>
    </div>
  );
}
