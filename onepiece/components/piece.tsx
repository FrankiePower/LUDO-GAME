import Image from 'next/image';
import React from 'react'

interface pieceProps {
  className: string;
  src: string;
  alt: string;
}

const Piece:React.FC<pieceProps> = ({className, src, alt}) => {
  return (
    <span className={`${className} h-2 w-2 rounded-full `}>
      <Image src={src} alt={alt} width={0} height={0} className='m-auto' />
    </span>
  )
}

export default Piece
