new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });

    if (destination.index === 1) {
      const city = document.querySelectorAll(".city");
      const description = document.querySelector(".s2 .description");

      tl.fromTo(city, 1, { x: "100%" }, { x: "-70%" })
        .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(city[0], 1.5, { opacity: 1 }, { opacity: 1 })
        .fromTo(city[1], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(city[2], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(city[3], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(city[4], 2, { opacity: 0 }, { opacity: 1 });
    }
    if (destination.index === 2) {
      const city2 = document.querySelectorAll(".city2");
      const description = document.querySelector(".s3 .description");

      tl.fromTo(city2, 1, { x: "-100%" }, { x: "170%" })
        .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(city2[0], 1.5, { opacity: 1 }, { opacity: 1 })
        .fromTo(city2[1], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(city2[2], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(city2[3], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(city2[4], 2, { opacity: 0 }, { opacity: 1 });
    }
    if (destination.index === 3) {
      const city3 = document.querySelectorAll(".city3");
      const description = document.querySelector(".s4 .description");

      tl.fromTo(city3, 1, { x: "100%" }, { x: "-70%" })
        .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(city3[0], 1.5, { opacity: 1 }, { opacity: 1 })
        .fromTo(city3[1], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(city3[2], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(city3[3], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(city3[4], 2, { opacity: 0 }, { opacity: 1 });
    }
  },
});
