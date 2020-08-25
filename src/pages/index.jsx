import { Tag } from "../components/styled-components/Tag";
import Title from "../components/Title";
import { SecondaryTitle } from "../components/styled-components/PrimaryTitle";
import { StyledButton } from "../components/styled-components/Button";

export default function Home() {
  return (
    <div>
      <Tag>{"<body>"}</Tag>
      <div className="flex justify-around">
        <div className="self-center w-7/12 ml-10">
          <Title
            titles={[
              "Hi, my name is",
              "ZAKA SALAH EDDINE",
              "I build things for the web",
            ]}
            primaryIndex={1}
          />
          <br />
          <SecondaryTitle>I'm a software engineer based in Meknes Morocco, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</SecondaryTitle>
          <br/>
          <StyledButton className="border-2 py-4 px-5 rounded">
            CONTACT ME
          </StyledButton>
        </div>
        <div>
          <img src="/assets/illustration.png" alt="" />
        </div>
      </div>
    </div>
  );
}
