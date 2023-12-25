export default function SectionHeader({title}) {
    return (
        <div className='flex mb-14'>
            <h2 className='text-2xl font-bold active md:text-3xl'> {title} </h2>
            <span className='flex-1 hidden border-b border-b-darkLine md:inline-block'></span>
        </div>
    )
}