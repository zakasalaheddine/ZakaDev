export const renderDots = (number) => {
  let dots = "";
  for (let index = 0; index < number; index++) {
    dots += "- ";
  }
  return dots;
};

export const zeroPad = (num) => String(num).padStart(2, '0')
