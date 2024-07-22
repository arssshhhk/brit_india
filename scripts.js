document.addEventListener("DOMContentLoaded", () => {
  gsap.from("header", { duration: 1, y: -100, opacity: 0 });

  const scrollerInner = document.querySelector(".scroller-inner");
  const images = scrollerInner.querySelectorAll("img");

  // Clone the images and append them to the scroller-inner
  images.forEach((img) => {
    const clone = img.cloneNode(true);
    scrollerInner.appendChild(clone);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");

  items.forEach((item, index) => {
    const question = item.querySelector(".question");
    const answer = item.querySelector(".answer");

    question.addEventListener("click", () => {
      const isActive = answer.classList.contains("active");

      // Close all answers
      document.querySelectorAll(".answer").forEach((answer) => {
        answer.classList.remove("active");
        answer.previousElementSibling.querySelector(
          ".plusIcon"
        ).style.transform = "rotate(0deg)";
      });

      // If not already active, open this one
      if (!isActive) {
        answer.classList.add("active");
        question.querySelector(".plusIcon").style.transform = "rotate(45deg)";
      }
    });
  });

  // Select the elements
  const h2 = document.querySelector("#home1 h2");
  const p = document.querySelector("#home1 p");

  // Wrap each character in spans
  const wrapCharacters = (element) => {
    const text = element.textContent.trim();
    const wrappedText = text
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");
    element.innerHTML = wrappedText;
  };

  // Wrap characters in h2 and p
  wrapCharacters(h2);
  wrapCharacters(p);

  // Animate characters
  const animateCharacters = (element) => {
    gsap.from(element.querySelectorAll("span"), {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.05,
      ease: "power1.inOut",
    });
  };

  // Animate h2 and p characters
  animateCharacters(h2);
  animateCharacters(p);

const homeArray = document.querySelectorAll("#home4 .home-content");

if (window.innerWidth >= 480) {
  homeArray.forEach((element) => {
    gsap.to(element, {
      scale: 0.98,
      scrollTrigger: {
        trigger: element,
        start: "top 12%",
        endTrigger: "#home4",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        scrub: 1,
      },
    });
  });
}

const faqArray = document.querySelectorAll(".faq .questions-container .item");
  faqArray.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 100,
      duration: 0.3,
      scrollTrigger: {
        trigger: element,
        scroller: "body",
        start: "top 95%",
        end: "bottom bottom",
        scrub: 2,
      },
    });
  });
});