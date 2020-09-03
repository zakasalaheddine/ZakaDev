import { Tag } from "../components/styled-components/Tag";
import { Line, PropName, Method, CodeEditor, Dots, Scope, Prop, String } from "../components/styled-components/CodeEditor";
import { renderDots, zeroPad } from "../utils/functions";

const experiences = [
  { years: '2020 - now', experience: 'Full-stack Developer Freelancer' },
  { years: '2018 - 2020', experience: 'Full-stack Developer at SAGATEC' },
  { years: '2017 - 2018', experience: 'Mailing Marketer at GREEN PATH MEDIA' },
  { years: '2017 - 2018', experience: 'Marketing Manager/Freelancer at Argan Ventures - Nurture Argan' },
  { years: '2016 - 2017', experience: 'Full-stack Developer at HELPLINE' },
]

const educations = [
  { years: '2014 - 2016', education: 'Software Developer - ISTAG BAB TIZIMI (OFPPT) - Meknès' },
  { years: '2013 - 2014', education: 'Mathematical and computer science - Faculty of Sciences - Meknès' },
  { years: '2013', education: 'Baccalauréat (SVT) - Malika El Fassi - Boufekrane' },
]

const skills = [
  'HTML/CSS/JS', 'Node.js', 'NestJS', 'Strapi', 'ReactJS', 'VueJS', 'REST',
  'NextJS', 'GatsbyJS', 'GraphQL', 'jQuery', 'Bootstrap/Bulma/Tailwind CSS', 'SASS', 'npm/yarn',
  'Docker', 'PWA', 'SSR', 'SPA', 'GIT', 'Web Sockets', 'Firebase', 'PHP', 'MySQL/NoSQL', 'Wordpress',
  'Photoshop', 'Illustrator', 'UX/UI', 'C#', 'TypeScript', 'XML', 'JSON'
]
export default function AboutPage() {
  return (
    <div className="px-2">
      <Tag>{"<body>"}</Tag>
      <Tag className="pl-3">{"<code>"}</Tag>
      <CodeEditor className="text-sm sm:text-base md:text-lg">
        <Line number="01">
          <Method>class</Method> <PropName>ZAKA SALAH EDDINE</PropName> {'{'}
        </Line>
        <Line number="02">
          <Dots>{renderDots(2)}</Dots>
          <Method>constructor</Method>{'() {'}
        </Line>
        <Line number="03">
          <Dots>{renderDots(4)}</Dots>
          <Scope>this</Scope>.<Prop>name</Prop> <Scope>=</Scope> <String>'ZAKA SALAH EDDINE'</String>
        </Line>
        <Line number="04">
          <Dots>{renderDots(4)}</Dots>
          <Scope>this</Scope>.<Prop>email</Prop> <Scope>=</Scope> <String>'salaheddine@zakadev.com'</String>
        </Line>
        <Line number="05">
          <Dots>{renderDots(4)}</Dots>
          <Scope>this</Scope>.<Prop>birthday</Prop> <Scope>=</Scope> <String>'23/09/1995'</String>
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
          experiences.map(({ years, experience }, idx) => (
            <Line number={zeroPad(8 + idx)} key={idx}>
              <Dots>{renderDots(6)}</Dots>
              {'{ '}<String>'{years}'</String> : <String>'{experience}'</String>{' },'}
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
          educations.map(({ years, education }, idx) => (
            <Line number={zeroPad(17 + idx)} key={idx}>
              <Dots>{renderDots(6)}</Dots>
              {'{ '}<String>'{years}'</String> : <String>'{education}'</String>{' },'}
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
            skills.map((skill) => (
                <String key={skill}>'{skill}', </String> 
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