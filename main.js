let inputDiv = document.querySelector("#input");
let inputedText = document.querySelector("#inputedText");
let output = document.querySelector("#output");
let inputedMessage = document.querySelector("#inputedMessage");
let useOutputBoxForAtFunction = false;
//change the color of the inputed words
setInterval(function () {
  let value = document.getElementById("inputedText");
  let colours = [
    "red",
    "green",
    "blue",
    "white",
    "purple",
    "goldenrod",
    "yellow",
    "pink",
    "orange",
  ];
  let randomNumber = Math.floor(Math.random() * colours.length + 1);
  let randomColor = colours[randomNumber];
  value.style.color = randomColor;
  if (!useOutputBoxForAtFunction) {
    document.getElementById("output").innerText = value.value || "Result";
  }
}, 100);

//at method

document.querySelector("#at_function").addEventListener("click", function () {
  if (inputedText.value == "") {
    inputDiv.style.backgroundColor = "red";
    inputedMessage.innerText = "Please enter any value to apply at() method !";
    inputedMessage.style.color = "black";
    return;
  }
  document.querySelector("#Inputed_index_at").value = "";
  document.querySelector("#forAt").style.display = "flex";
  document.querySelector("#forAt_bg").style.display = "flex";
  document.querySelector("#cancel_at").addEventListener("click", function () {
    document.querySelector("#forAt").style.display = "none";
    document.querySelector("#forAt_bg").style.display = "none";
  });
  document.querySelector("#ok_at").addEventListener("click", function () {
    useOutputBoxForAtFunction = true;
    document.querySelector("#forAt_bg").style.display = "none";
    let Index_at = document.querySelector("#Inputed_index_at").value;
    if (inputedText.value.at(Index_at) === " ") {
      output.innerText = "Space";
    } else {
      output.innerText = inputedText.value.at(Index_at);
    }
    document.querySelector("#forAt").style.display = "none";
  });
});
//chatAt method
document
  .querySelector("#charAt_function")
  .addEventListener("click", function () {
    if (inputedText.value == "") {
      inputDiv.style.backgroundColor = "red";
      inputedMessage.innerText =
        "Please enter any value to apply charAt() method !";
      inputedMessage.style.color = "black";
      return;
    }
    document.querySelector("#Inputed_index_at").value = "";
    document.querySelector("#forAt").style.display = "flex";
    document.querySelector("#forAt_bg").style.display = "flex";
    document.querySelector("#cancel_at").addEventListener("click", function () {
      document.querySelector("#forAt").style.display = "none";
      document.querySelector("#forAt_bg").style.display = "none";
    });
    document.querySelector("#ok_at").addEventListener("click", function () {
      document.querySelector("#forAt_bg").style.display = "none";
      useOutputBoxForAtFunction = true;
      let Index_at = document.querySelector("#Inputed_index_at").value;
      if (inputedText.value.at(Index_at) === " ") {
        output.innerText = "Space";
      } else if (document.querySelector("#Inputed_index_at").value < 0) {
        output.innerText =
          "Negative values is no acceptable in charAt string method";
      } else if (
        inputedText.value.length <
          document.querySelector("#Inputed_index_at").value &&
        document.querySelector("#Inputed_index_at").value < 0
      ) {
        output.innerText =
          "Negative values is no acceptable in charAt string method";
      } else if (
        document.querySelector("#Inputed_index_at").value >=
        inputedText.value.length
      ) {
        output.innerText = "undefined";
      } else {
        output.innerText = inputedText.value.charAt(Index_at);
      }
      document.querySelector("#forAt").style.display = "none";
    });
  });
//chatCodeAt method
document
  .querySelector("#charCodeAt_function")
  .addEventListener("click", function () {
    if (inputedText.value == "") {
      inputDiv.style.backgroundColor = "red";
      inputedMessage.innerText =
        "Please enter any value to apply charCodeAt() method !";
      inputedMessage.style.color = "black";
      return;
    }
    document.querySelector("#output").style.opacity = "1";
    document.querySelector("#Inputed_index_at").value = "";
    document.querySelector("#forAt").style.display = "flex";
    document.querySelector("#forAt_bg").style.display = "flex";
    document.querySelector("#cancel_at").addEventListener("click", function () {
      document.querySelector("#forAt").style.display = "none";
      document.querySelector("#forAt_bg").style.display = "none";
    });
    document.querySelector("#ok_at").addEventListener("click", function () {
      document.querySelector("#forAt_bg").style.display = "none";
      useOutputBoxForAtFunction = true;
      let Index_at = document.querySelector("#Inputed_index_at").value;
      if (Index_at < 0) {
        output.innerText =
          "Negative values is no acceptable in charCodeAt string method";
      } else if (Index_at >= inputedText.value.length) {
        output.innerText = "undefined";
      } else {
        output.innerText = inputedText.value.charCodeAt(Index_at);
      }
      document.querySelector("#forAt").style.display = "none";
    });
  });
