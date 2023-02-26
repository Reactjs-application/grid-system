import React from "react";
import "./gridLayout.css";

export default function GridLayout() {
  return (
    <main>
      <nav>navvar component</nav>
      <aside>out side section</aside>
      <article className="box1">box1</article>
      <article className="box2">box2</article>
      <article className="box3">box3</article>
      <section className="main_content">main content</section>
      <footer>footer</footer>
    </main>
  );
}
