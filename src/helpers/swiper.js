/* eslint-disable no-use-before-define */
const swiper = () => {
  let offset = 0;
  let offsetCategory = 0;
  let xPos = null;
  let yPos = null;

  const vitrinaLine = document.querySelector('.section-vitrina');
  const categoryVitrinaLine = document.querySelector('.category-vitrina');

  const vitrinaLineSwipe = document.querySelector('.section-vitrina-line');
  const categoryVitrinaLineSwipe = document.querySelector(
    '.category-vitrina-line'
  );

  vitrinaLineSwipe.addEventListener('touchstart', handleTouchStart, false);
  vitrinaLineSwipe.addEventListener('touchmove', handleTouchMove, false);
  categoryVitrinaLineSwipe.addEventListener(
    'touchstart',
    handleTouchStart,
    false
  );
  categoryVitrinaLineSwipe.addEventListener(
    'touchmove',
    handleTouchMoveCategory,
    false
  );

  function handleTouchStart(event) {
    xPos = event.touches[0].clientX;
    yPos = event.touches[0].clientY;
  }

  function handleTouchMove(event) {
    if (!xPos) {
      return false;
    }
    const newxPos = event.touches[0].clientX;
    const newyPos = event.touches[0].clientY;
    const diffPosX = newxPos - xPos;
    const diffPosY = newyPos - yPos;
    if (Math.abs(diffPosY) < Math.abs(diffPosX)) {
      if (diffPosX < 0) {
        offset -= 252;
        if (Math.abs(offset) > (localStorage.getItem('itemsCount') - 4) * 126) {
          offset = -(localStorage.getItem('itemsCount') - 3) * 126;
        }
        vitrinaLine.style.left = `${offset}px`;
      } else {
        offset += 252;
        if (offset > 0) {
          offset = 0;
        }
        vitrinaLine.style.left = `${offset}px`;
      }
    }
    xPos = null;
  }

  function handleTouchMoveCategory(event) {
    offsetCategory = Number(
      categoryVitrinaLine.style.left.substring(
        0,
        categoryVitrinaLine.style.left.length - 2
      )
    );
    console.log('left', offsetCategory);
    const vitrinaCount = document.querySelectorAll('.category-item');
    if (!xPos) {
      return false;
    }
    const newxPos = event.touches[0].clientX;
    const newyPos = event.touches[0].clientY;
    const diffPosX = newxPos - xPos;
    const diffPosY = newyPos - yPos;
    if (Math.abs(diffPosY) < Math.abs(diffPosX)) {
      if (diffPosX < 0) {
        offsetCategory -= 341;
        console.log(vitrinaCount.length);
        if (Math.abs(offsetCategory) > (vitrinaCount.length - 1) * 341) {
          offsetCategory = -(vitrinaCount.length - 1) * 341;
        }
        console.log(offsetCategory);
        categoryVitrinaLine.style.left = `${offsetCategory}px`;
      } else {
        offsetCategory += 341;
        if (offsetCategory > 0) {
          offsetCategory = 0;
        }
        categoryVitrinaLine.style.left = `${offsetCategory}px`;
      }
    }
    xPos = null;
  }
};

export default swiper;
