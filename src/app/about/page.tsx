"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { useState } from "react";
import { skills } from "@/data/skills";
import { certificates } from "@/data/certificates";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";






const AboutPage = () => {
	const [selectedCertificate, setSelectedCertificate] = useState(certificates[0]);
	return (
		<div className="container py-12 md:py-16">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
				{/* Left Side - Hero Section */}
				<div className="lg:col-span-4">
					<div className="flex flex-col items-center lg:sticky lg:top-8 space-y-8">
						<Avatar className="w-56 h-56">
							<AvatarImage src="/Images/Jeremy-WFcyBsvIZyLUozH4k7MON7w2tFfIbj.jpg" alt="Jeremy"
							             className="object-cover scale-150 object-top"/>
							<AvatarFallback>JT</AvatarFallback>
						</Avatar>
						<div className="space-y-6">
							<h1 className="text-4xl font-bold text-center">About Me</h1>
							<p className="text-muted-foreground text-lg text-left">
								Backend Engineer and Full-Stack Developer with 5+ years of coding experience, including 3+ years of
								professional experience in backend systems and payment processing integration. Currently pursuing
								advanced cloud computing studies at George Brown College. Experienced in Agile development methodologies
								and delivering high-quality, maintainable code. Specialized in building robust web applications, RESTful
								APIs, and scalable backend systems using C#, JavaScript/TypeScript, Node.js, and modern cloud
								technologies. Proven expertise in AWS cloud architecture, database optimization, and creating
								enterprise-level solutions that handle high-volume transactions.
							</p>
							<Link href="/JeremyTsai-2025.pdf" target="_blank" rel="noopener noreferrer">
								<Button>Download Resume</Button>
							</Link>
						</div>
					</div>
				</div>

				{/* Right Side - Tabs Section */}
				<div className="lg:col-span-8">
					<Tabs defaultValue="skills" className="w-full">
						<TabsList className="grid w-full grid-cols-4">
							<TabsTrigger value="skills">Skills</TabsTrigger>
							<TabsTrigger value="experience">Experience</TabsTrigger>
							<TabsTrigger value="education">Education</TabsTrigger>
							<TabsTrigger value="certificates">Certificates</TabsTrigger>
						</TabsList>

						<TabsContent value="skills" className="mt-8">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{Object.entries(skills).map(([category, items]) => (
									<Card key={category} className="transition-all duration-300 hover:shadow-lg">
										<CardHeader className="pb-3">
											<CardTitle className="text-lg">{category}</CardTitle>
										</CardHeader>
										<CardContent>
											<div className="flex flex-wrap gap-2">
												{items.map((item) => (
													<Badge key={item} variant="secondary" className="text-sm px-3 py-1">
														{item}
													</Badge>
												))}
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="experience" className="mt-8">
							<div className="space-y-8">
								{experiences.map((exp, index) => (
									<div key={index} className="border-l-2 border-primary pl-6 py-4">
										<h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
										<p className="text-muted-foreground text-lg mb-1">{exp.company}</p>
										<p className="text-sm text-muted-foreground mb-4">{exp.period} • {exp.location}</p>
										<div className="flex flex-wrap gap-2 mb-4">
											{exp.badges.map((badge, i) => (
												<Badge key={i} variant="secondary">{badge}</Badge>
											))}
										</div>
										<ul className="space-y-2 list-disc pl-5">
											{exp.responsibilities.map((item, i) => (
												<li key={i}>{item}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</TabsContent>

						<TabsContent value="education" className="mt-8">
							<div className="space-y-8">
								{education.map((edu, index) => (
									<div key={index} className="border-l-2 border-primary pl-6 py-4">
										<h3 className="text-2xl font-semibold mb-2">{edu.title}</h3>
										<p className="text-muted-foreground text-lg mb-1">
											{edu.school} • {edu.degree}
										</p>
										<p className="text-sm text-muted-foreground mb-4">
											{edu.period} • {edu.location}
										</p>
										<ul className="space-y-1 list-disc pl-5">
											{edu.details.map((detail, i) => (
												<li key={i}>{detail}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</TabsContent>

						<TabsContent value="certificates" className="mt-8">
							<Card className="transition-all duration-300 hover:shadow-lg h-[700px]">
								<CardContent className="p-0 h-full">
									<div className="grid grid-cols-1 lg:grid-cols-4 h-full">
										{/* Left Side - Certificate Display */}
										<div className="lg:col-span-3 order-2 lg:order-1 p-6 border-b lg:border-b-0 lg:border-r">
											<div className="h-full flex flex-col">
												<div className="mb-4">
													<h3 className="text-lg font-semibold">{selectedCertificate.title}</h3>
													<p className="text-muted-foreground text-sm">{selectedCertificate.description}</p>
												</div>
												<div className="flex-1">
													<iframe
														src={selectedCertificate.pdfUrl}
														className="w-full h-full border rounded-lg"
														title={selectedCertificate.title}
													/>
												</div>
											</div>
										</div>

										{/* Right Side - Certificate List */}
										<div className="lg:col-span-1 order-1 lg:order-2 p-6">
											<div className="h-full flex flex-col">
												<div className="mb-4">
													<h3 className="text-lg font-semibold">Certificates</h3>
												</div>
												<div className="flex-1">
													<ScrollArea className="h-full">
														<div className="space-y-1 pr-1">
															{certificates.map((cert) => (
																<button
																	key={cert.id}
																	onClick={() => setSelectedCertificate(cert)}
																	className={`w-full text-left p-3 transition-all duration-200 hover:bg-muted/50 border-l-4 rounded-r ${
																		selectedCertificate.id === cert.id
																			? "bg-muted border-l-primary text-primary"
																			: "border-l-transparent"
																	}`}
																>
																	<div className="text-sm font-medium">{cert.title}</div>
																	<div className="text-xs text-muted-foreground mt-1 line-clamp-2">
																		{cert.description}
																	</div>
																</button>
															))}
														</div>
													</ScrollArea>
												</div>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
