import React from "react";

export default function SectionLeft({image, title, text, dark}: {
    image: string;
    title: string;
    text: string;
    dark: boolean
}) {
    const classes = dark ? "flex flex-col-reverse md:flex-row bg-primary-50 text-white" : "flex flex-col-reverse md:flex-row";
    return (
        <div className={classes}>
            <div className="md:w-2/3 p-4 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-2">Kinnaj Films</h2>
                <p className="pb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                    est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                    est Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                <img src={image} alt="Bild" className="w-full h-auto"/>
            </div>
        </div>
    );
}