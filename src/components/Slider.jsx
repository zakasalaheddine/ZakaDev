import { useState } from "react"

export default function Slider({ images }) {
  return (
    <div>
      {
        images.map(({ id, image }) => (
          <img key={id} className="mx-auto my-2 h-auto rounded" src={image} />
        ))
      }
    </div>
  )
}