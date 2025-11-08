import RMarkdown, { type Options } from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";

export const Markdown = (props: Options) => {
  return (
    <RMarkdown
      remarkPlugins={[remarkFrontmatter]}
      components={{
        a(props) {
          return (
            <a className="text-sm leading-[23px] text-blue-300" {...props} />
          );
        },
        li(props) {
          return <li className="ml-5 list-decimal" {...props} />;
        },
        p(props) {
          return <p className="leading-[23px]" {...props} />;
        },
        blockquote(props) {
          return (
            <blockquote
              className="border-l-1 border-[rgb(74,68,68)] pl-4"
              {...props}
            />
          );
        },
      }}
      {...props}
    />
  );
};
