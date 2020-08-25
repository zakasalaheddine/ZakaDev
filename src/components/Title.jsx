import { PrimaryTitle } from "./styled-components/PrimaryTitle";
import React from 'react'

export default function Title({ titles, primaryIndex }) {

  return <PrimaryTitle className="text-5xl">{titles.map((title, idx) => (
    <React.Fragment key={idx}>
      {title.split('').map((char, idy) => char !== ' ' ? <span key={idy} className={`${idx === primaryIndex ? 'primary' : ""}`}>{char}</span> : " ")}
      <br />
    </React.Fragment>
  )
  )}</PrimaryTitle>
}