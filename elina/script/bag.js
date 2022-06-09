function createBag() {
  const li = document.createElement("li");
  console.log("ul", localStorage);
  const createdBag = Object.values(window.localStorage);
  console.log("createdBag", createdBag);

  for (let i = 0; i < createdBag.length; i++) {
    const li = document.createElement("li");
    let p = document.createElement("p");
    let list = document.getElementById("bag").appendChild(li).appendChild(p);

    createdBag.forEach((item, i) => {
      console.log(item, "item");
      createdBag.includes("coffee") ? createList() : console.log("empty");
      console.log(createdBag);
    });
    function createList() {
      // p.textContent = createdBag[i];
      p.innerText = createdBag[i];
    }
    console.log(createdBag);
  }
}
createBag();
