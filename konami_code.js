const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let idex = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key
    
    idex = (codes[idex] === key) ? ++idex : 0
    
    if (idex === codes.length) {
      window.alert("Hurray!");
      idex = 0
    }
    
  });
}