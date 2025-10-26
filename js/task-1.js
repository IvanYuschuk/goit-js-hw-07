const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
for (const item of items) {
    let holder = item.querySelector("h2");
    console.log(`Categories: ${holder.textContent}`);
    let count = item.querySelectorAll("li").length;
    console.log(`Elements: ${count}`);
}