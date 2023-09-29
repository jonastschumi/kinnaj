import React from "react";
import Link from "next/link";
import RevealOnScroll from "@/app/[locale]/components/revealOnScroll";

export default function Project() {
    return (
        <div className="white flex flex-col items-center justify-between bg-primary-50">
            <h1 className="pt-8 text-white font-bold text-2xl">Clients</h1>
            <div className="px-4 sm:px-8 md:px-14 lg:px-18 pt-10 pb-8 flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <RevealOnScroll time="0">
                    <div className="bg-white shadow-lg rounded-3xl overflow-hidden animate-client-card-one">
                        <div className="flex items-center justify-center">
                            <img src="client1-logo.png" alt="Client 1 Logo" className="w-32 h-32 object-contain"/>
                        </div>
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">Client 1</h2>
                            <p className="text-gray-700 mt-2">Eine kurze Beschreibung des ersten Kunden.</p>
                        </div>
                    </div>
                    </RevealOnScroll>
                    <RevealOnScroll time="1">
                    <div className="bg-white shadow-lg rounded-3xl overflow-hidden animate-client-card-two">
                        <div className="flex items-center justify-center">
                            <img src="client2-logo.png" alt="Client 2 Logo" className="w-32 h-32 object-contain"/>
                        </div>
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">Client 2</h2>
                            <p className="text-gray-700 mt-2">Eine kurze Beschreibung des zweiten Kunden.</p>
                        </div>
                    </div>
                    </RevealOnScroll>
                    <RevealOnScroll time="2">
                    <div className="bg-white shadow-lg rounded-3xl overflow-hidden animate-client-card-three">
                        <div className="flex items-center justify-center">
                            <img src="client2-logo.png" alt="Client 2 Logo" className="w-32 h-32 object-contain"/>
                        </div>
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">Client 3</h2>
                            <p className="text-gray-700 mt-2">Eine kurze Beschreibung des dritten Kunden.</p>
                        </div>
                    </div>
                    </RevealOnScroll>
                    <RevealOnScroll time="3">
                    <div className="bg-white shadow-lg rounded-3xl overflow-hidden animate-client-card-four">
                        <div className="flex items-center justify-center">
                            <img src="client2-logo.png" alt="Client 2 Logo" className="w-32 h-32 object-contain"/>
                        </div>
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">Client 4</h2>
                            <p className="text-gray-700 mt-2">Eine kurze Beschreibung des vierten Kunden.</p>
                        </div>
                    </div>
                    </RevealOnScroll>
                </div>
            </div>
            <div className="p-7 bottom-0 right-0">
                <Link href="/project" className="bg-primary-200 hover:bg-primary-300 text-white font-semibold py-2 px-4 rounded-full">
                    More Clients
                </Link>
            </div>
        </div>
    )
}