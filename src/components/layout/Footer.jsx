export default function Footer() {
    return (
        <footer className='flex flex-col items-center justify-center mt-24 mb-8 w-full text-sm space-y-3 border-t border-t-darkLine md:mt-32'>
            <p className='mt-5'>Designed & built by
                <a
                   href='https://github.com/priscilla-e'
                   target='_blank'
                   rel='noreferrer'
                   className='text-primary ml-2 font-semibold hover:text-light'
                >
                    Priscilla Emasoga.
                </a>
            </p>
            <p>&copy; All rights reserved.</p>
        </footer>
    )
}