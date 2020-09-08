import { Tag } from "../components/styled-components/Tag";
import Title from "../components/Title";
import { SecondaryTitle } from "../components/styled-components/PrimaryTitle";
import { StyledButton } from "../components/styled-components/Button";
import { useTheme } from "emotion-theming";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { PageTransition } from "../components/MotionAnimations";

export default function Home({ homeInfo }) {
  const { Titles, secondaryTitle: description, buttonText, buttonUrl } = homeInfo
  const theme = useTheme();

  return (
    <>
      <NextSeo
        title="ZAKA SALAH EDDINE | ZAKADEV"
        description="Zaka Salah Eddine Portfolio"
        canonical="https://www.zakadev.com/"
        openGraph={{
          url: 'ttps://www.zakadev.com/',
          title: 'ZAKA SALAH EDDINE | ZAKADEV',
          description: "Zaka Salah Eddine Portfolio",
          site_name: 'ZAKADEV'
        }}
      />
      <motion.div className="px-2" variants={PageTransition} initial="initial" animate="animate" exit="exit">
        <Tag>{"<body>"}</Tag>
        <div className="flex flex-wrap h-full pt-5 justify-center align-center">
          <div className="self-center w-full lg:w-7/12 ml-10 mt-4">
            <Title
              titles={Titles}
              primaryIndex={1}
            />
            <br />
            <SecondaryTitle initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{description}</SecondaryTitle>
            <br />
            <a href="mailto:salaheddine@zakadev.com">
              <StyledButton
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.dark,
                  fontWeight: 900,
                }}
                className="border-2 py-3 px-6">
                {buttonText}
              </StyledButton>
            </a>
          </div>
          <div className=" lg:flex">
            <img src="/assets/illustration.png" alt="" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-page-info`)
  const homeInfo = await res.json()
  return {
    props: {
      homeInfo,
    },
  }
}
