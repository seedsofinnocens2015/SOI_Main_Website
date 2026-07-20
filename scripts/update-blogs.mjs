import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * Add new blog objects to `src/app/data/blogs.json`.
 *
 * Run:
 *   node scripts/update-blogs.mjs
 *
 * What you edit:
 *   - Add blog objects in NEW_BLOGS array below.
 */

// ==========================================
// 1) ADD BLOGS (NO COPY/PASTE STRING ERRORS)
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
  {
    id: "ivf-treatment-in-india",
    title: "IVF Treatment in India | High Success Rates & Expert Care",
    excerpt: "Parenthood is considered to be one of the most beautiful things in the world. However, in case it turns out to be unattainable, it can cause stress, anxiety, and even pain both physically and psychologically. The thing is that nowadays medicine is highly developed, which means that in vitro fertilization in India has helped many families become happy parents.",
    contentFile: "scripts/blog-content/dummy-blog.html",
    image: "/assets/img/Blogs/IVF Treatment in India.png",
    date: "July 18, 2026",
    author: "admin",
    category: "IVF Process",
    readTime: "13 min read",
    slug: "ivf-treatment-in-india"
  }
];

// =======================
// 2) SCRIPT (don’t edit)
// =======================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogsPath = path.join(__dirname, "../src/app/data/blogs.json");

