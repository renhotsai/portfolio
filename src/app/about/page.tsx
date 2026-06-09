"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import AboutHero from "@/components/AboutHero";
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
					<div className="lg:sticky lg:top-8">
						<AboutHero />
					</div>
				</div>

				{/* Right Side - Desktop Tabs / Mobile Overview */}
				<div className="lg:col-span-8">
					{/* Mobile: Simple overview with navigation hints */}
					<div className="md:hidden">
						<div className="space-y-6">
							<div>
								<h2 className="text-xl font-semibold mb-4">Explore My Background</h2>
								<p className="text-muted-foreground mb-6">
									Use the menu above to navigate through different sections of my professional profile.
								</p>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<Link
									href="/about/skills"
									className="p-4 border rounded-lg hover:shadow-md transition-all"
								>
									<h3 className="font-medium mb-2">Skills</h3>
									<p className="text-sm text-muted-foreground">Technical expertise</p>
								</Link>
								<Link
									href="/about/experience"
									className="p-4 border rounded-lg hover:shadow-md transition-all"
								>
									<h3 className="font-medium mb-2">Experience</h3>
									<p className="text-sm text-muted-foreground">Work history</p>
								</Link>
								<Link
									href="/about/education"
									className="p-4 border rounded-lg hover:shadow-md transition-all"
								>
									<h3 className="font-medium mb-2">Education</h3>
									<p className="text-sm text-muted-foreground">Academic background</p>
								</Link>
								<Link
									href="/about/certificates"
									className="p-4 border rounded-lg hover:shadow-md transition-all"
								>
									<h3 className="font-medium mb-2">Certificates</h3>
									<p className="text-sm text-muted-foreground">Certifications</p>
								</Link>
							</div>
						</div>
					</div>

					{/* Desktop: Full Tab Interface */}
					<Tabs defaultValue="skills" className="w-full hidden md:block">
						<TabsList className="grid w-full grid-cols-4 gap-1">
							<TabsTrigger value="skills" className="text-sm">Skills</TabsTrigger>
							<TabsTrigger value="experience" className="text-sm">Experience</TabsTrigger>
							<TabsTrigger value="education" className="text-sm">Education</TabsTrigger>
							<TabsTrigger value="certificates" className="text-sm">Certificates</TabsTrigger>
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
							<Card className="transition-all duration-300 hover:shadow-lg">
								<CardContent className="p-0">
									<div className="grid grid-cols-1 lg:grid-cols-4">
										{/* Mobile/Desktop Certificate Display */}
										<div className="lg:col-span-3 order-2 lg:order-1 p-4 md:p-6 border-b lg:border-b-0 lg:border-r">
											<div className="space-y-4">
												<div>
													<h3 className="text-lg font-semibold">{selectedCertificate.title}</h3>
													<p className="text-muted-foreground text-sm">{selectedCertificate.description}</p>
												</div>

												{/* Desktop PDF Viewer */}
												<div className="hidden lg:block">
													<iframe
														src={selectedCertificate.pdfUrl}
														className="w-full h-[500px] border rounded-lg"
														title={selectedCertificate.title}
													/>
												</div>

												{/* Mobile-friendly Download Link */}
												<div className="lg:hidden">
													<div className="bg-muted rounded-lg p-6 text-center space-y-4">
														<div className="text-6xl">📜</div>
														<div>
															<h4 className="font-medium mb-2">Certificate Document</h4>
															<p className="text-sm text-muted-foreground mb-4">
																Tap the button below to view or download the certificate
															</p>
															<Link href={selectedCertificate.pdfUrl} target="_blank" rel="noopener noreferrer">
																<Button className="w-full">
																	View Certificate
																</Button>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>

										{/* Certificate List */}
										<div className="lg:col-span-1 order-1 lg:order-2 p-4 md:p-6">
											<div className="space-y-4">
												<h3 className="text-lg font-semibold">Certificates</h3>

												{/* Mobile: Horizontal Scroll */}
												<div className="lg:hidden">
													<div className="flex gap-2 overflow-x-auto pb-2">
														{certificates.map((cert) => (
															<button
																key={cert.id}
																onClick={() => setSelectedCertificate(cert)}
																className={`flex-shrink-0 p-3 rounded-lg border-2 transition-all duration-200 min-w-[200px] text-left ${
																	selectedCertificate.id === cert.id
																		? "border-primary bg-primary/10"
																		: "border-border hover:border-primary/50"
																}`}
															>
																<div className="font-medium text-sm">{cert.title}</div>
																<div className="text-xs text-muted-foreground mt-1 line-clamp-2">
																	{cert.description}
																</div>
															</button>
														))}
													</div>
												</div>

												{/* Desktop: Vertical List */}
												<div className="hidden lg:block">
													<ScrollArea className="h-[500px]">
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
