import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { pageStyles, headingStyles, paragraphStyles } from "../styles";
import NavBar from "../components/NavBar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <NavBar />
      <h1 style={headingStyles}>Caroline Pugh-Roberts</h1>
      <p style={paragraphStyles}>Anti human trafficking, activist, professional speaker, survivor, radical feminist expert at trial</p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
