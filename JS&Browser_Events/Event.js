document.querySelector("#images").addEventListener(
  "click",
  (e) => {
    console.log("clicked inside ul");
    e.stopPropagation();
  },
  false
);

document.querySelector("#owl").addEventListener(
  "click",
  (e) => {
    console.log("owl clicked ");
    e.stopPropagation();
  },
  false
);
//Third parameter of EventListner
/*
it is by default false
false : bubling (bottom to top)
true : Capturing (top to bottom)
*/
