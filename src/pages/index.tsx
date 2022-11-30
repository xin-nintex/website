import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TaskList from "../contents/task-list.mdx";
import { MDXProvider } from "@mdx-js/react";

export const IndexPage = () => {
  return (
    <article>
      <div className="container">
        <MDXProvider components={{
          ol: props => <ol className="list-group">{props.children}</ol>,
          li: props => <li className="list-group-item">{props.children}</li>,
          blockquote: props => <blockquote className="blockquote">{props.children}</blockquote>
        }}>
          <TaskList />
        </MDXProvider>
      </div>
    </article>
  );
};

export const Head: HeadFC = () => <title>Index</title>;

export default IndexPage;
