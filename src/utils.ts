import { type ClassValue, clsx } from "clsx";
import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Article {
  title: string;
  slug: string;
  description: string;
  pubDate: Date;
  content: string;
  draft: boolean;
}

export function getArticlesFromMarkdown(directoryPath: string): Article[] {
  const articles: Article[] = [];
  try {
    const files = fs.readdirSync(directoryPath);

    files.forEach((file) => {
      if (file.endsWith(".md")) {
        const filePath = path.join(directoryPath, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContent); // Parse front matter and content

        const postData = data as {
          title?: string;
          slug?: string;
          description?: string;
          pubDate?: Date;
          draft?: boolean;
        };

        if (
          postData.title &&
          postData.slug &&
          postData.description &&
          postData.pubDate
        ) {
          articles.push({
            title: postData.title,
            slug: postData.slug,
            description: postData.description,
            pubDate: postData.pubDate,
            content: content, // Include the content of the markdown file
            draft: postData.draft || false, // Default to false if not specified
          });
        } else {
          console.warn(
            `[WARNING] Skipping malformed Markdown file (missing front matter fields): ${file}`,
          );
        }
      }
    });
  } catch (error) {
    console.error(
      `[ERROR] Could not read Markdown articles from ${directoryPath}: ${(error as Error).message}`,
    );
    throw error;
  }
  return articles;
}
