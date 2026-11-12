import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

/**
 * Add new items to:
 *   1) `src/app/data/blogs.json`
 *   2) `src/app/data/ivfcost.json`
 *   3) `src/app/data/centerblogs.json` (IVF Doctors in India)
 *
 * Run:
 *   node scripts/update-blogs.mjs
 *
 * How to add to `centerblogs.json`:
 *   Set `category: "Ivf doctor in india"` (or `target: "center"`)
 *   AND pass `doctors: ["Dr. Gauri Agarwal", "Dr. Alpana Razdan", "Dr. Lisha Singh"]`
 *   => Script automatically finds each doctor, builds the exact center-page card layout
 *      (with photo, name, designation, experience, location, and clickable link to their profile),
 *      and inserts them after every 3rd paragraph (or after 3rd paragraph) of the content!
 */

// ========================================================
// 1) ADD BLOGS / IVF COSTS / IVF DOCTORS IN INDIA BLOGS HERE
// ========================================================

const NEW_BLOGS = [
  // --- EXAMPLE 1: IVF DOCTOR IN INDIA BLOG (Goes to centerblogs.json) ---
  {
    category: "Ivf doctor in india",
    id: "best-ivf-doctor-in-gurgaon",
    hometitle: "Best IVF Doctor in Gurgaon", // Appears in Home Page Dropdown
    title: "Best IVF Doctor in Gurgaon: How to Choose the Right Fertility Specialist",
    slug: "best-ivf-doctor-in-gurgaon",
    contentFile: "scripts/blog-content/dummy-blog.html",
    image: "/assets/img/Blogs/best-ivf-doctor-in-gurgaon.png",
    readTime: "10 min read",
    date: "November 10, 2026",
    // 👇 Put the doctor names here! Their card with photo & profile link will be auto-inserted after 3rd paragraph
    doctors: [
      "Dr. Aditi Bhatnagar"
    ]
  },

  // --- EXAMPLE 2: IVF COST ENTRY (Goes to ivfcost.json) ---
  // {
  //   id: "ivf-cost-in-ranchi",
  //   hometitle: "IVF Cost in Ranchi",           
  //   title: "IVF Cost in Ranchi: Treatment Price, Factors and Process",
  //   contentFile: "scripts/blog-content/dummy-blog.html", 
  //   image: "/assets/img/Blogs/IVF Cost in Ranchi.png",
  //   category: "IVF Cost",                      
  //   slug: "ivf-cost-in-ranchi",
  //   readTime: "11 min read",
  //   date: "October 01, 2026",
  //   author: "admin",
  //   excerpt: "Learn how lifestyle and diet influence fertility outcomes."
  // },

  // --- EXAMPLE 3: STANDARD BLOG ENTRY (Goes to blogs.json) ---
  // {
  //   id: "iui-cost-in-guwahati",
  //   title: "IUI Cost in Guwahati: Treatment, Procedure, Factors and What to Expect",
  //   excerpt: "Trying for a baby for months or years without succeeding is often stressful...",
  //   contentFile: "scripts/blog-content/dummy-blog.html",
  //   image: "/assets/img/Blogs/iui-cost-in-guwahati.png",
  //   date: "November 03, 2026",
  //   author: "Dr. Julie Chhawchharia",
  //   category: "Fertility",            
  //   readTime: "11 min read",
  //   slug: "iui-cost-in-guwahati"
  // }
];

// =======================
// 2) SCRIPT LOGIC
// =======================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogsPath = path.join(__dirname, "../src/app/data/blogs.json");
const ivfCostPath = path.join(__dirname, "../src/app/data/ivfcost.json");
const centerBlogsPath = path.join(__dirname, "../src/app/data/centerblogs.json");
const doctorsDataPath = path.join(__dirname, "../src/app/data/doctors-data.json");

// Minimum required fields for center blogs
const REQUIRED_CENTER_FIELDS = [
  "id",
  "hometitle",
  "title",
  "category",
  "slug"
];

// Required for standard blogs and cost
const REQUIRED_STANDARD_FIELDS = [
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
  console.error(`\n❌ ERROR: ${msg}\n`);
  process.exit(1);
}

