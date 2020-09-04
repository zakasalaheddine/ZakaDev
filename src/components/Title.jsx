import { PrimaryTitle } from "./styled-components/PrimaryTitle";
import React from 'react'

export default function Title({ titles, primaryIndex }) {

  return (<PrimaryTitle className="text-xl md:text-3xl lg:text-5xl">{titles.map(({title, isPrimary}, idx) => (
    <React.Fragment key={idx}>
      {title.split('').map((char, idy) => char !== ' ' ? <span key={idy} className={`${isPrimary ? 'primary' : ""}`}>{char}</span> : " ")}
      <br />
    </React.Fragment>
  )
  )}</PrimaryTitle>)
}