import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// get all files in the blog directory
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

// read data from the files
function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return matter(rawContent);
}
// present the mdx data and metadata
function getMDXData(dir: string) {
  let mdxFile = getMDXFiles(dir);

  return mdxFile.map((file) => {
    let { data: metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app/blog/contents'));
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "":

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo} y ago`;
  } 
  
  else if (monthsAgo > 0) {
    formattedDate = `${yearsAgo} mo ago`;
  }
  
  else if (daysAgo > 0) {
    formattedDate = `${daysAgo} d ago`;
  } else {
    formattedDate = `Today`;
  }

  let fullDate = targetDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

