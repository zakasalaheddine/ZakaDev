import { PrimaryTitle } from "./styled-components/PrimaryTitle";
import React from 'react'
import AnimatedLetter from "./AnimatedLetter";


export default function Title({ titles, primaryIndex }) {

  return (
    <PrimaryTitle
      initial="initial"
      animate="animate"
      variants={{
        initial: {
        },
        animate: {
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
            delayChildren: .3
          }
        }
      }}
      className="text-xl md:text-3xl lg:text-5xl">
      {titles.map(({ title, isPrimary }, idx) => (
        <React.Fragment key={idx}>
          {title.split('').map((char, idy) => char !== ' ' ? <AnimatedLetter key={idy} isPrimary={isPrimary} char={char} /> : " ")}
          <br />
        </ React.Fragment>
      )
      )}
    </PrimaryTitle>
  )
}