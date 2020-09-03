import Link from "next/link"

export default function Project({ image, title, tags, start, slug }) {
  if (start) {
    return (
      <div className="flex items-center justify-between w-full my-2 h-screen">
        <div className="w-2/3">
          <Link href="/projects/[project]" as={`/projects/${slug}`}>
            <a>
              <img className="w-full rounded" src={image} alt={title} />
            </a>
          </Link>
        </div>
        <div className="w-1/3 text-center ">
          <Link href="/projects/[project]" as={`/projects/${slug}`}>
            <a>
              <h2 className="font-bold text-xl mb-2">{title}</h2>
            </a>
          </Link>
          {
            tags.map(tag => (<span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">#{tag}</span>))
          }

        </div>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-between w-full my-2 h-full">
      <div className="w-1/3 text-center ">
        <Link href="/projects/[project]" as={`/projects/${slug}`}>
          <a>
            <h2 className="font-bold text-xl mb-2">{title}</h2>
          </a>
        </Link>
        {
          tags.map(tag => (<span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">#{tag}</span>))
        }
      </div>
      <div className="w-2/3">
        <Link href="/projects/[project]" as={`/projects/${slug}`}>
          <a>
            <img className="w-full rounded" src={image} alt={title} />
          </a>
        </Link>
      </div>
    </div>
  )
}