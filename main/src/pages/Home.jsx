import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

// Styles
import StyledHome from "../styles/pages/Home";

// Material UI
import { Button, IconButton } from "@mui/material";

// Icons
import * as MuiIcons from "@mui/icons-material";

const Home = (props) => {
  const history = useNavigate();
  document.title = "Algorithms";

  const sectionRef = useRef(null);

  return (
    <StyledHome>
      <section className="top-section transparent-background">
        <h1>Algorithms</h1>
        <IconButton
          onClick={() =>
            sectionRef.current?.scrollIntoView({ behaviour: "smooth" })
          }
        >
          <MuiIcons.KeyboardArrowDownRounded />
        </IconButton>
      </section>

      <section className="text-section responsive" ref={sectionRef} id="introduction">
        <h1>Fair Division of Indivisible Goods</h1>

        <h2>Problem Introduction</h2>
        <p className="mt-2">
          The problem is as follows:
          <ul>
            <li>We have a set of resources.</li>
            <li>
              We have a set of agents, among which these resources will be
              distributed.
            </li>
          </ul>
          Now we wish to distribute these resources among these agents in such a
          way that leaves every agent satisfied upto an extent which is
          feasible. We assume these resources are indivisible.
        </p>

        <h3>Notations</h3>
        <p className="mt-2">
          Lets denote:
          <ul>
            <li>
              The set of agents as N = {"{"}a<sub>1</sub>, a<sub>2</sub> ......,
              a<sub>n</sub>
              {"}"}.
            </li>
            <li>
              The set of goods as M = {"{"}g<sub>1</sub>, g<sub>2</sub>, ......,
              g<sub>m</sub>
              {"}"}.
            </li>
          </ul>
        </p>

        <h3>Preliminaries</h3>

        <h4>Allocation</h4>
        <p className="mt-2">
          We define allocation A as a partition of set of goods M, i.e. A ={" "}
          {"{"}A<sub>1</sub>, A<sub>2</sub>, ..., A<sub>n</sub>
          {"}"}, such that ∀ i, j and i &ne; j, we have A<sub>i</sub> ∩ A{" "}
          <sub>j</sub> = ϕ and ∪ <sub>i ∈ N </sub> A<sub>i</sub> = M.
        </p>

        <h4>Valuation Function</h4>
        <p className="mt-2">
          To model the preferences of the the set of agents and the value
          associated with it, we define a function called Valuation Function for
          each agent.
          <br />
          <br />
          <b>Definiton:</b>&nbsp; The valuation function for an agent a
          <sub>i</sub> is v<sub>i</sub> : S → <b>R</b> where S ⊆ M and a
          <sub>i</sub> ∈ N.
          <br />
          <br />v<sub>i</sub>(S) denotes the value derived by an agent a
          <sub>i</sub> when he receives the set of goods S. Valuation functions
          can be classified into different subclasses some of which are:
          <ul>
            <li>
              <b>Monotonic Valuation Functions</b>: A valuation function is said
              to be monotonic if for any S, T with S ⊆ T ⊆ M we have v (S) ≤ v
              (T).
            </li>
            <li>
              <b>Additive Valuation Functions</b>: A valuation function is said
              to be additive if for any two disjoint sets S, T we have v (S ∪ T)
              = v (S) + v (T).
            </li>
          </ul>
        </p>

        <h4>Note</h4>
        <p className="mt-2">
          If a valuation function is assumed to be additive and monotonic, then
          we can write the following:
          <ul>
            <li>
              We can write v(S) = ∑<sub>g∈S</sub> v(g).
            </li>
            <li>
              Also we can now represent the value for each good for an agent as
              a vector and hence a n &times; m matrix can be used to model
              preferences for each agent.
            </li>
          </ul>
        </p>

        <h4>Envy-free Allocation</h4>
        <p className="mt-2">
          An allocation A = {"{"}A<sub>1</sub>, A<sub>2</sub>, ..., A
          <sub>i</sub>, ..., A<sub>j</sub>, ..., A<sub>n</sub>
          {"}"} is said to be envy-free if for every a<sub>i</sub>, a
          <sub>j</sub> ∈ N we have v<sub>i</sub> (A<sub>i</sub>) &nbsp; ≥ &nbsp;
          v<sub>i</sub> (A<sub>j</sub>).
          <br />
          Instead of focusing on EF Allocations, we will focus more on EF-1
          allocations.
          <h5>Envy-free up to One Good (EF-1) allocations</h5>
          <p className="mt-1">
            An allocation is envy-free up to one good (EF-1), if for every a
            <sub>i</sub>, a<sub>j</sub> ∈ N, there exists a good g ∈ M such that
            v<sub>i</sub> (A<sub>i</sub>) &nbsp; ≥ &nbsp; v<sub>i</sub> (A
            <sub>j</sub> \ {"{"}g{"}"})
          </p>
        </p>

        <h4>Proportional Allocation</h4>
        <p className="mt-2">
          An allocation A = {"{"}A<sub>1</sub>, A<sub>2</sub>, ..., A
          <sub>i</sub>, ..., A<sub>n</sub>
          {"}"} is said to be proportional if for all agent a<sub>i</sub> ∈ N we
          have v<sub>i</sub> (A<sub>i</sub>) &nbsp;≥ &nbsp;{" "}
          <fraction>
            <numer>1</numer>n
          </fraction>{" "}
          v<sub>i</sub> (M).
          <br />
          Similar to EF allocations, we will consider relaxations of
          Proportional Allocations:
          <h5>Proportional up to One Good</h5>
          An allocation is proportional upto one good, if for every agent a
          <sub>i</sub>, there exists a good g such that v<sub>i</sub> (A
          <sub>i</sub> ∪ {"{"}g{"}"}) &nbsp; ≥ &nbsp;{" "}
          <fraction>
            <numer>1</numer>n
          </fraction>{" "}
          v<sub>i</sub> (M).
          <h5>Maximin Share Allocation</h5>
          Will add later...
        </p>
      </section>

      <section className="grid-section responsive" id="algorithms">
        <h1>Algorithms</h1>

        <div className="grid">
          <Link to="/cycle-elimination" className="grid-item">
            <div className="image-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Graph_cycle.svg/1200px-Graph_cycle.svg.png"
                alt="Graph Cycle Elimination"
              />
            </div>
            <div className="heading">Cycle Elimination - Graph</div>
            <div className="buttons-container">
              <Button color="primary" variant="contained">
                Read
              </Button>
              <a
                href="/cycle-elimination-visualize.html"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <Button color="success" variant="contained">
                  Visualize
                </Button>
              </a>
            </div>
          </Link>
        </div>
      </section>
    </StyledHome>
  );
};

export default Home;
