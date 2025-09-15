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

					{/* Mobile: Compact Certificate List */}
					<div className="lg:hidden space-y-3">
						{certificates.map((cert) => (
							<Card key={cert.id} className="transition-all duration-300 hover:shadow-md">
								<CardContent className="p-3">
									<div className="flex items-center justify-between gap-3">
										<div className="flex-1 min-w-0">
											<h3 className="text-base font-medium truncate">{cert.title}</h3>
											<p className="text-muted-foreground text-xs mt-1 line-clamp-2">{cert.description}</p>
										</div>
										<Link href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">
											<Button size="sm" variant="outline" className="flex-shrink-0">
												View
											</Button>
										</Link>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Desktop: Interactive Certificate Viewer */}
					<Card className="hidden lg:block transition-all duration-300 hover:shadow-lg">
						<CardContent className="p-0">
							<div className="grid grid-cols-1 lg:grid-cols-4">
								{/* Desktop Certificate Display */}
								<div className="lg:col-span-3 order-2 lg:order-1 p-6 border-b lg:border-b-0 lg:border-r">
									<div className="space-y-4">
										<div>
											<h3 className="text-lg font-semibold">{selectedCertificate.title}</h3>
											<p className="text-muted-foreground text-sm">{selectedCertificate.description}</p>
										</div>
										<iframe
											src={selectedCertificate.pdfUrl}
											className="w-full h-[500px] border rounded-lg"
											title={selectedCertificate.title}
										/>
									</div>
								</div>

								{/* Desktop Certificate List */}
								<div className="lg:col-span-1 order-1 lg:order-2 p-6">
									<div className="space-y-4">
										<h3 className="text-lg font-semibold">Certificates</h3>
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
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default CertificatesPage;