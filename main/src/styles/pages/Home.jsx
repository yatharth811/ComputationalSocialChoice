import styled from "styled-components";

const StyledHome = styled.div`
  position: fixed;
  top: 64px;
  height: calc(100vh - 64px);
  width: 100vw;
  overflow-y: scroll;

  & > * {
    width: 100%;
    background-color: white;
  }

  .top-section {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    h1 {
      color: white;
      font-size: 4rem;
      font-weight: 500;
    }

    svg {
      color: white;
      font-size: 2.25rem;
    }
  }

  .transparent-background {
    background: transparent;
  }

  .responsive {
    padding: 3rem 12.5vw;

    @media screen and (max-width: 1250px) {
      padding: 3rem 2rem;
    }

    box-sizing: border-box;
    color: #222;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 0;
    }

    h1 {
      margin-top: 0;
      font-size: 2.25rem;
      text-align: center;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.75rem;
    }

    h4 {
      font-size: 1.5rem;
    }

    h5 {
      font-size: 1.35rem;
    }

    p,
    ul {
      font-size: 1.2rem;
    }
    p.mt-2 {
      margin-top: 0.75rem;
    }
    p.mt-1 {
      margin-top: 0.45rem;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .center-button {
    display: block;
    text-align: center;
    margin-top: 2rem;
  }

  .text-section {
  }

  .grid-section {
    background-color: rgb(230, 230, 230);

    .grid {
      margin-top: 3rem;

      --columns-count: 4;

      display: grid;
      grid-template-columns: repeat(var(--columns-count), 1fr);
      grid-gap: 2rem;

      @media screen and (max-width: 1400px) {
        --columns-count: 3;
      }
      @media screen and (max-width: 900px) {
        --columns-count: 2;
      }
      @media screen and (max-width: 600px) {
        --columns-count: 1;
      }

      .grid-item {
        color: inherit;
        text-decoration: none;

        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        width: 100%;

        background-color: white;
        box-shadow: 0 0 1rem 0.25rem #eee;
        border-radius: 0.5rem;

        transition: all 0.3s ease-in-out;

        &:hover {
          box-shadow: 0 0 1rem 0.25rem #ddd;
          transform: scale(1.05);
        }

        box-sizing: border-box;
        padding: 1.5rem;

        .image-container {
          width: 100%;
          img {
            width: 100%;
          }
        }

        .heading {
          font-size: 1.25rem;
          font-weight: 600;
          text-align: center;
          margin-top: 0.25rem;
          color: inherit;
          text-decoration: none;
        }

        a {
          display: inline-block;
          color: inherit;
          text-decoration: none;
        }

        .buttons-container {
          margin-top: 0.65rem;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 1rem;
          align-items: center;

          & > * {
            width: 100%;
          }

          button {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default StyledHome;
