let btn_submit = document.getElementById("btn_submit");
let weight_input_value = document.getElementById("weight_input_value");
let tall_input_value = document.getElementById("tall_input_value");
let tall_value_div = document.querySelector(".tall_value");
let weight_value_div = document.querySelector(".weight_value");
let body_status = document.getElementById("body_status");
let BMI = document.getElementById("BMI");

let content_inputs = document.querySelector(".content_inputs");
let content_outputs = document.querySelector(".content_outputs");

let arrow_flesh = document.querySelector(".arrow_flesh");

btn_submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(
    "وزنك هو : ",
    weight_input_value.value,
    "KG",
    "وطولك هو : ",
    tall_input_value.value,
    "CM"
  );

  weight_value_div.textContent = weight_input_value.value;
  tall_value_div.textContent = tall_input_value.value;

  let bmi_value = 0;
  bmi_value =
    weight_input_value.value /
    ((tall_input_value.value / 100) * (tall_input_value.value / 100));

  BMI.textContent = bmi_value.toFixed(1);
  console.log("BMI is : ", bmi_value.toFixed(1));

  if (bmi_value.toFixed(1) < 15) {
    body_status.textContent = "نقص حاد جداً في الوزن";
    body_status.style.color = "#bb1111";
    // arrow_flesh.style.left = "14px";
  } else if (bmi_value.toFixed(1) >= 15 && bmi_value.toFixed(1) < 16) {
    body_status.textContent = "نقص حاد في الوزن";
    body_status.style.color = "#e94141";
    // arrow_flesh.style.left = "47px";
  } else if (bmi_value.toFixed(1) >= 16 && bmi_value.toFixed(1) < 18.5) {
    body_status.textContent = "نقص في الوزن";
    body_status.style.color = "#ec7b7b";
    // arrow_flesh.style.left = "83px";
  } else if (bmi_value.toFixed(1) >= 18.5 && bmi_value.toFixed(1) < 25) {
    body_status.textContent = "وزن طبيعي";
    body_status.style.color = "green";
    // arrow_flesh.style.left = "123px";
  } else if (bmi_value.toFixed(1) >= 25 && bmi_value.toFixed(1) < 30) {
    body_status.textContent = "زيادة في الوزن";
    body_status.style.color = "#ec7b7b";
    // arrow_flesh.style.left = "166px";
  } else if (bmi_value.toFixed(1) >= 30 && bmi_value.toFixed(1) < 35) {
    body_status.textContent = "سمنة درجة أولى";
    body_status.style.color = "#e94141";
    // arrow_flesh.style.left = "214px";
  } else if (bmi_value.toFixed(1) >= 35 && bmi_value.toFixed(1) < 40) {
    body_status.textContent = "سمنة درجة ثانية";
    body_status.style.color = "#da2020";
    // arrow_flesh.style.left = "265px";
  } else {
    body_status.textContent = "سمنة مفرطة جداً";
    body_status.style.color = "#bb1111";
    // arrow_flesh.style.left = "320px";
  }

  content_inputs.style.display = "none";
  content_outputs.style.display = "block";
});
