import React from "react";
import DefaultText from "@/app/[locale]/components/defaultText";

export default function SectionLeftVideo({video, title, text, dark, logo, width}: {
    video: string;
    title: string;
    text: string[];
    dark: boolean;
    logo?: string;
    width?: string;
}) {
    const classes = dark ? "flex flex-col items-center justify-center sm:flex-row bg-primary-50 text-white" : "flex flex-col items-center justify-center sm:flex-row";
    return (
        <div className={classes}>
            <DefaultText title={title} text={text} logo={logo} width={width}/>
            <div className="w-full sm:w-2/5 mb-4 sm:mb-0">
                <div className="image-with-sloped-border-left">
                    <video autoPlay loop muted className="w-full object-cover">
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    );
}
