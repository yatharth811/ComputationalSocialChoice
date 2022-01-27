import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

// Styles
import StyledHome from "../styles/pages/Home";

//Mathjax
import { MathJax, MathJaxContext } from "better-react-mathjax";

// Material UI
import { Button, IconButton } from "@mui/material";

// Icons
import * as MuiIcons from "@mui/icons-material";

const Math = (props) => {
  return <MathJax inline={true}>{props.eq}</MathJax>;
};


const Home = (props) => {
  const history = useNavigate();
  document.title = "Algorithms";

  const sectionRef = useRef(null);

  return (
    <StyledHome>
      <section className="top-section transparent-background">
        <h1>Cycle Elimination Algorithm</h1>
        <IconButton
          onClick={() =>
            sectionRef.current?.scrollIntoView({ behaviour: "smooth" })
          }
        >
          <MuiIcons.KeyboardArrowDownRounded />
        </IconButton>
      </section>

      <section className="text-section responsive" ref={sectionRef}>
      <MathJaxContext>
        <h1>Cycle Elimination Algorithm</h1>

        <p>
          Cycle Elimination Algorithm is a fair division algorithm that outputs
          an EF1 Allocation in polynomial time complexity.
        </p>

        <h2>Algorithm</h2>
        <p>
          The algorithm is as follows:
          <ol>
            <li>Fix ordering of the goods.</li>
            <li>While <Math eq={"\\(\\exists \\)"}/> unallocated goods:</li>
            <ol>
              <li>
                find a node <Math eq={"\\(j \\)"}/> with in-degree = 0, i.e. find an agent that no one
                envies, allocate the good to that agent.
              </li>
              <li>
                if there doesn’t exist a node with node with in-degree = 0, then
                this implies there exists a cycle in envy graph, in such case,
                rotate the bundles among the agents along the cycle, and hence
                by definition cycle will be removed.
              </li>
            </ol>
          </ol>
        </p>

        <h3>Note</h3>
        <ul>
          <li>
            An envy graph is a directed graph with agents as vertices, and
            directed edge from <Math eq={"\\(a_i \\)"}/> to <Math eq={"\\(a_j \\)"}/> represents that <Math eq={"\\(a_i \\)"}/> envies <Math eq={"\\(a_j \\)"}/>.
          </li>
          <li>
            At every step of the algorithm, the allocation is EF1. Since we
            allocate good to an agent which no one envies at every step, then if
            we remove that good, the allocation is EF1 with respect to that
            good.
          </li>
        </ul>

        <a
          className="center-button"
          href="https://yatharth811.github.io/GraphVisualizer/cycle-elimination-visualize.html"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <Button color="success" variant="contained" size="large">
            Visualize
          </Button>
        </a>
      </MathJaxContext>
      </section>
    </StyledHome>
  );
};

export default Home;
