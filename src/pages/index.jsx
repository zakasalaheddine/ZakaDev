import { Tag } from "../components/styled-components/Tag";
import Title from "../components/Title";
import { SecondaryTitle } from "../components/styled-components/PrimaryTitle";
import { StyledButton } from "../components/styled-components/Button";

export default function Home({ homeInfo }) {
  const { Titles, secondaryTitle: description, buttonText, buttonUrl } = homeInfo
  return (
    <div className="px-2">
      <Tag>{"<body>"}</Tag>
      <div className="flex justify-around align-center">
        <div className="self-center lg:w-7/12 ml-10 mt-4">
          <Title
            titles={Titles}
            primaryIndex={1}
          />
          <br />
          <SecondaryTitle>{description}</SecondaryTitle>
          <br />
          <StyledButton className="border-2 py-4 px-5 rounded">
            {buttonText}
          </StyledButton>
        </div>
        <div className="invisible lg:visible">
          <img src="/assets/illustration.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/home-page-info`)
  const homeInfo = await res.json()
  return {
    props: {
      homeInfo,
    },
  }
}
