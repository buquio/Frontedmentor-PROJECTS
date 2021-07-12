const question = document.querySelectorAll(
    ".accordion .questions .question .text"
  );
  const arrow = document.querySelectorAll(".accordion .questions .question img");
  const textOpen = document.querySelectorAll(
    ".accordion .questions .answer .text-open"
  );
  
  question.forEach((item) => {
    item.addEventListener("click", (e) => {
      textOpen.forEach((item) => {
        item.style.display = "none";
      });
  
      // Grab the text-open element inside the 'qna'
      let qna = e.target.parentElement.parentElement;
      // Grab the parent and show the open text which is hidden
      const toggleText = qna.children[1].children[0];
  
      if (e.target.classList.contains("text-bold")) {
        e.target.parentElement.children[1].classList.remove("arrow-rotate");
        e.target.classList.remove("text-bold");
      } else {
        e.target.classList.add("text-bold");
        toggleText.style.display = "initial";
        e.target.parentElement.children[1].classList.add("arrow-rotate");
      }
    });
  });
  
  // // You can create a function also to manage both the triggers or put them in a single div. I was just in a hurry so didn't tried it :) and ofcourse this I wrote is not a good practice.
  
  // arrow.forEach((item) => {
  //   item.addEventListener("click", (e) => {
  //     textOpen.forEach((item) => {
  //       item.style.display = "none";
  //     });
  
  //     // Grab the text-open element inside the 'qna'
  //     let qna = e.target.parentElement.parentElement;
  //     // Grab the parent and show the open text which is hidden
  //     const toggleText = qna.children[1].children[0];
  
  //     if (e.target.classList.contains("text-bold")) {
  //       e.target.parentElement.children[1].classList.remove("arrow-rotate");
  //       e.target.classList.remove("text-bold");
  //     } else {
  //       e.target.classList.add("text-bold");
  //       toggleText.style.display = "initial";
  //       e.target.parentElement.children[1].classList.add("arrow-rotate");
  //     }
  //   });
  // });
  