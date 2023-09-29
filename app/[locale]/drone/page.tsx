import React from "react";
import Footer from "@/app/[locale]/components/footer";
import Header from "@/app/[locale]/components/header";
import Link from "next/link";
import Section from "@/app/[locale]/components/section";
import SectionLeft from "@/app/[locale]/components/sectionLeft";

export default function Page() {
    return (
        <div>
            <Header/>
            <Section image="./portrait.png" title="Titel1" text="lorem ipsum" dark={true}/>
            <SectionLeft image="./portrait.png" title="Titel1" text="lorem ipsum" dark={false}/>
            <Section image="./portrait.png" title="Titel1" text="lorem ipsum" dark={true}/>
        </div>
    )
}