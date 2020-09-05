import { Tag } from "../../components/styled-components/Tag"
import Project from "../../components/Project"

export default function ProjectsPage({ projects }) {
  return (
    <>
      <Tag>{"<body>"}</Tag>
      <Tag className="pl-3">{"<projects>"}</Tag>
      {
        projects.map(({ id, title, thumbnail, Tags, slug }) => (
          <Project key={id} title={title} image={thumbnail} slug={slug} tags={Tags} start={id % 2 === 0} />
        ))
      }
      <Tag className="pl-3">{"</projects>"}</Tag>
      <Tag>{"</body>"}</Tag>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
  const projects = await res.json()
  return {
    props: {
      projects,
    },
  }
}