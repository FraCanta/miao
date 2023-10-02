import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LastPost = ({lastPost, category}) => {
    console.log(lastPost[0].slug)
  return (
    <>
<Link href={`/posts/${lastPost[0].slug}`}>
    <figure className="w-full before:content-{} before: inline  before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-main/90 before:opacity-50">
    <Image
      className="w-full md:h-[500px] object-cover rounded-[5px] object-center relative "
      src={lastPost?.[0]["_embedded"]?.["wp:featuredmedia"][0]["media_details"]?.sizes?.full?.["source_url"]}
      width={300}
      height={300}
      alt={lastPost?.["alt_text"]}
      />
         

    </figure>
  <div className='absolute bottom-0 left-0 font-bold p-6 z-20 md:w-[60%]'>
  <p className='text-red my-4 uppercase'>{category[0].name}</p>
   
   <h2  dangerouslySetInnerHTML={{ __html: lastPost?.[0].title?.rendered }} className='text-white text-xl md:text-4xl '></h2>

  </div>
  </Link>
    </>
  )
}

export default LastPost