//endWith method
document
  .querySelector("#endsWith_function")
  .addEventListener("click", function () {
    if (inputedText.value == "") {
      inputDiv.style.backgroundColor = "red";
      inputedMessage.innerText =
        "Please enter any value to apply endsWith() method !";
      inputedMessage.style.color = "black";
      return;
    }
    document.querySelector("#Inputed_index_at").type = "text";
    document.querySelector("#Inputed_index_at").placeholder = "Enter suffix";
    document.querySelector("#forAt").style.display = "flex";
    document.querySelector("#forAt_bg").style.display = "flex";
    document.querySelector("#cancel_at").addEventListener("click", function () {
      document.querySelector("#forAt").style.display = "none";
      document.querySelector("#forAt_bg").style.display = "none";
      document.querySelector("#Inputed_index_at").type = "number";
      document.querySelector("#Inputed_index_at").placeholder = "Enter Index";
      setTimeout(function () {
        location.reload();
      }, 2000);
    });
    document.querySelector("#ok_at").addEventListener("click", function () {
      document.querySelector("#forAt_bg").style.display = "none";
      useOutputBoxForAtFunction = true;
      let Index_at = document.querySelector("#Inputed_index_at").value;
      output.innerText = inputedText.value.endsWith(Index_at);
      document.querySelector("#forAt").style.display = "none";
      document.querySelector("#Inputed_index_at").type = "number";
      document.querySelector("#Inputed_index_at").placeholder = "Enter Index";
      setTimeout(function () {
        location.reload();
      }, 2000);
    });
  });
//includes method
document
  .querySelector("#includes_function")
  .addEventListener("click", function () {
    if (inputedText.value == "") {
      inputDiv.style.backgroundColor = "red";
      inputedMessage.innerText =
        "Please enter any value to apply includes() method !";
      inputedMessage.style.color = "black";
      return;
    }
    document.querySelector("#Inputed_text_2").value = "";
    document.querySelector("#Inputed_index_2").value = "";
    document.querySelector("#forAt_2").style.display = "flex";
    document.querySelector("#forAt_bg").style.display = "flex";
    document.querySelector("#cancel_2").addEventListener("click", function () {
      document.querySelector("#forAt_2").style.display = "none";
      document.querySelector("#forAt_bg").style.display = "none";
    });
    document.querySelector("#ok_2").addEventListener("click", function () {
      document.querySelector("#forAt_bg").style.display = "none";
      useOutputBoxForAtFunction = true;
      let text = document.querySelector("#Inputed_text_2").value;
      let Index_at = document.querySelector("#Inputed_index_2").value;
      output.innerText = inputedText.value.includes(text,Index_at);
      document.querySelector("#forAt_2").style.display = "none";
    });
  });
  //includes method
document
.querySelector("#indexOf_function")
.addEventListener("click", function () {
  if (inputedText.value == "") {
    inputDiv.style.backgroundColor = "red";
    inputedMessage.innerText =
      "Please enter any value to apply indexOf() method !";
    inputedMessage.style.color = "black";
    return;
  }
  document.querySelector("#Inputed_text_2").value = "";
  document.querySelector("#Inputed_index_2").value = "";
  document.querySelector("#forAt_2").style.display = "flex";
  document.querySelector("#forAt_bg").style.display = "flex";
  document.querySelector("#cancel_2").addEventListener("click", function () {
    document.querySelector("#forAt_2").style.display = "none";
    document.querySelector("#forAt_bg").style.display = "none";
  });
  document.querySelector("#ok_2").addEventListener("click", function () {
    document.querySelector("#forAt_bg").style.display = "none";
    useOutputBoxForAtFunction = true;
    let text = document.querySelector("#Inputed_text_2").value;
    let Index_at = document.querySelector("#Inputed_index_2").value;
    output.innerText = inputedText.value.indexOf(text,Index_at);
    document.querySelector("#forAt_2").style.display = "none";
  });
});
//Remove error messages from inputed text div
setInterval(function () {
  if (inputedText.value != "") {
    inputDiv.style.backgroundColor = "black";
    inputedMessage.innerText = "";
  }
}, 100);
