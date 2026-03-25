"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarsCanvas } from "@/components/star-background";

const certifications = [
  {
    id: "oracle",
    title: "OCI Data Science Professional",
    issuer: "Oracle's Cloud",
    date: "Aug 2025",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F0E82769DEF3D7BAD0000E89C74B7713CA2753F4EE5A9607F236BBCD9BCE8CB4"
  },
  {
    id: "dsa",
    title: "Data Structure and Algorithms",
    issuer: "Cipher School",
    date: "July 2025",
    url: "https://www.cipherschools.com/certificate/preview?id=6884e989ca64e035786b232a"
  },
  {
    id: "nptel",
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "May 2025",
    url: "https://drive.google.com/file/d/1kMzw9hVnI45QAvjAqNmCvjN2G4ZY5HwT/view"
  },
  {
    id: "iamneo",
    title: "OOP's java",
    issuer: "IamNeo",
    date: "Apr 2025",
    url: "https://drive.google.com/file/d/1Kb0pAq22Ee0eDr7yyrF7cIn9YmnJeeEW/view"
  }
];

export function Certifications() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Certifications
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Professional certifications and specialized skill development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-4xl"
        >
          <Tabs defaultValue="oracle" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-background/50 backdrop-blur-sm border shadow-sm">
              {certifications.map((cert) => (
                <TabsTrigger 
                  key={cert.id} 
                  value={cert.id}
                  className="py-2.5 text-xs sm:text-sm transition-all duration-300 hover:shadow-[0_0_20px_-2px_rgba(217,70,239,0.5)] hover:text-[#d946ef] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:hover:shadow-none data-[state=active]:hover:text-primary-foreground"
                >
                  <span className="truncate">{cert.issuer}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="mt-8">
              {certifications.map((cert) => (
                <TabsContent key={cert.id} value={cert.id}>
                  <Card className="border-2 transition-all hover:border-primary/50 relative overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
                      <StarsCanvas />
                    </div>
                    <CardContent className="relative z-10 flex flex-col items-center justify-center p-8 text-center sm:p-12">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mb-2 text-2xl font-bold">{cert.title}</h3>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                        <span className="font-medium text-foreground">{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                      {cert.url && (
                        <Button asChild variant="outline" className="mt-auto">
                          <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            View Credential <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
