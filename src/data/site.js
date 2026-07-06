export const navItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about/" },
  { key: "ventures", label: "Ventures", href: "/ventures/" },
  { key: "blog", label: "Blog", href: "/blog/" },
  { key: "contact", label: "Contact", href: "/contact/" },
];

export const stats = [
  { n: "25+", l: "Years of Experience" },
  { n: "40+", l: "Completed Projects" },
  { n: "1,000+", l: "Happy Families" },
  { n: "3M+", l: "Sq.Ft. Delivered" },
];

export const snbStats = [
  { n: "40+", l: "Projects" },
  { n: "9", l: "Localities" },
  { n: "3M+", l: "Sq.Ft." },
];

export const timeline = [
  { y: "1998", t: "Into the family practice", d: "Joined the second generation of a Mumbai real estate family, learning the craft on site." },
  { y: "2005", t: "First independent redevelopment", d: "Delivered an early redevelopment in Vile Parle — the start of a redevelopment-led approach." },
  { y: "2012", t: "Premium homes & bungalows", d: "Built out a portfolio of luxury residences, villas and bungalows across the western suburbs." },
  { y: "2018", t: "Commercial & mixed-use", d: "Extended into efficient commercial spaces and balanced mixed-use developments." },
  { y: "2024", t: "Karjat Township", d: "A 7.25-lakh sq.ft master-planned township — the practice's largest undertaking to date." },
];

export const values = [
  { i: "01", t: "Purpose", d: "Every space is shaped by how people live, work and move through it — not by trends or templates." },
  { i: "02", t: "Transparency", d: "Clear processes and careful planning bring honesty to complex redevelopment journeys." },
  { i: "03", t: "Longevity", d: "Materials, layouts and standards chosen to perform well long beyond handover." },
  { i: "04", t: "Integrity", d: "Consistency and accountability over promises — the basis of a trusted developer." },
];

export const verticals = [
  { k: "Residential", t: "Homes to live in", d: "Comfort, warmth and livability, designed around how families actually use a home." },
  { k: "Commercial", t: "Spaces that work", d: "Efficiency, smart layouts and thoughtful space planning for modern businesses." },
  { k: "Mixed-use", t: "The right balance", d: "Functionality, privacy and comfort held in proportion within a single development." },
  { k: "Redevelopment", t: "A trusted partner", d: "Vision, transparency and disciplined execution for society redevelopment." },
];

const tagOngoing = { status: "Ongoing", tagBg: "var(--accent)", tagFg: "#fff" };
const tagDone = { status: "Completed", tagBg: "var(--ink)", tagFg: "var(--bg)" };

export const projects = [
  { name: "Signature", loc: "Hanuman Road, Vile Parle East", area: "98,000 sq.ft", ...tagOngoing },
  { name: "Sagar Avenue", loc: "Lalubhai Park Road, Andheri West", area: "65,000 sq.ft", ...tagOngoing },
  { name: "Karjat Township", loc: "Karjat", area: "7,25,000 sq.ft", ...tagOngoing },
  { name: "Sagar Imperial", loc: "Dixit Road, Vile Parle East", area: "35,000 sq.ft", ...tagDone },
  { name: "Goregaon One", loc: "MG Road, Goregaon West", area: "54,000 sq.ft", ...tagOngoing },
  { name: "SNB Villa", loc: "Mahant Road, Vile Parle East", area: "30,500 sq.ft", ...tagOngoing },
  { name: "Goldenleaf", loc: "Golden Valley, Lonavala", area: "1,20,000 sq.ft", ...tagDone },
  { name: "Sargam", loc: "Dixit Road, Vile Parle East", area: "45,000 sq.ft", ...tagDone },
  { name: "Nayak Bungalow", loc: "MG Road, Vile Parle East", area: "52,000 sq.ft", ...tagDone },
];

export const allPosts = [
  { cat: "Redevelopment", title: "Why redevelopment is Mumbai\u2019s most honest form of growth", excerpt: "Density done right is not about squeezing in more \u2014 it is about giving existing residents a better life on the same land.", meta: "Mar 2026 \u00b7 6 min read" },
  { cat: "Design", title: "Designing for how families actually live", excerpt: "The brief that matters is rarely on paper. It is in the way a kitchen meets a living room, and where the light lands at 6pm.", meta: "Feb 2026 \u00b7 5 min read" },
  { cat: "Leadership", title: "The second-generation advantage in a family business", excerpt: "Inheriting a practice is not inheriting a playbook. It is inheriting relationships \u2014 and the responsibility to renew them.", meta: "Feb 2026 \u00b7 7 min read" },
  { cat: "Real Estate", title: "Reading a Mumbai micro-market before you build", excerpt: "Two streets apart, the same square foot tells a different story. Here is how I learned to listen to a locality.", meta: "Jan 2026 \u00b7 6 min read" },
  { cat: "Design", title: "Longevity over trend: materials that age well", excerpt: "A building is judged not on handover day, but ten monsoons later. That changes every material decision.", meta: "Jan 2026 \u00b7 4 min read" },
  { cat: "Redevelopment", title: "Transparency as a redevelopment strategy", excerpt: "When residents can see the process, trust compounds \u2014 and timelines get shorter for everyone involved.", meta: "Dec 2025 \u00b7 5 min read" },
];

export const press = ["ET Realty", "Mumbai Mirror", "CREDAI", "NAREDCO", "Property Today"];

export const site = {
  name: "Sagar Barot",
  tagline: "Experience the Best · Expect the Next",
  subtitle: "Founder & Managing Director — SNB Group",
  email: "snbgroupofcompanies@gmail.com",
  phone: "022 3521 7594",
  address: "Zee Corporate Park, E-Wing, 1st Floor, Office No. 12, MG Road, Vile Parle East, Mumbai – 400 057",
  instagram: "https://www.instagram.com/snb_group_of_companies/",
  year: 2026,
};