const REQUIRED_FIELDS = [
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

function assertBlogShape(blog, index) {
  if (!blog || typeof blog !== "object" || Array.isArray(blog)) {
    fail(`NEW_BLOGS[${index}] must be an object`);
  }
  for (const key of REQUIRED_FIELDS) {
    if (!isNonEmptyString(blog[key])) {
      fail(`NEW_BLOGS[${index}].${key} is required and must be a non-empty string`);
    }
  }
  const hasContent = isNonEmptyString(blog.content);
  const hasContentFile = isNonEmptyString(blog.contentFile);
  if (!hasContent && !hasContentFile) {
    fail(`NEW_BLOGS[${index}] must include either "content" OR "contentFile" (recommended)`);
  }
  if (hasContent && hasContentFile) {
    fail(`NEW_BLOGS[${index}] should include only one: "content" OR "contentFile"`);
  }
  if ("image" in blog && blog.image !== undefined && blog.image !== null && !isNonEmptyString(blog.image)) {
    fail(`NEW_BLOGS[${index}].image must be a non-empty string if provided`);
  }
  if ("contentFile" in blog && blog.contentFile !== undefined && blog.contentFile !== null && !isNonEmptyString(blog.contentFile)) {
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

function resolveFromProjectRoot(p) {
  // scripts/update-blogs.mjs lives in <projectRoot>/scripts
  // so projectRoot is one level up from __dirname
  const projectRoot = path.join(__dirname, "..");
  return path.isAbsolute(p) ? p : path.join(projectRoot, p);
}

function materializeContent(nb, index) {
  if (isNonEmptyString(nb.content)) return nb.content;
  const abs = resolveFromProjectRoot(nb.contentFile);
  if (!fs.existsSync(abs)) {
    fail(`NEW_BLOGS[${index}].contentFile not found: "${nb.contentFile}" (resolved: ${abs})`);
  }
  return fs.readFileSync(abs, "utf8");
}

function main() {
  if (!Array.isArray(NEW_BLOGS) || NEW_BLOGS.length === 0) {
    fail(
      "No blogs to add. Paste your blog objects inside NEW_BLOGS array in scripts/update-blogs.mjs"
    );
  }

  NEW_BLOGS.forEach(assertBlogShape);

  const db = loadBlogsJson();

  const existingById = new Map();
  const existingBySlug = new Map();
  for (const b of db.blogs) {
    if (b && typeof b === "object") {
      if (typeof b.id === "string") existingById.set(b.id, true);
      if (typeof b.slug === "string") existingBySlug.set(b.slug, true);
    }
  }

  const seenNewId = new Map();
  const seenNewSlug = new Map();

  for (let i = 0; i < NEW_BLOGS.length; i++) {
    const nb = NEW_BLOGS[i];
    if (existingById.has(nb.id)) fail(`Duplicate id already exists in blogs.json: "${nb.id}"`);
    if (existingBySlug.has(nb.slug)) fail(`Duplicate slug already exists in blogs.json: "${nb.slug}"`);
    if (seenNewId.has(nb.id)) fail(`Duplicate id inside NEW_BLOGS: "${nb.id}"`);
    if (seenNewSlug.has(nb.slug)) fail(`Duplicate slug inside NEW_BLOGS: "${nb.slug}"`);
    seenNewId.set(nb.id, true);
    seenNewSlug.set(nb.slug, true);
  }

  const blogsToAdd = NEW_BLOGS.map((nb, index) => {
    const content = materializeContent(nb, index);
    const { contentFile, ...rest } = nb;
    return { ...rest, content };
  });

  db.blogs.push(...blogsToAdd);
  saveBlogsJson(db);

  console.log(`Added ${NEW_BLOGS.length} blog(s) successfully.`);
}

main();







// {

//   "slug": "dr-preeti",
//   "uspTitle": "Best IVF Specialist in Kanpur <span class=\"cs_accent_color\">Dr. Preeti</span>",
//   "headerImage": "/assets/img/Doctor-Headers/preeti.webp",
//   "name": "Dr. Preeti",
//   "subtitle": "Advanced IVF & Fertility Specialist",
//   "image": "/assets/img/Doctors/preeti.jpg",
//   "description": [
//     "Dr. Preeti is a skilled and compassionate Gynaecologist & Obstetrician with more than 6 years of clinical experience, who specializes in high-risk pregnancies, laparoscopic & infertility gynaecological surgery. She is a gold medalist in MS obstetrics & Gynaecology as she combines scientific precision with a patient-centric, empathetic approach. Her professional journey includes successful tenures at well-reputed government medical colleges and hospitals across Uttar Pradesh, where she consistently delivered great surgical and patient care outcomes."
//   ],
//   "location": "Kanpur, Uttarpradesh",
//   "email": "drpreeti@seedsofinnocens.com",
//   "qualification": "MBBS, MS (Obstetrics & Gynecology), Certificate in Laparoscopic Surgery",
//   "specialization": "IVF, Ovulatory Disorders, PCOS Management",
//   "experience": "6+ Years",
//   "workExperience": [
//     "MBBS, MD (Obstetrics & Gynecology), Fellowship in Reproductive Medicine, Diploma and Training in Ultrasonography (USG), and Fellowship in Laparoscopy."
//   ],
//   "education": [
//     "MS – Obstetrics & Gynaecology (Gold Medalist) – UPUMS, Saifai",
//     "MBBS – GSVM Medical College, Kanpur",
//     "Diploma in Ultrasound Imaging – Bilmed, New Delhi",
//     "Certificate in Laparoscopic Surgery – Saidham Academy, Maharashtra",
//     "Critical Care in Obstetrics – Medvarsity"
//   ],
//   "awards": [
//     "Gold Medalist in MS Obstetrics and Gynaecology"
//   ],
//   "progressBars": [
//     {
//       "label": "IVF Procedures",
//       "percentage": 85
//     },
//     {
//       "label": "Patient Satisfaction",
//       "percentage": 92
//     },
//     {
//       "label": "Success Rate",
//       "percentage": 75
//     },
//     {
//       "label": "Clinical Expertise",
//       "percentage": 83
//     }
//   ],
//   "newSlug": "dr-preeti-ivf-specialist"
// },


// {
//   "name": "Dr. Preeti",
//   "subtitle": "IVF Specialist",
//   "image": "/assets/img/Doctors/preeti.jpg",
//   "experience": "8+ Years",
//   "location": "Kanpur-Uttarpradesh",
//   "slug": "dr-preeti"
// }