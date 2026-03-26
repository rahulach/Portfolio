"use client";

import { motion } from "framer-motion";
import { TechIcon } from "@/components/tech-icon";
import { Card, CardContent } from "@/components/ui/card";
import { skills, type SkillCategory } from "@/data/skills";

export function SkillsShowcase() {
  const categories = Object.keys(skills) as SkillCategory[];

  return (
    <section className="py-12 md:py-24 overflow-hidden" id="skills">
      <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Technical Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My expertise across various technologies and platforms
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 text-left">
          {categories.map((category, index) => {
            // Alternate sliding in from left and right based on index
            const slideFromLeft = index % 2 === 0;
            // Provide a polished display title
            const displayTitle = category === "Tools/Platforms" ? "Coding Platforms & Tools" : category;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: slideFromLeft ? -150 : 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.05,
                  type: "spring",
                  stiffness: 80,
                  damping: 15
                }}
                className="h-full"
              >
                <Card className="h-full flex flex-col bg-muted/30 backdrop-blur-sm border-white/10 shadow-lg hover:border-[#d946ef]/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(217,70,239,0.1)]">
                  <div className="px-6 pt-6 pb-2 border-b border-white/5 mx-6">
                    <h3 className="text-xl font-bold tracking-tight text-[#d946ef]">{displayTitle}</h3>
                  </div>
                  <CardContent className="flex-1 p-6">
                    <div className="flex flex-wrap gap-3">
                      {skills[category].map((skill) => (
                        <div 
                          key={skill.name}
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-background/50 px-3 py-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d946ef]/60 hover:text-[#d946ef] hover:shadow-[0_4px_12px_rgba(217,70,239,0.15)]"
                        >
                          <TechIcon logoKey={skill.logoKey} name={skill.name} className="h-5 w-5" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
