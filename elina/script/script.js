let localSt = window.localStorage;
let bag = ["coffee"];

//clear local storage
AFRAME.registerComponent("storage", {
  schema: { default: "" },

  init: function () {
    this.el.addEventListener("click", function (event) {
      localSt.clear();
      alert(localSt, "flags clicked");
    });
  },
});

//Reception
AFRAME.registerComponent("reception", {
  schema: { default: "" },

  init: function () {
    alert(
      "You finally are at Hyper, congrats! But oh, what is the sound?.. Sounds like your stomach! Do you still have your lunch with you? And spoon? No??? This is gonna be a hard task..."
    );
    alert("A clue: find a spoon");
    this.el.addEventListener("click", function (event) {
      try {
        localSt.clear();
        event.stopImmediatePropagation();
        event.defaultPrevented = true;

        localSt.question = 1;
        console.log(localSt.question);
        alert("You: Hi! I'm searching for a spoon. Where can I find it?");
        alert("Teo: I can check in Lost&Found, maybe there is one...");
        alert(
          "Teo: Unfortunately, I have only a fork. Try to ask around, maybe somebody have seen it."
        );
      } catch (ex) {
        alert(
          "An error occurred and I need to write some code to handle this!"
        );
      }
    });
  },
});

//Roots
AFRAME.registerComponent("roots", {
  schema: { default: "" },

  init: function () {
    this.el.addEventListener("click", function (event) {
      try {
        if (localSt.question === "1") {
          localSt.clear();

          console.log(localSt.question);
          let result = confirm(
            "I might have it... Could you please ask the student when Patrik is coming while I'm searching?.."
          );
          let message = result ? setTrue() : setFalse();

          function setTrue() {
            localSt.question = 2;
          }

          function setFalse() {
            console.log("Nothing!");
            alert("Looks like I've lost it. Can't help, sorry!");
          }
        }
      } catch (ex) {
        alert(
          "An error occurred and I need to write some code to handle this!"
        );
      }
    });
  },
});

//Student
AFRAME.registerComponent("student", {
  schema: { default: "" },

  init: function () {
    console.log(localSt.question);
    this.el.addEventListener("click", function (event) {
      try {
        if (localSt.question === "2") {
          localSt.question = 3;
          console.log(localSt.question);
          alert("You: Hi! I wonder if you know when Patrik is here? ");
          alert(
            "Student: Hej! Yeah, I think he mentioned he will be here on Friday for the presentation."
          );
          alert("You: Thanks!");
        }
      } catch (ex) {
        alert(
          "An error occurred and I need to write some code to handle this!"
        );
      }
    });
  },
});

//Roots2
AFRAME.registerComponent("try", {
  schema: { default: "" },

  init: function () {
    console.log(localSt.question, "roots2");
    this.el.addEventListener("click", function (event) {
      try {
        if (localSt.question === "3") {
          console.log(localSt.question, "roots2");
          let promptRoots = prompt("So when is he coming?");
          let messagePatrick =
            promptRoots === "Friday" ? setTrue() : setFalse();

          function setTrue() {
            localSt.question = 4;
            bag.push("coffee");
            console.log("Now you have coffee!", bag);
            let result2 = confirm(
              "Thank you! Here is a free coffee for you! Do you want a receipt? "
            );
            let message2 = result2 ? setTrueReceipt() : setFalseReceipt();
            function setTrueReceipt() {
              bag.push("receipt");
              console.log("Now you have receipt!", bag);
            }
            function setFalseReceipt() {
              console.log("Nothing!");
            }
          }

          function setFalse() {
            alert(
              "Is that what he said? Hmm... Anyway, looks like I've lost the spoon. Can't help, sorry!"
            );
          }
        }
        addStorageBag();
      } catch (ex) {
        alert(
          "An error occurred and I need to write some code to handle this!"
        );
      }
    });
  },
});
console.log("end", bag);
function addStorageBag() {
  bag.forEach((element, i) => {
    localSt.setItem([i], element);
    console.log(localSt, "localSt");
  });
}
