import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

/**
 * Add new items to `src/app/data/blogs.json` OR `src/app/data/ivfcost.json`.
 *
 * Run:
 *   node scripts/update-blogs.mjs
 *
 * How it works:
 *   - To add to IVF COST (`ivfcost.json`):
 *     Set category: "IVF Cost" (or type: "cost") AND provide `hometitle: "IVF Cost in ..."`
 *
 *   - To add to BLOGS (`blogs.json`):
 *     Set standard blog category (e.g. "IVF Process", "Fertility", "Women's Health", etc.)
 */

// ==========================================
// 1) ADD BLOGS / IVF COSTS HERE
// ==========================================
// IMPORTANT: HTML ko JS string me paste karne se quotes ki wajah se error aata hai.
// Isliye `contentFile` use karo (recommended) — apna HTML bilkul same-to-same file me paste karo.
//
// How:
// - Create file: scripts/blog-content/<slug>.html
// - Paste FULL HTML in that file (as-is)
// - Then set: contentFile: "scripts/blog-content/<slug>.html"
//
// You can still use `content` directly, but `contentFile` is safer.

const NEW_BLOGS = [
  // --- EXAMPLE 1: IVF COST ENTRY (Goes to ivfcost.json) ---
  {
    id: "ivf-cost-in-bhopal",
    hometitle: "IVF Cost in Bhopal",           
    title: "IVF Cost in Bhopal: Treatment, Factors, and What to Expect",
    excerpt: "Comprehensive guide to IVF cost, packages and financing options in Bhopal.",
    contentFile: "scripts/blog-content/ivf-cost-in-bhopal.html", 
    image: "/assets/img/Blogs/IVF Cost in Bhopal.png",
    date: "September 30, 2026",
    author: "Dr. Gauri Agarwal",
    category: "IVF Cost",                      
    readTime: "10 min read",
    slug: "ivf-cost-in-bhopal"
  },

  // --- EXAMPLE 2: STANDARD BLOG ENTRY (Goes to blogs.json) ---
  // {
  //   id: "my-fertility-guide",
  //   title: "Complete Guide to Fertility Wellness",
  //   excerpt: "Learn how lifestyle and diet influence fertility outcomes.",
  //   contentFile: "scripts/blog-content/my-fertility-guide.html",
  //   image: "/assets/img/Blogs/fertility-guide.png",
  //   date: "September 30, 2026",
  //   author: "Dr. Gauri Agarwal",
  //   category: "Fertility",                     // Standard blog category
  //   readTime: "8 min read",
  //   slug: "my-fertility-guide"
  // }
];

// =======================
// 2) SCRIPT (don’t edit)
// =======================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogsPath = path.join(__dirname, "../src/app/data/blogs.json");
const ivfCostPath = path.join(__dirname, "../src/app/data/ivfcost.json");

const REQUIRED_COMMON_FIELDS = [
  "id",
  "title",
  "excerpt",
  "date",
  "author",
  "category",
  "readTime",
  "slug",
];

function fail(msg) {
  console.error(`\nERROR: ${msg}\n`);
  process.exit(1);
}

function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

/** Determines if an entry belongs to ivfcost.json or blogs.json */
function isIvfCostEntry(entry) {
  if (entry.type === "cost" || entry.target === "cost" || entry.target === "ivfcost") {
    return true;
  }
  if (entry.type === "blog" || entry.target === "blog") {
    return false;
  }
  if (typeof entry.category === "string") {
    const cat = entry.category.toLowerCase().trim();
    if (cat === "ivf cost" || cat === "ivf-cost" || cat === "cost") {
      return true;
    }
  }
  if (isNonEmptyString(entry.hometitle)) {
    return true;
  }
  return false;
}

function assertEntryShape(entry, index) {
  if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
    fail(`NEW_BLOGS[${index}] must be an object`);
  }

  for (const key of REQUIRED_COMMON_FIELDS) {
    if (!isNonEmptyString(entry[key])) {
      fail(`NEW_BLOGS[${index}].${key} is required and must be a non-empty string`);
    }
  }

  const isCost = isIvfCostEntry(entry);
  if (isCost) {
    if (!isNonEmptyString(entry.hometitle)) {
      fail(
        `NEW_BLOGS[${index}] is marked for IVF Cost, but is missing required field "hometitle" (e.g. hometitle: "IVF Cost in Agra")`
      );
    }
  }

  const hasContent = isNonEmptyString(entry.content);
  const hasContentFile = isNonEmptyString(entry.contentFile);
  if (!hasContent && !hasContentFile) {
    fail(`NEW_BLOGS[${index}] must include either "content" OR "contentFile" (recommended)`);
  }
  if (hasContent && hasContentFile) {
    fail(`NEW_BLOGS[${index}] should include only one: "content" OR "contentFile"`);
  }
  if ("image" in entry && entry.image !== undefined && entry.image !== null && !isNonEmptyString(entry.image)) {
    fail(`NEW_BLOGS[${index}].image must be a non-empty string if provided`);
  }
  if ("contentFile" in entry && entry.contentFile !== undefined && entry.contentFile !== null && !isNonEmptyString(entry.contentFile)) {
    fail(`NEW_BLOGS[${index}].contentFile must be a non-empty string if provided`);
  }
}

function loadBlogsJson() {
  const raw = fs.readFileSync(blogsPath, "utf8");
  const parsed = JSON.parse(raw);
  if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.blogs)) {
    fail(`Invalid blogs.json shape. Expected { "blogs": [...] } at ${blogsPath}`);
  }
  return parsed;
}

