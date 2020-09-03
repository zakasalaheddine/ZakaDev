import { Tag } from "../../components/styled-components/Tag";

export default function ProjectPage() {
  return (
    <>
      <Tag>{"<body>"}</Tag>
      <Tag className="pl-3">{"<project>"}</Tag>
      Single Project
      <Tag className="pl-3">{"</project>"}</Tag>
      <Tag>{"</body>"}</Tag>
    </>
  )
}