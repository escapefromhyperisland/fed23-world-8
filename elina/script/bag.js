console.log("bag");
function createBag() {
  let bag = JSON.parse(window.localStorage.bag);
  let inBag = [];
  inBag.push(bag);
  console.log(bag, "inBag");
  bag.forEach((element) => {
    let list = document.getElementById("bag").appendChild("element");
    console.log(list);
  });
}
createBag();
