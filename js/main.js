function getExperienceText() {
  const startDate = new Date("01/02/2021");
  const currentDate = new Date();
  const diffTime = currentDate - startDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = parseInt(diffDays / 30 / 12);
  const diffMonths = parseInt(diffDays / 30) - diffYears * 12;
  return (
    `${diffYears} Years` + (diffMonths > 0 ? ` And ${diffMonths} Months` : "")
  );
}

window.onload = function () {
  const experience = document.getElementById("experience");
  const elements = document.querySelectorAll(".screen-height");
  const resizeElements = () => {
    const height = document.documentElement.clientHeight - 20;
    elements.forEach((element) => {
      element.style.height = `${height}px`;
    });
  };
  resizeElements();
  experience.innerText = getExperienceText();
  window.onresize = resizeElements;
};
