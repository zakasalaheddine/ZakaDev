import { Tag } from "../components/styled-components/Tag";
import { Line, PropName, Method, CodeEditor, Dots, Scope, Prop, String } from "../components/styled-components/CodeEditor";
import { renderDots, zeroPad } from "../utils/functions";

export default function AboutPage({aboutInfos}) {
  const {name, birthday, email, workExperience, educations, skills} = aboutInfos
  return (
    <div className="px-2">
      <Tag>{"<body>"}</Tag>
      <Tag className="pl-3">{"<code>"}</Tag>
      <CodeEditor className="text-sm sm:text-base md:text-lg">
        <Line number="01">
          <Method>class</Method> <PropName>{name}</PropName> {'{'}
        </Line>
        <Line number="02">
          <Dots>{renderDots(2)}</Dots>
          <Method>constructor</Method>{'() {'}
        </Line>
        <Line number="03">
          <Dots>{renderDots(4)}</Dots>
          <Scope>this</Scope>.<Prop>name</Prop> <Scope>=</Scope> <String>'{name}'</String>
        </Line>
        <Line number="04">
          <Dots>{renderDots(4)}</Dots>
          <Scope>this</Scope>.<Prop>email</Prop> <Scope>=</Scope> <String>'{email}'</String>
        </Line>
        <Line number="05">
          <Dots>{renderDots(4)}</Dots>
          <Scope>this</Scope>.<Prop>birthday</Prop> <Scope>=</Scope> <String>'{birthday}'</String>
        </Line>
        <Line number="05">
          <Dots>{renderDots(2)}</Dots>
          {'}'}
        </Line>
        <Line number="06">
          <Dots>{renderDots(2)}</Dots>
          <PropName>workExperience</PropName>{'() {'}
        </Line>
        <Line number="07">
          <Dots>{renderDots(4)}</Dots>
          <Method>return </Method>{'['}
        </Line>
        {
          workExperience.map(({ Years, Experience }, idx) => (
            <Line number={zeroPad(8 + idx)} key={idx}>
              <Dots>{renderDots(6)}</Dots>
              {'{ '}<String>'{Years}'</String> : <String>'{Experience}'</String>{' },'}
            </Line>
          ))
        }
        <Line number="13">
          <Dots>{renderDots(4)}</Dots>
          {']'}
        </Line>
        <Line number="14">
          <Dots>{renderDots(2)}</Dots>
          {'}'}
        </Line>
        <Line number="15">
          <Dots>{renderDots(2)}</Dots>
          <PropName>educations</PropName>{'() {'}
        </Line>
        <Line number="16">
          <Dots>{renderDots(4)}</Dots>
          <Method>return </Method>{'['}
        </Line>
        {
          educations.map(({ Years, education }, idx) => (
            <Line number={zeroPad(17 + idx)} key={idx}>
              <Dots>{renderDots(6)}</Dots>
              {'{ '}<String>'{Years}'</String> : <String>'{education}'</String>{' },'}
            </Line>
          ))
        }
        <Line number="20">
          <Dots>{renderDots(4)}</Dots>
          {']'}
        </Line>
        <Line number="21">
          <Dots>{renderDots(2)}</Dots>
          {'}'}
        </Line>
        <Line number="22">
          <Dots>{renderDots(2)}</Dots>
          <PropName>skills</PropName>{'() {'}
        </Line>
        <Line number="23">
          <Dots>{renderDots(4)}</Dots>
          <Method>return </Method>{'['}
        </Line>
        <Line number="24">
          <Dots>{renderDots(6)}</Dots>
          {
            skills.map(({id, skill}) => (
                <String key={id}>'{skill}', </String> 
            ))
          }
        </Line>
        <Line number="25">
          <Dots>{renderDots(4)}</Dots>
          {']'}
        </Line>
        <Line number="26">
          <Dots>{renderDots(2)}</Dots>
          {'}'}
        </Line>
        <Line number="27">
          {'}'}
        </Line>
      </CodeEditor>
      
      <Tag className="pl-3">{"</code>"}</Tag>
      <Tag>{"</body>"}</Tag>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/about-page`)
  const aboutInfos = await res.json()
  return {
    props: {
      aboutInfos,
    },
  }
}