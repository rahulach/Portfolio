"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Sparkles, GraduationCap } from "lucide-react";

export function WhoAmI() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden" id="about">
      {/* Background glow for interaction */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d946ef]/10 blur-[100px] opacity-50 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d946ef]/30 bg-[#d946ef]/10 px-3 py-1 text-sm text-[#d946ef]">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Discover my journey</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card className="h-full bg-muted/30 backdrop-blur-sm border-white/10 shadow-lg transition-all duration-500 hover:border-[#d946ef]/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d946ef]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <CardContent className="space-y-6 p-6 md:p-8 text-left leading-relaxed md:text-lg relative z-10">
                <p>
                  I&apos;m <span className="font-semibold text-primary">Rahul Acharya</span>, a software engineer pursuing a Bachelor of Technology in
                  Computer Science and Engineering at Lovely Professional University. I specialize in building
                  robust software applications using a diverse set of technologies, ranging from desktop applications using Java
                  to NLP systems using Python.
                </p>
                <p>
                  My technical toolkit includes C, C++, Java, and Python. I enjoy problem-solving on platforms like
                  Leetcode and GeeksForGeeks. Always eager to take on new projects, optimize complex algorithms, and deliver impactful, scalable results.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <Card className="flex-1 bg-muted/30 backdrop-blur-sm border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#d946ef]/40 hover:shadow-[0_10px_30px_rgba(217,70,239,0.15)] group">
              <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full text-primary transition-transform group-hover:scale-110 duration-300">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl">Education</h3>
                <p className="text-sm text-muted-foreground">B.Tech in Computer Science, LPU</p>
              </CardContent>
            </Card>

            <Card className="flex-1 bg-muted/30 backdrop-blur-sm border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#d946ef]/40 hover:shadow-[0_10px_30px_rgba(217,70,239,0.15)] group">
              <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full text-primary transition-transform group-hover:scale-110 duration-300">
                  <Code2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl">Problem Solver</h3>
                <p className="text-sm text-muted-foreground">Active on LeetCode & GeeksForGeeks</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
