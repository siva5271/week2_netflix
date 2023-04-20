

faqs = document.querySelectorAll(".faq");
faqs.forEach((name, index, array) => {
  name.addEventListener("click", () => {
    var disVar = document.querySelectorAll(".disable")[index];
    disVar.classList.toggle("dis");
    disVar.classList.toggle("answer");
    document.querySelectorAll(".ad")[index].classList.toggle("add");
    document.querySelectorAll(".cl")[index].classList.toggle("close");
  });
})

const observerMain = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observerMain.observe(el));

const observerFaqOdd = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showFaqOdd");
    } else {
      entry.target.classList.remove("showFaqOdd");
    }
  });
})

const hiddenFaqOdd = document.querySelectorAll(".odd");
hiddenFaqOdd.forEach((el) => observerFaqOdd.observe(el));

const observerFaqEven = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showFaqEven");
    } else {
      entry.target.classList.remove("showFaqEven");
    }
  });
})

const hiddenFaqEven = document.querySelectorAll(".even");
hiddenFaqEven.forEach((el) => observerFaqEven.observe(el));