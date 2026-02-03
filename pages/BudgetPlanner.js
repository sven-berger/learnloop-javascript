export default function BudgetPlanner() {
  let content = document.querySelector("content");

  let div = document.createElement("div");
  div.classList = "budgetPlanner";
  let p = document.createElement("p");
  p.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi explicabo assumenda quo sint sequi debitis magni totam ullam libero iusto!`;
  div.appendChild(p);
  content.append(div);
}
