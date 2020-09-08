import { Tag } from "../../components/styled-components/Tag"
import Project from "../../components/Project"
import { motion } from "framer-motion";
import { useTheme } from "emotion-theming";

export default function ProjectsPage({ projects }) {
  const theme = useTheme();
  const pageTransition = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      background: theme.colors.white,
      filter: `invert()`,
      opacity: 0,
    },
  };
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Tag>{"<body>"}</Tag>
      <Tag className="pl-3">{"<projects>"}</Tag>
      {
        projects.map(({ id, title, thumbnail, Tags, slug }) => (
          <Project key={id} title={title} image={thumbnail} slug={slug} tags={Tags} start={id % 2 === 0} />
        ))
      }
      <Tag className="pl-3">{"</projects>"}</Tag>
      <Tag>{"</body>"}</Tag>
    </motion.div>
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