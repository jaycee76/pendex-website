import ContactInformationComponent from "./ContactInformationComponent";
import { Fade } from "react-awesome-reveal";


export default function ContactComponent() {
    return (
        <>
            <section className="sm:flex sm:justify-evenly bg-green-50">
                <Fade
                    direction='up'
                    triggerOnce={true}
                >
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-green-700">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Do you want to inquire about our service? Want to know more about our business? Want to request a brochure for a specific product? Got any questions for us? Let us know.</p>
                    </div>
                </Fade>
                <div className="grid max-w-screen-xl gap-x-12 gap-y-16 px-4 pb-36 sm:px-6 lg:max-w-7xl lg:px-8">
                    <Fade
                        direction='left'
                        triggerOnce={true}
                        delay={400}
                    >
                        <ContactInformationComponent />
                    </Fade>
                </div>
            </section>
        </>
    )
}