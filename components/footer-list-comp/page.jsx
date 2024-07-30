import Link from 'next/link'
import React from 'react'


const List = (props) => {
    return (
        <div className='w-1/3 flex h-full flex-col justify-around items-center'>
            <div className='font-bold text-center flex justify-center items-start'>
                <h2 className='font-bold text-xl text-center'>{props.title}</h2>
            </div>
            <ul className='flex flex-col h-[65%] items-start justify-between'>
            <Link href={props.item1link}><li>{props.item1}</li></Link>
            <Link href={props.item2link}><li>{props.item2}</li></Link>
            <Link href={props.item3link}><li>{props.item3}</li></Link>
            <Link href={props.item4link}><li>{props.item4}</li></Link>
            <Link href={props.item5link}><li>{props.item5}</li></Link>
            </ul>
        </div>
    )
}

export default List