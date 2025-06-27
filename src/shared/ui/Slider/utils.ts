export const getSlideClass = (
  index: number,
  currentIndex: number,
  totalSlides: number,
  classes: { active: string; next: string; prev: string },
) => {
  const isActive = index === currentIndex;
  const isNext = index === (currentIndex + 1) % totalSlides;
  const isPrev = index === (currentIndex - 1 + totalSlides) % totalSlides;

  switch (true) {
    case isActive:
      return classes.active;
    case isNext:
      return classes.next;
    case isPrev:
      return classes.prev;
    default:
      return "";
  }
};
