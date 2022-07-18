import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { graphql, Link, useStaticQuery } from "gatsby";

const NavBar = () => {
  const [transparent, setTransparent] = useState(true);

  const mdxPages = useStaticQuery(graphql`
  {
    allMdx {
      nodes {
        id
        slug
        frontmatter {
        title
        }
      }
    }
  }`).allMdx.nodes;

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 0 && transparent) setTransparent(false);
        else if (window.scrollY <= 0 && !transparent) setTransparent(true);
      }
    };

    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const navClass = transparent ? "transparent" : "";
  return (
    <Navbar expand="md" bg="white" className={navClass} fixed="top">
      <Container>
        <Navbar.Brand>
          <StaticImage
            alt="logo"
            src="../images/logo.webp"
            className="d-inline-block align-top"
            height={30}
          />
          Aimless Coding
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link as="div">Home</Nav.Link>
            </Link>
            <NavDropdown title="Showcases">
              {mdxPages
                .filter((page) => page.slug.includes("showcase/"))
                .map((page) => (
                  <NavDropdown.Item key={page.id}>
                    <Link to={"/" + page.slug}>{page.frontmatter.title}</Link>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
