import { Tag } from "../../components/styled-components/Tag"
import Project from "../../components/Project"

const Projects = [
  {
    id: 1,
    title: "Zenith Arena de Lille.",
    slug: "zenith-arena-de-lilla",
    tags: ["website", "React js", "Laravel"],
    thumbnail: "https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2019%2F02%2Fintro.jpg&w=700&h=&zc=0&q=100"
  },
  {
    id: 2,
    title: "Supratec Group.",
    slug: "supratec-group",
    tags: ["website", "React js", "Laravel"],
    thumbnail: "https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2018%2F11%2Fintro-supratec.jpg&w=700&h=&zc=0&q=100"
  },
  {
    id: 3,
    title: "Arrow 1851.",
    slug: "arrow-1851",
    tags: ["website", "React js", "Laravel"],
    thumbnail: "https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2018%2F11%2FIntro.jpg&w=700&h=&zc=0&q=100"
  },
  {
    id: 4,
    title: "Neamedia.",
    slug: "neamedia",
    tags: ["website", "React js", "Laravel"],
    thumbnail: "https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2018%2F11%2FIntro-1.jpg&w=700&h=&zc=0&q=100"
  },

]
export default function ProjectsPage() {
  return (
    <>
      <Tag>{"<body>"}</Tag>
      <Tag className="pl-3">{"<projects>"}</Tag>
      {
        Projects.map(({ id, title, thumbnail, tags, slug }) => (
          <Project key={id} title={title} image={thumbnail} slug={slug} tags={tags} start={id % 2 === 0} />
        ))
      }
      <Tag className="pl-3">{"</projects>"}</Tag>
      <Tag>{"</body>"}</Tag>
    </>
  )
}