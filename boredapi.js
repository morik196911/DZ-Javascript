"use strict";
const wrapper = document.querySelector(".wrapper")

async function generate() {
  try {
	wrapper.innerHTML = ""
    const data = await Promise.all([
      getActivity(),
      getActivity(),
      getActivity(),
    ]);
	console.log(data)
for(const el of data) {
 const element = document.createElement("div")
 element.innerHTML = `${el.activity}`
 wrapper.appendChild(element)
}

  } catch (error) {
	console.log(error)
  }
} //f

async function getActivity() {
  const foo = await fetch("https://bored.api.lewagon.com/api/activity");
  return foo.json();
}
