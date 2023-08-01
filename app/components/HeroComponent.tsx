import Image from "next/image";
import bosoLogo from "@/public/boso_logo.png"
import leonhardlogo from "@/public/LeonhardLang_logo.png"
import kenzLogo from "@/public/kenz_logo.png"


export default function HeroComponent() {
    return (
        <>
            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-green-700 md:text-5xl lg:text-6xl dark:text-white">Experience the Phendex Medical Trading Inc. difference today.</h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">At Phendex Medical Trading Inc., we are committed to revolutionizing healthcare by providing top-quality medical equipment and solutions to healthcare facilities, practitioners, and individual patients. With years of expertise in the medical industry, we take pride in being a trusted partner for all your medical equipment needs.</p>
                        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300">
                                View products
                            </a>
                            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Contact us
                            </a>
                        </div>
                        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                            <span className="font-semibold text-gray-400 uppercase">GLOBAL PARTNERS</span>
                            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                                <Image
                                    src={bosoLogo}
                                    alt="boso logo"
                                    width={200}
                                    height={100}
                                />
                                <Image
                                    src={leonhardlogo}
                                    alt="boso logo"
                                    width={150}
                                    height={50}
                                />
                                <Image
                                    src={kenzLogo}
                                    alt="boso logo"
                                    width={200}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}