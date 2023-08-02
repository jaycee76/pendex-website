

const people = [
    {
        name: 'Cellphone No.',
        email: '+(63) 9166783960 (Globe)',
        imageUrl:
            'https://cdn-icons-png.flaticon.com/512/46/46854.png',
    },
    {
        name: 'Messenger',
        email: 'Phendex Medical Trading Inc.',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/800px-Facebook_Messenger_logo_2020.svg.png',
        messenger: 'https://www.facebook.com/messages/t/123536911050158',
        messengerLabel: 'Send a message'
    },
    {
        name: 'Facebook Page',
        email: 'Phendex Medical Trading Inc.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
        facebook: 'https://www.facebook.com/profile.php?id=100064192472915',
        facebookLabel: 'Visit Facebook page'
    },
    {
        name: 'E-mail',
        email: 'Chris.jasmin@phendexmedical.com',
        imageUrl: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png',
        emailLink: 'mailto:Chris.jasmin@phendexmedical.com',
        emailLabel: 'Send an e-mail'
    },
]

export default function ContactInformationComponent() {
    return (
        <>
            <ul role="list" className="divide-y divide-green-200">
                {people.map((person) => (
                    <li key={person.email} className="flex justify-between gap-x-6 py-5">
                        <div className="flex items-center gap-x-4">
                            <img className="h-12 w-12 flex-none" src={person.imageUrl} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-green-500"><a href={person.messenger} target="_blank">{person.messengerLabel}</a></p>
                                <p className="mt-1 truncate text-xs leading-5 text-green-500"><a href={person.facebook} target="_blank">{person.facebookLabel}</a></p>
                                <p className="mt-1 truncate text-xs leading-5 text-green-500"><a href={person.emailLink} target="_blank">{person.emailLabel}</a></p>

                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}