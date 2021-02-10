import Link from 'next/link'

export default function Xkcd({title, img, alt}) {
  return (
    <>
      <h1>XKCD page</h1>
      <h3>{title}</h3>
      <img src={img} alt={title} title={alt} />
      <Link href="/">Home</Link>
    </>
  )
}

export async function getServerSideProps(context) {
  const comicNumber = Math.floor(Math.random() * 2420) + 1
  const res = await fetch(`https://xkcd.com/${comicNumber}/info.0.json`)
  const { title, img, alt} = await res.json()

  return {
    props: {
      title,
      img,
      alt
    }
  }

}
