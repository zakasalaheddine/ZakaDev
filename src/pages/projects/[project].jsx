import { Tag } from "../../components/styled-components/Tag";
import { PageTitle } from "../../components/styled-components/PrimaryTitle";
import ReactMarkdown from 'react-markdown'
import { AboutSection } from "../../components/styled-components/SingleProject";
import Slider from "../../components/Slider";
import { useTheme } from "emotion-theming";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { PageTransition, line } from "../../components/MotionAnimations";


export default function ProjectPage({ project }) {
  const { title, about, gallery, slug } = project
  const theme = useTheme();


  const images = gallery.map(({ id, url }) => ({ id, image: `${process.env.NEXT_PUBLIC_API_URL + url}` }));
  return (
    <>
      <NextSeo
        title={`${title} | ZAKADEV`}
        description="Zaka Salah Eddine Projects"
        canonical={"https://www.zakadev.com/" + slug}
        openGraph={{
          url: "https://www.zakadev.com/" + slug,
          title: 'ZAKA SALAH EDDINE | ZAKADEV',
          description: "Zaka Salah Eddine Portfolio",
          site_name: 'ZAKADEV'
        }}
      />
      <motion.div variants={PageTransition} initial="initial" animate="animate" exit="exit">
        <Tag variants={line}>{"<body>"}</Tag>
        <PageTitle variants={line} className="text-xl text-center md:text-3xl lg:text-5xl">{title}</PageTitle>
        <AboutSection variants={line} className="w-5/6 mx-auto">
          <ReactMarkdown source={about} />
          <Slider images={images} />
        </AboutSection>
        <Tag variants={line}>{"</body>"}</Tag>
      </motion.div>
    </>
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
