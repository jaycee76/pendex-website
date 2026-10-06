import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const ICON_CLASS = "h-12 w-12 flex-none";

const contacts = [
    {
        name: 'Cellphone No.',
        value: '+(63) 9166783960 (Globe)',
        icon: <PhoneIcon className={`${ICON_CLASS} p-2 text-green-900`} aria-hidden="true" />,
        href: 'tel:+639166783960',
        linkLabel: 'Call us',
    },
    {
        name: 'Messenger',
        value: 'Phendex Medical Trading Inc.',
        icon: <Image className={ICON_CLASS} src="/messenger.svg" alt="" width={48} height={48} />,
        href: 'https://www.facebook.com/messages/t/123536911050158',
        linkLabel: 'Send a message',
        external: true,
    },
    {
        name: 'Facebook Page',
        value: 'Phendex Medical Trading Inc.',
        icon: <Image className={ICON_CLASS} src="/facebook.svg" alt="" width={48} height={48} />,
        href: 'https://www.facebook.com/profile.php?id=100064192472915',
        linkLabel: 'Visit Facebook page',
        external: true,
    },
    {
        name: 'E-mail',
        value: 'Sales@phendexmedical.com',
        icon: <EnvelopeIcon className={`${ICON_CLASS} p-2 text-green-900`} aria-hidden="true" />,
        href: 'mailto:Sales@phendexmedical.com',
        linkLabel: 'Send an e-mail',
    },
]

export default function ContactInformationComponent() {
    return (
        <>
            <ul role="list" className="divide-y divide-green-200">
                {contacts.map((contact) => (
                    <li key={contact.name} className="flex justify-between gap-x-6 py-8">
                        <div className="flex items-center gap-x-4">
                            {contact.icon}
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{contact.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-700">{contact.value}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-green-900">
                                    <a
                                        href={contact.href}
                                        className="underline"
                                        {...(contact.external && { target: "_blank", rel: "noopener noreferrer" })}
                                    >
                                        {contact.linkLabel}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}
