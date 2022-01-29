import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

// MathJax (for Mathematical Equations)
import { MathJax, MathJaxContext } from "better-react-mathjax";

// Styles
import StyledHome from "../styles/pages/Home";

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
        <h1>Algorithms</h1>
        <IconButton
          onClick={() =>
            sectionRef.current?.scrollIntoView({ behaviour: "smooth" })
          }
        >
          <MuiIcons.KeyboardArrowDownRounded />
        </IconButton>
      </section>

      <section
        className="text-section responsive"
        ref={sectionRef}
        id="introduction"
      >
        <MathJaxContext>
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
            Now we wish to distribute these resources among these agents in such
            a way that leaves every agent satisfied upto an extent which is
            feasible. We assume these resources are indivisible.
          </p>

          <h3>Notations</h3>
          <p className="mt-2">
            Lets denote:
            <ul>
              <li>
                The set of agents as&nbsp;
                <MathJax inline={true}>
                  {"\\(N = \\{a_{1}, a_{2}, \\dots, a_{n} \\}\\)"}
                </MathJax>
                .
              </li>
              <li>
                The set of goods as&nbsp;
                <MathJax inline={true}>
                  {"\\(M = \\{g_{1}, g_{2}, \\dots, g_{m} \\}\\)"}
                </MathJax>
                .
              </li>
            </ul>
          </p>

          <h3>Preliminaries</h3>

          <h4>Allocation</h4>
          <p className="mt-2">
            We define allocation <MathJax inline={true}>{"\\( A \\)"}</MathJax>
            &nbsp; as a partition of set of goods&nbsp;
            <MathJax inline={true}>{"\\( M \\)"}</MathJax>, i.e. &nbsp;
            <MathJax inline={true}>
              {"\\(A = \\{A_{1}, A_{2}, \\dots, A_{n} \\}\\)"}
            </MathJax>
            , such that&nbsp;
            <MathJax inline={true}>{"\\( \\forall\\; i,\\;j\\)"}</MathJax>
            &nbsp;and&nbsp;
            <Math eq={"\\(i \\neq j \\)"} />, we have&nbsp;
            <Math eq={"\\( A_{i} \\cap A_{j} = \\phi \\)"} /> and&nbsp; &nbsp;&nbsp;&nbsp;
            <Math eq={"\\( \\bigcup \\limits_{i \\; \\in \\; N} \\) "} />
            <Math eq={"\\( A_{i} = M \\)"} />.
          </p>

          <h4>Valuation Function</h4>
          <p className="mt-2">
            To model the preferences of the the set of agents and the value
            associated with it, we define a function called Valuation Function
            for each agent.
            <br />
            <br />
            <b>Definiton:</b>&nbsp; The valuation function for an agent&nbsp;
            <Math eq={"\\( a_{i} \\)"} /> is&nbsp;
            <Math eq={"\\( v_{i} : S \\to R \\)"} /> where&nbsp;
            <Math eq={"\\( S \\subseteq M \\)"} /> and&nbsp;
            <Math eq={"\\( a_{i} \\in N \\)"} />.
            <br />
            <br />
            <Math eq={"\\( v_{i} \\; (S) \\; \\)"} />
            denotes the value derived by an agent <Math eq={"\\( a_{i} \\) "} />
            &nbsp; when he receives the set of goods <Math eq={"\\( S \\)"} />.
            Valuation functions can be classified into different subclasses some
            of which are:
            <ul>
              <li>
                <b>Monotonic Valuation Functions</b>: A valuation function is
                said to be monotonic if for any <Math eq={"\\( S \\)"} />
                ,&nbsp;
                <Math eq={"\\( T \\)"} /> with&nbsp;
                <Math eq={"\\( S \\subseteq T \\subseteq M \\; \\)"} /> we have
                <Math eq={"\\( \\; v \\; (S) \\le v \\; (T) \\)"} />.
              </li>
              <li>
                <b>Additive Valuation Functions</b>: A valuation function is
                said to be additive if for any two disjoint sets&nbsp;
                <Math eq={"\\( S \\)"} />, <Math eq={"\\( T \\)"} /> we
                have&nbsp;
                <Math
                  eq={"\\( \\; v \\; (S \\cup T) = v \\; (S) + v \\; (T) \\)"}
                />
                .
              </li>
            </ul>
          </p>

          <h4>Note</h4>
          <p className="mt-2">
            If a valuation function is assumed to be additive and monotonic,
            then we can write the following:
            <ul>
              <li>
                We can write&nbsp;
                <Math
                  eq={"\\( v \\; (S) = \\sum \\limits_{g \\in S} \\; v \\; (g) \\)"}
                />
                .
              </li>
              <li>
                Also we can now represent the value for each good for an agent
                as a vector and hence a <Math eq={"\\( n \\times m \\)"} />
                &nbsp; matrix can be used to model preferences for each agent.
              </li>
            </ul>
          </p>

          <h4>Envy-free Allocation</h4>
          <p className="mt-2">
            An allocation&nbsp;
            <Math
              eq={
                "\\( A = \\{ A_{1}, A_{2}, \\dots, A_{i}, \\dots, A_{j}, \\dots, A_{n} \\} \\)"
              }
            />
            &nbsp;is said to be envy-free if for every&nbsp;
            <Math eq={"\\( a_{i}, a_{j} \\in N \\)"} /> we have&nbsp;
            <Math eq={"\\( v_{i} \\; (A_{i}) \\ge v_{i} \\; (A_{j}) \\)"} />.
            <br />
            Instead of focusing on EF Allocations, we will focus more on EF1
            allocations.
            <h5>Envy-free up to One Good (EF1) allocations</h5>
            <p className="mt-1">
              An allocation is envy-free up to one good (EF1), if for
              every&nbsp;
              <Math eq={"\\( a_{i}, a_{j} \\in N \\)"} />, there exists a
              good&nbsp;
              <Math eq={"\\( g \\in M \\)"} /> such that&nbsp;
              <Math
                eq={
                  "\\( v_{i} \\; (A_{i}) \\ge v_{i} \\; (A_{j}\\setminus \\{g\\}) \\)"
                }
              />
              .
            </p>
          </p>

          <h4>Proportional Allocation</h4>
          <p className="mt-2">
            An allocation
            <Math
              eq={
                "\\( A = \\{ A_{1}, A_{2}, \\dots, A_{i}, \\dots, A_{n} \\} \\)"
              }
            />
            &nbsp; is said to be proportional if for all agent{" "}
            <Math eq={"\\( a_{i} \\in N \\)"} /> we have{" "}
            <Math
              eq={"\\( v_{i} \\; (A_{i}) \\ge \\frac{1}{n} v_{i} \\; (M) \\)"}
            />
            .
            <br />
            Similar to EF allocations, we will consider relaxations of
            Proportional Allocations:
            <h5>Proportional up to One Good</h5>
            An allocation is proportional upto one good, if for every
            agent&nbsp;
            <Math eq={"\\( a_{i} \\) "} />, there exists a good{" "}
            <Math eq={"\\( g \\) "} /> such that{" "}
            <Math
              eq={
                "\\( v_{i} \\; (A_{i} \\cup \\{g\\})  \\ge \\frac{1}{n} v_{i} \\; (M) \\) "
              }
            />
            .<h5>Maximin Share Allocation</h5>
            Will add later...
          </p>
        </MathJaxContext>
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
                href="https://yatharth811.github.io/GraphVisualizer/cycle-elimination-visualize.html"
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