function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function loadDoctorsData() {
  if (!fs.existsSync(doctorsDataPath)) return [];
  try {
    const raw = fs.readFileSync(doctorsDataPath, "utf8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

const allDoctors = loadDoctorsData();

function getDoctorProfilePath(doctor) {
  const GENETIC_EXPERT_SLUGS = new Set([
    'dr-alpana-razdan',
    'dr-ranjana-mishra-ivf-specialist',
  ]);
  const doctorSlug = doctor?.newSlug || `${doctor?.slug}-ivf-specialist`;
  if (!doctorSlug) return '/ivf-doctor';
  const basePath = GENETIC_EXPERT_SLUGS.has(doctorSlug) ? '/genetic-expert' : '/ivf-doctor';
  return `${basePath}/${doctorSlug}`;
}

function findDoctor(query) {
  if (!query || typeof query !== "string") return null;
  const q = query.toLowerCase().trim();
  const normalizedQ = q.replace(/[^a-z0-9]/g, "");

  return allDoctors.find((d) => {
    const name = (d.name || "").toLowerCase().trim();
    const slug = (d.slug || "").toLowerCase().trim();
    const newSlug = (d.newSlug || "").toLowerCase().trim();
    const normalizedName = name.replace(/[^a-z0-9]/g, "");

    return (
      name === q ||
      slug === q ||
      newSlug === q ||
      normalizedName === normalizedQ ||
      normalizedName.includes(normalizedQ) ||
      normalizedQ.includes(normalizedName)
    );
  });
}

function buildDoctorCardHtml(doc) {
  const link = getDoctorProfilePath(doc);
  const subtitle = (doc.slug === "dr-gauri-agarwal" || doc.name.includes("Gauri")) ? "Founder & Chief IVF Specialist" : (doc.subtitle || "IVF Specialist");

  const expHtml = doc.experience
    ? `<span class="soi_doc_meta_item">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M128 480h256V320H128v160zm320-352h-80V64c0-35.3-28.7-64-64-64H208c-35.3 0-64 28.7-64 64v64H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zm-256-64h128v64H192V64z"></path></svg>
        ${doc.experience}
      </span>`
    : "";

  const locHtml = doc.location
    ? `<span class="soi_doc_meta_item">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
        ${doc.location}
      </span>`
    : "";

  return `
    <a href="${link}" class="soi_doctor_mini_card">
      <div class="soi_doc_thumb">
        <img src="${doc.image}" alt="${doc.name}" loading="lazy" />
      </div>
      <div class="soi_doc_details">
        <h4 class="soi_doc_name">${doc.name}</h4>
        <p class="soi_doc_sub">${subtitle}</p>
        <div class="soi_doc_meta">
          ${expHtml}
          ${locHtml}
        </div>
      </div>
    </a>`;
}

function buildDoctorsGridSection(doctorNamesOrObjects) {
  if (!Array.isArray(doctorNamesOrObjects) || doctorNamesOrObjects.length === 0) {
    return "";
  }

  const resolvedDocs = [];
  for (const item of doctorNamesOrObjects) {
    if (typeof item === "string") {
      const found = findDoctor(item);
      if (found) {
        resolvedDocs.push(found);
      } else {
        console.warn(`⚠️ Doctor not found in doctors-data.json: "${item}" (skipping)`);
      }
    } else if (item && typeof item === "object") {
      resolvedDocs.push(item);
    }
  }

  if (resolvedDocs.length === 0) return "";

  const cardsHtml = resolvedDocs.map(buildDoctorCardHtml).join("\n");

  return `
<div class="soi_doctor_mini_grid">
  ${cardsHtml}
</div>
`;
}

/** Inserts doctor grid HTML after every 3rd paragraph (or after 3rd paragraph / end of content) */
function injectDoctorsIntoContent(rawHtml, doctorList) {
  if (!doctorList || !Array.isArray(doctorList) || doctorList.length === 0) {
    return rawHtml;
  }

  const gridHtml = buildDoctorsGridSection(doctorList);
  if (!gridHtml) return rawHtml;

  let pCount = 0;
  let inserted = false;

  // Insert after the 3rd paragraph
  let modified = rawHtml.replace(/<\/p>/gi, (match) => {
    pCount++;
    if (pCount === 3) {
      inserted = true;
      return `${match}\n${gridHtml}`;
    }
    return match;
  });

  // If there are less than 3 paragraphs, append at the end
  if (!inserted) {
    modified = `${modified}\n${gridHtml}`;
  }

  return modified;
}

/** Determines entry target: "center" | "cost" | "blog" */
function getEntryTarget(entry) {
  if (
    entry.type === "center" ||
    entry.target === "center" ||
    entry.target === "centerblog" ||
    entry.target === "centerblogs"
  ) {
    return "center";
  }

  if (typeof entry.category === "string") {
    const cat = entry.category.toLowerCase().trim();
    if (
      cat === "center blog" ||
      cat === "center blogs" ||
      cat === "centerblog" ||
      cat === "ivf doctor in india" ||
      cat === "ivf doctors in india"
    ) {
      return "center";
    }
  }

  if (entry.type === "cost" || entry.target === "cost" || entry.target === "ivfcost") {
    return "cost";
  }

  if (typeof entry.category === "string") {
    const cat = entry.category.toLowerCase().trim();
    if (cat === "ivf cost" || cat === "ivf-cost" || cat === "cost") {
      return "cost";
    }
  }

  if (isNonEmptyString(entry.hometitle)) {
    const lower = entry.hometitle.toLowerCase();
    if (lower.includes("doctor")) {
      return "center";
    }
    return "cost";
  }

  return "blog";
}

function assertEntryShape(entry, index) {
  if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
    fail(`NEW_BLOGS[${index}] must be an object`);
  }

  const target = getEntryTarget(entry);
  const requiredFields = target === "center" ? REQUIRED_CENTER_FIELDS : REQUIRED_STANDARD_FIELDS;

  for (const key of requiredFields) {
    if (!isNonEmptyString(entry[key])) {
      fail(`NEW_BLOGS[${index}].${key} is required and must be a non-empty string`);
    }
  }

  if (target === "cost") {
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

function loadCenterBlogsJson() {
  if (!fs.existsSync(centerBlogsPath)) {
    return { centerBlogs: [] };
  }
  const raw = fs.readFileSync(centerBlogsPath, "utf8");
  const parsed = JSON.parse(raw);
  if (Array.isArray(parsed)) {
    return { centerBlogs: parsed };
  }
  if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.centerBlogs)) {
    return { centerBlogs: [] };
  }
  return parsed;
}

function saveCenterBlogsJson(db) {
  fs.writeFileSync(centerBlogsPath, JSON.stringify(db, null, 2), "utf8");
}

function resolveFromProjectRoot(p) {
  const projectRoot = path.join(__dirname, "..");
  return path.isAbsolute(p) ? p : path.join(projectRoot, p);
}

function materializeContent(entry, index) {
  let content = "";
  if (isNonEmptyString(entry.content)) {
    content = entry.content;
  } else {
    const abs = resolveFromProjectRoot(entry.contentFile);
    if (!fs.existsSync(abs)) {
      fail(`NEW_BLOGS[${index}].contentFile not found: "${entry.contentFile}" (resolved: ${abs})`);
    }
    content = fs.readFileSync(abs, "utf8");
  }

  // If entry specifies doctors, auto inject their cards after the 3rd paragraph
  if (Array.isArray(entry.doctors) && entry.doctors.length > 0) {
    content = injectDoctorsIntoContent(content, entry.doctors);
  }

  return content;
}

function main() {
  if (!Array.isArray(NEW_BLOGS) || NEW_BLOGS.length === 0) {
    console.log(
      "ℹ️  No entries in NEW_BLOGS array. To add an entry, paste your blog/cost/center-blog object into NEW_BLOGS inside scripts/update-blogs.mjs and re-run."
    );
    process.exit(0);
  }

  NEW_BLOGS.forEach(assertEntryShape);

  const blogsDb = loadBlogsJson();
  const ivfCostDb = loadIvfCostJson();
  const centerBlogsDb = loadCenterBlogsJson();

  // Index existing items
  const blogIds = new Set(blogsDb.blogs.map((b) => b.id));
  const blogSlugs = new Set(blogsDb.blogs.map((b) => b.slug));
  const costIds = new Set(ivfCostDb.ivfCosts.map((c) => c.id));
  const costSlugs = new Set(ivfCostDb.ivfCosts.map((c) => c.slug));
  const centerIds = new Set(centerBlogsDb.centerBlogs.map((cb) => cb.id));
  const centerSlugs = new Set(centerBlogsDb.centerBlogs.map((cb) => cb.slug));

  const seenIds = new Set();
  const seenSlugs = new Set();

  const toAddBlogs = [];
  const toAddCosts = [];
  const toAddCenterBlogs = [];

  for (let i = 0; i < NEW_BLOGS.length; i++) {
    const item = NEW_BLOGS[i];
    const target = getEntryTarget(item);

    if (seenIds.has(item.id)) fail(`Duplicate id inside NEW_BLOGS: "${item.id}"`);
    if (seenSlugs.has(item.slug)) fail(`Duplicate slug inside NEW_BLOGS: "${item.slug}"`);
    seenIds.add(item.id);
    seenSlugs.add(item.slug);

    if (target === "center") {
      // update if exists
      // update if exists
      toAddCenterBlogs.push({ item, index: i });
    } else if (target === "cost") {
      if (costIds.has(item.id)) fail(`Duplicate id already exists in ivfcost.json: "${item.id}"`);
      if (costSlugs.has(item.slug)) fail(`Duplicate slug already exists in ivfcost.json: "${item.slug}"`);
      toAddCosts.push({ item, index: i });
    } else {
      if (blogIds.has(item.id)) fail(`Duplicate id already exists in blogs.json: "${item.id}"`);
      if (blogSlugs.has(item.slug)) fail(`Duplicate slug already exists in blogs.json: "${item.slug}"`);
      toAddBlogs.push({ item, index: i });
    }
  }

  // Materialize and push Center Blogs
  if (toAddCenterBlogs.length > 0) {
    const formattedCenterBlogs = toAddCenterBlogs.map(({ item, index }) => {
      const content = materializeContent(item, index);
      // Strip out city, center, author, excerpt, doctors if passed
      const { contentFile, type, target, city, center, author, excerpt, doctors, ...rest } = item;
      return { ...rest, content };
    });
    for (const cb of formattedCenterBlogs) { const idx = centerBlogsDb.centerBlogs.findIndex(x => x.id === cb.id || x.slug === cb.slug); if (idx !== -1) { centerBlogsDb.centerBlogs[idx] = cb; } else { centerBlogsDb.centerBlogs.push(cb); } }
    saveCenterBlogsJson(centerBlogsDb);
    console.log(`\n✅ Added ${formattedCenterBlogs.length} blog(s) to src/app/data/centerblogs.json successfully.`);
    formattedCenterBlogs.forEach((cb) =>
      console.log(`   - [Center Blog] ${cb.hometitle} - ${cb.title} (${cb.slug})`)
    );
  }

  // Materialize and push blogs
  if (toAddBlogs.length > 0) {
    const formattedBlogs = toAddBlogs.map(({ item, index }) => {
      const content = materializeContent(item, index);
      const { contentFile, type, target, doctors, ...rest } = item;
      return { ...rest, content };
    });
    blogsDb.blogs.push(...formattedBlogs);
    saveBlogsJson(blogsDb);
    console.log(`\n✅ Added ${formattedBlogs.length} blog(s) to src/app/data/blogs.json successfully.`);
    formattedBlogs.forEach((b) => console.log(`   - [Blog] ${b.title} (${b.slug})`));
  }

  // Materialize and push IVF costs
  if (toAddCosts.length > 0) {
    const formattedCosts = toAddCosts.map(({ item, index }) => {
      const content = materializeContent(item, index);
      const { contentFile, type, target, doctors, ...rest } = item;
      return { ...rest, content };
    });
    ivfCostDb.ivfCosts.push(...formattedCosts);
    saveIvfCostJson(ivfCostDb);
    console.log(`\n✅ Added ${formattedCosts.length} IVF cost guide(s) to src/app/data/ivfcost.json successfully.`);
    formattedCosts.forEach((c) => console.log(`   - [IVF Cost] ${c.hometitle} - ${c.title} (${c.slug})`));
  }

  // Auto-sync SEO Panel trees if seo-panel directory exists
  try {
    const seoPanelGenCost = path.resolve(__dirname, "../../seo-panel/scripts/gen-cost-tree.mjs");
    const seoPanelGenBlog = path.resolve(__dirname, "../../seo-panel/scripts/gen-blog-tree.mjs");
    const seoPanelGenCenter = path.resolve(__dirname, "../../seo-panel/scripts/gen-center-tree.mjs");
    if (fs.existsSync(seoPanelGenCost) && fs.existsSync(seoPanelGenBlog) && fs.existsSync(seoPanelGenCenter)) {
      execSync(`node "${seoPanelGenBlog}" && node "${seoPanelGenCost}" && node "${seoPanelGenCenter}"`, { stdio: "pipe" });
      console.log("ℹ️  Automatically synchronized SEO Panel tree (lib/blogPageTree.js, lib/ivfCostPageTree.js & lib/centerBlogsTree.js).");
    }
  } catch (err) {
    console.warn("⚠️  SEO Panel tree sync warning:", err?.message || err);
  }

  console.log("\n🚀 Update complete!\n");
}

main();




