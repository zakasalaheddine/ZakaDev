import { Tag } from "../components/styled-components/Tag";
import { Line, PropName, Method, CodeEditor, Dots, Scope, Prop, String } from "../components/styled-components/CodeEditor";
import { renderDots, zeroPad } from "../utils/functions";
import { motion } from "framer-motion";
import { useTheme } from "emotion-theming";
import { NextSeo } from "next-seo";
import { PageTransition, line } from "../components/MotionAnimations";

export default function AboutPage({aboutInfos}) {
  const {name, birthday, email, workExperience, educations, skills} = aboutInfos
  const theme = useTheme();
  return (
    <>
    <NextSeo
        title="ABOUT ZAKA SALAH EDDINE | ZAKADEV"
        description="Zaka Salah Eddine Portfolio"
        canonical="https://www.zakadev.com/about"
        openGraph={{
          url: 'ttps://www.zakadev.com/',
          title: 'ZAKA SALAH EDDINE | ZAKADEV',
          description: "Zaka Salah Eddine Portfolio",
          site_name: 'ZAKADEV'
        }}
      />
    <motion.div className="px-2" variants={PageTransition} initial="initial" animate="animate" exit="exit">
      <Tag variants={line}>{"<body>"}</Tag>
      <Tag className="pl-3" variants={line}>{"<code>"}</Tag>
      <CodeEditor className="text-sm sm:text-base md:text-lg">
        <Line number="01" variants={line}>
          <Method>class</Method> <PropName>{name}</PropName> {'{'}
        </Line>
        <Line number="02" variants={line}>
          <Dots>{renderDots(2)}</Dots>
          <Method>constructor</Method>{'() {'}
        </Line>
        <Line number="03" variants={line}>
          <Dots>{renderDots(4)}</Dots>
          <Scope>this</Scope>.<Prop>name</Prop> <Scope>=</Scope> <String>'{name}'</String>
        </Line>
        <Line number="04" variants={line}>
          <Dots>{renderDots(4)}</Dots>
          <Scope>this</Scope>.<Prop>email</Prop> <Scope>=</Scope> <String>'{email}'</String>
        </Line>
        <Line number="05" variants={line}>
          <Dots>{renderDots(4)}</Dots>
          <Scope>this</Scope>.<Prop>birthday</Prop> <Scope>=</Scope> <String>'{birthday}'</String>
        </Line>
        <Line number="05" variants={line}>
          <Dots>{renderDots(2)}</Dots>
          {'}'}
        </Line>
        <Line number="06" variants={line}>
          <Dots>{renderDots(2)}</Dots>
          <PropName>workExperience</PropName>{'() {'}
        </Line>
        <Line number="07" variants={line}>
          <Dots>{renderDots(4)}</Dots>
          <Method>return </Method>{'['}
        </Line>
        {
          workExperience.map(({ Years, Experience }, idx) => (
            <Line number={zeroPad(8 + idx)} key={idx} variants={line}>
              <Dots>{renderDots(6)}</Dots>
              {'{ '}<String>'{Years}'</String> : <String>'{Experience}'</String>{' },'}
            </Line>
          ))
        }
        <Line number="13" variants={line}>
          <Dots>{renderDots(4)}</Dots>
          {']'}
        </Line>
        <Line number="14" variants={line}>
          <Dots>{renderDots(2)}</Dots>
          {'}'}
        </Line>
        <Line number="15" variants={line}>
          <Dots>{renderDots(2)}</Dots>
          <PropName>educations</PropName>{'() {'}
        </Line>
        <Line number="16" variants={line}>
          <Dots>{renderDots(4)}</Dots>
          <Method>return </Method>{'['}
        </Line>
        {
          educations.map(({ Years, education }, idx) => (
            <Line number={zeroPad(17 + idx)} key={idx} variants={line}>
              <Dots>{renderDots(6)}</Dots>
              {'{ '}<String>'{Years}'</String> : <String>'{education}'</String>{' },'}
            </Line>
          ))
        }
        <Line number="20" variants={line}>
          <Dots>{renderDots(4)}</Dots>
          {']'}
        </Line>
        <Line number="21" variants={line}>
          <Dots>{renderDots(2)}</Dots>
          {'}'}
        </Line>
        <Line number="22" variants={line}>
          <Dots>{renderDots(2)}</Dots>
          <PropName>skills</PropName>{'() {'}
        </Line>
        <Line number="23" variants={line}>
          <Dots>{renderDots(4)}</Dots>
          <Method>return </Method>{'['}
        </Line>
        <Line number="24" variants={line}>
          <Dots>{renderDots(6)}</Dots>
          {
            skills.map(({id, skill}) => (
                <String key={id}>'{skill}', </String> 
            ))
          }
        </Line>
        <Line number="25" variants={line}>
          <Dots>{renderDots(4)}</Dots>
          {']'}
        </Line>
        <Line number="26" variants={line}>
          <Dots>{renderDots(2)}</Dots>
          {'}'}
        </Line>
        <Line number="27" variants={line}>
          {'}'}
        </Line>
      </CodeEditor>      
      <Tag className="pl-3" variants={line}>{"</code>"}</Tag>
      <Tag variants={line}>{"</body>"}</Tag>
    </motion.div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about-page`)
  const aboutInfos = await res.json()
  return {
    props: {
      aboutInfos,
    },
  }
}