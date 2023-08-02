import ContactInformationComponent from "./ContactInformationComponent";
import { Fade } from "react-awesome-reveal";


export default function ContactComponent() {
    return (
        <>
            <section className="bg-green-50">
                <Fade
                    direction='up'
                    triggerOnce={true}
                >
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-green-700">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Do you want to inquire about our service? Want to know more about our business? Want to request a brochure for a specific product? Got any questions for us? Let us know.</p>
                    </div>
                </Fade>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 px-4 pb-36 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <Fade
                        direction='left'
                        triggerOnce={true}
                        delay={400}
                    >
                        <ContactInformationComponent />
                    </Fade>
                    <Fade
                        direction='right'
                        triggerOnce={true}
                        delay={400}
                    >
                        <form action="#" className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="name@email.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-500">Subject</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-green-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500">Your message</label>
                                <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-green-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." defaultValue={""} />
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">Send message</button>
                        </form>
                    </Fade>
                </div>
            </section>
        </>
    )
}