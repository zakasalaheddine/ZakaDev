import { Tag } from "../../components/styled-components/Tag";
import { PageTitle } from "../../components/styled-components/PrimaryTitle";
import ReactMarkdown from 'react-markdown'
import { AboutSection } from "../../components/styled-components/SingleProject";
import Slider from "../../components/Slider";
import { useTheme } from "emotion-theming";
import { motion } from "framer-motion";


export default function ProjectPage({ project }) {
  const { title, about, gallery } = project
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

  const images = gallery.map(({ id, url }) => ({ id, image: `${process.env.NEXT_PUBLIC_API_URL + url}` }));
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Tag>{"<body>"}</Tag>
      <PageTitle className="text-xl text-center md:text-3xl lg:text-5xl">{title}</PageTitle>
      <AboutSection className="w-5/6 mx-auto">
        <ReactMarkdown source={about} />
        <Slider images={images} />
      </AboutSection>
      <Tag>{"</body>"}</Tag>
    </motion.div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
  const projects = await res.json()

  const paths = projects.map(({ slug }) => ({ params: { project: slug } }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects?slug=${params.project}`)
  const project = await res.json()
  return { props: { project: project[0] } }
}
