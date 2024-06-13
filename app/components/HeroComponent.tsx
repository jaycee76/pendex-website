import Image from "next/image";
import bosoLogo from "@/public/boso_logo.png"
import leonhardlogo from "@/public/LeonhardLang_logo.png"
import kenzLogo from "@/public/kenz_logo.png"
import stLukesLogo from "@/public/stLukes_logo.png"
import mdhLogo from "@/public/mdhLogo.png"
import healthwayLogo from "@/public/healthwayLogo.jpg"
import { Slide, Fade } from "react-awesome-reveal";

export default function HeroComponent() {
    return (
        <>
            <div className="z-0">
                <section className="bg-white">
                    <div className="pt-32 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
                        <Slide
                            direction="down"
                            triggerOnce={true}
                        >
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-green-700 md:text-5xl lg:text-6xl dark:text-white">Experience the Phendex Medical Trading Inc. difference today.</h1>
                        </Slide>
                        <Fade
                            direction="right"
                            delay={500}
                            triggerOnce={true}
                        >
                            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">At Phendex Medical Trading Inc., we are committed to revolutionizing healthcare by providing top-quality medical equipment and solutions to healthcare facilities, practitioners, and individual patients. With years of expertise in the medical industry, we take pride in being a trusted partner for all your medical equipment needs.</p>
                        </Fade>
                        <Fade
                            direction="left"
                            delay={800}
                            triggerOnce={true}
                        >
                            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                                <a href="#products" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300">
                                    View products
                                </a>
                                <a href="#contact" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    Contact us
                                </a>
                            </div>
                        </Fade>
                        <Fade
                            direction="up"
                            delay={1300}
                            triggerOnce={true}
                        >
                            <div className="px-4 py-10 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                                <span className="font-semibold text-gray-400 uppercase">TRUSTED BY</span>
                                <div className="flex sm:flex-row flex-col items-center justify-around mt-8 text-gray-500">
                                    <div className="sm:mb-0 mb-12">
                                        <Image
                                            src={mdhLogo}
                                            alt="MDH logo"
                                            width={150}
                                            height={50}
                                        />
                                    </div>
                                    <div className="sm:mb-0 mb-12">
                                    <Image
                                        src={stLukesLogo}
                                        alt="St. Lukes logo"
                                        width={80}
                                        height={100}
                                    />
                                    </div>
                                    <Image
                                        src={healthwayLogo}
                                        alt="Healthway logo"
                                        width={150}
                                        height={100}
                                    />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>
            </div>
        </>
    );
}