function saveBlogsJson(db) {
  fs.writeFileSync(blogsPath, JSON.stringify(db, null, 2), "utf8");
}

function loadIvfCostJson() {
  const raw = fs.readFileSync(ivfCostPath, "utf8");
  const parsed = JSON.parse(raw);
  if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.ivfCosts)) {
    fail(`Invalid ivfcost.json shape. Expected { "ivfCosts": [...] } at ${ivfCostPath}`);
  }
  return parsed;
}

function saveIvfCostJson(db) {
  fs.writeFileSync(ivfCostPath, JSON.stringify(db, null, 2), "utf8");
}

function resolveFromProjectRoot(p) {
  const projectRoot = path.join(__dirname, "..");
  return path.isAbsolute(p) ? p : path.join(projectRoot, p);
}

function materializeContent(entry, index) {
  if (isNonEmptyString(entry.content)) return entry.content;
  const abs = resolveFromProjectRoot(entry.contentFile);
  if (!fs.existsSync(abs)) {
    fail(`NEW_BLOGS[${index}].contentFile not found: "${entry.contentFile}" (resolved: ${abs})`);
  }
  return fs.readFileSync(abs, "utf8");
}

function main() {
  if (!Array.isArray(NEW_BLOGS) || NEW_BLOGS.length === 0) {
    fail(
      "No entries to add. Paste your blog or IVF cost objects inside NEW_BLOGS array in scripts/update-blogs.mjs"
    );
  }

  NEW_BLOGS.forEach(assertEntryShape);

  const blogsDb = loadBlogsJson();
  const ivfCostDb = loadIvfCostJson();

  // Index existing items
  const blogIds = new Set(blogsDb.blogs.map((b) => b.id));
  const blogSlugs = new Set(blogsDb.blogs.map((b) => b.slug));
  const costIds = new Set(ivfCostDb.ivfCosts.map((c) => c.id));
  const costSlugs = new Set(ivfCostDb.ivfCosts.map((c) => c.slug));

  const seenIds = new Set();
  const seenSlugs = new Set();

  const toAddBlogs = [];
  const toAddCosts = [];

  for (let i = 0; i < NEW_BLOGS.length; i++) {
    const item = NEW_BLOGS[i];
    const isCost = isIvfCostEntry(item);

    if (seenIds.has(item.id)) fail(`Duplicate id inside NEW_BLOGS: "${item.id}"`);
    if (seenSlugs.has(item.slug)) fail(`Duplicate slug inside NEW_BLOGS: "${item.slug}"`);
    seenIds.add(item.id);
    seenSlugs.add(item.slug);

    if (isCost) {
      if (costIds.has(item.id)) fail(`Duplicate id already exists in ivfcost.json: "${item.id}"`);
      if (costSlugs.has(item.slug)) fail(`Duplicate slug already exists in ivfcost.json: "${item.slug}"`);
      toAddCosts.push({ item, index: i });
    } else {
      if (blogIds.has(item.id)) fail(`Duplicate id already exists in blogs.json: "${item.id}"`);
      if (blogSlugs.has(item.slug)) fail(`Duplicate slug already exists in blogs.json: "${item.slug}"`);
      toAddBlogs.push({ item, index: i });
    }
  }

  // Materialize and push blogs
  if (toAddBlogs.length > 0) {
    const formattedBlogs = toAddBlogs.map(({ item, index }) => {
      const content = materializeContent(item, index);
      const { contentFile, type, target, ...rest } = item;
      return { ...rest, content };
    });
    blogsDb.blogs.push(...formattedBlogs);
    saveBlogsJson(blogsDb);
    console.log(`\n Added ${formattedBlogs.length} blog(s) to src/app/data/blogs.json successfully.`);
    formattedBlogs.forEach((b) => console.log(`   - [Blog] ${b.title} (${b.slug})`));
  }

  // Materialize and push IVF costs
  if (toAddCosts.length > 0) {
    const formattedCosts = toAddCosts.map(({ item, index }) => {
      const content = materializeContent(item, index);
      const { contentFile, type, target, ...rest } = item;
      return { ...rest, content };
    });
    ivfCostDb.ivfCosts.push(...formattedCosts);
    saveIvfCostJson(ivfCostDb);
    console.log(`\n Added ${formattedCosts.length} IVF cost guide(s) to src/app/data/ivfcost.json successfully.`);
    formattedCosts.forEach((c) => console.log(`   - [IVF Cost] ${c.hometitle} - ${c.title} (${c.slug})`));
  }

  // Auto-sync SEO Panel trees if seo-panel directory exists
  try {
    const seoPanelGenCost = path.resolve(__dirname, "../../seo-panel/scripts/gen-cost-tree.mjs");
    const seoPanelGenBlog = path.resolve(__dirname, "../../seo-panel/scripts/gen-blog-tree.mjs");
    if (fs.existsSync(seoPanelGenCost) && fs.existsSync(seoPanelGenBlog)) {
      execSync(`node "${seoPanelGenBlog}" && node "${seoPanelGenCost}"`, { stdio: "pipe" });
      console.log(" Automatically synchronized SEO Panel tree (lib/blogPageTree.js & lib/ivfCostPageTree.js).");
    }
  } catch {
    // Graceful fallback if seo-panel is not found or in different folder
  }

  console.log("\nUpdate complete!\n");
}

main();