"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import AboutHero from "@/components/AboutHero";
import MobileBreadcrumb from "@/components/MobileBreadcrumb";
import { certificates } from "@/data/certificates";
import Link from "next/link";

const CertificatesPage = () => {
	const [selectedCertificate, setSelectedCertificate] = useState(certificates[0]);

	return (
		<div className="container py-12 md:py-16">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
				{/* Left Side - Hero Section (Desktop) */}
				<div className="lg:col-span-4 hidden lg:block">
					<div className="sticky top-8">
						<AboutHero />
					</div>
				</div>

				{/* Right Side - Certificates Content */}
				<div className="lg:col-span-8">
					<MobileBreadcrumb currentPage="Certificates" />

					{/* Mobile Hero (condensed) */}
					<div className="lg:hidden mb-8">
						<h1 className="text-2xl font-bold mb-4">Certificates</h1>
						<p className="text-muted-foreground">
							Professional certifications and achievements.
						</p>
					</div>

					{/* Certificates Section */}
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
				</div>
			</div>
		</div>
	);
};

export default CertificatesPage;