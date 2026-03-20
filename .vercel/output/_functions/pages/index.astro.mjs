import { e as createAstro, c as createComponent, d as renderComponent, f as renderScript, r as renderTemplate, b as addAttribute, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_ZuFn58mt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$SEO } from '../chunks/SEO_Cl0JGbGY.mjs';
import { $ as $$StructuredData } from '../chunks/StructuredData_DNM7clt9.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bmk3BJ6x.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BRxDa4G8.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const profileImage = new Proxy({"src":"/_astro/profile1.Bm4jW6Ec.jpg","width":864,"height":1184,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/laila/MyNewPortfolio/case/src/assets/profile1.jpg";
							}
							
							return target[name];
						}
					});

const photo = new Proxy({"src":"/_astro/profile.gMC-nE1L.jpg","width":951,"height":960,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/laila/MyNewPortfolio/case/src/assets/profile.jpg";
							}
							
							return target[name];
						}
					});

const photo2 = new Proxy({"src":"/_astro/pic2.C-yo22zO.jpg","width":1536,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/laila/MyNewPortfolio/case/src/assets/pic2.jpg";
							}
							
							return target[name];
						}
					});

const photo3 = new Proxy({"src":"/_astro/pic3.AYgwZpFc.jpg","width":1242,"height":1745,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/laila/MyNewPortfolio/case/src/assets/pic3.jpg";
							}
							
							return target[name];
						}
					});

const photo4 = new Proxy({"src":"/_astro/pic4.Cfym3qp0.jpg","width":1152,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/laila/MyNewPortfolio/case/src/assets/pic4.jpg";
							}
							
							return target[name];
						}
					});

const photo5 = new Proxy({"src":"/_astro/pic1.Zf3dAurB.jpg","width":1536,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/laila/MyNewPortfolio/case/src/assets/pic1.jpg";
							}
							
							return target[name];
						}
					});

const photo6 = new Proxy({"src":"/_astro/pic5.CPSE3Vpk.jpg","width":1536,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/laila/MyNewPortfolio/case/src/assets/pic5.jpg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allProjects = await getCollection("projects");
  const featuredProjects = allProjects.filter((p) => p.data.featured === true).sort((a, b) => (a.data.order || 999) - (b.data.order || 999)).slice(0, 4);
  const allProjectsSorted = allProjects.sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
  const techStack = {
    Frontend: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Astro", icon: "https://cdn.simpleicons.org/astro/FF5D01" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" }
    ],
    Backend: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/fastapi/05998B" }
    ],
    Database: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" }
    ],
    Tools: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" }
    ]
  };
  const galleryImages = [
    { src: photo, alt: "Photo 1" },
    { src: photo2, alt: "Photo 2" },
    { src: photo3, alt: "Photo 3" },
    { src: photo4, alt: "Photo 4" },
    { src: photo5, alt: "Photo 5" },
    { src: photo6, alt: "Photo 6" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", " ", " ", '<main class="page" data-astro-cid-j7pv25f6> <!-- \u2500\u2500 PAGE LOADER \u2500\u2500 --> <div id="page-loader" class="page-loader" data-astro-cid-j7pv25f6> <div class="loader-content" data-astro-cid-j7pv25f6> <div class="loader-logo" data-astro-cid-j7pv25f6>LN</div> <div class="loader-bar" data-astro-cid-j7pv25f6><div class="loader-bar-fill" data-astro-cid-j7pv25f6></div></div> </div> </div> <!-- \u2500\u2500 PROFILE HEADER \u2500\u2500 --> <header class="profile-header reveal reveal-up" data-astro-cid-j7pv25f6> <div class="profile-header-inner" data-astro-cid-j7pv25f6> ', ` <div class="profile-info" data-astro-cid-j7pv25f6> <div class="profile-name-row" data-astro-cid-j7pv25f6> <h1 class="profile-name" data-astro-cid-j7pv25f6>Loui Jay Naquines</h1> </div> <p class="profile-location" data-astro-cid-j7pv25f6>Mandaue City, Cebu</p> <p class="profile-role" data-astro-cid-j7pv25f6>Full Stack Developer \xB7 IT Student</p> <div class="profile-actions" data-astro-cid-j7pv25f6> <a href="/resume.pdf" download class="btn-primary" data-astro-cid-j7pv25f6>\u2B07 Download Resume</a> <button id="open-schedule-modal" class="btn-secondary btn-schedule-trigger" data-astro-cid-j7pv25f6>\u{1F4C5} Schedule a Call</button> </div> </div> </div> </header> <!-- \u2500\u2500 MAIN GRID \u2500\u2500 --> <div class="main-grid" data-astro-cid-j7pv25f6> <!-- LEFT COLUMN --> <div class="col-left" data-astro-cid-j7pv25f6> <!-- ABOUT --> <section id="about" class="card reveal reveal-up" style="scroll-margin-top:5rem; animation-delay: 0.1s" data-astro-cid-j7pv25f6> <h2 class="card-title" data-astro-cid-j7pv25f6><svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><circle cx="12" cy="8" r="4" data-astro-cid-j7pv25f6></circle><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" data-astro-cid-j7pv25f6></path></svg>About</h2> <p data-astro-cid-j7pv25f6>
I'm a Information Technology student passionate about building end-to-end web applications. I don't just ship features \u2014 I think about architecture, trade-offs, and long-term maintainability.
</p> <p data-astro-cid-j7pv25f6>
Currently looking for a junior developer role where I can contribute to real products and grow alongside experienced engineers. Based in Cebu, open to remote.
</p> </section> <!-- TECH STACK --> <section id="stack" class="card reveal reveal-up" style="scroll-margin-top:5rem; animation-delay:0.15s" data-astro-cid-j7pv25f6> <div class="card-title-row" data-astro-cid-j7pv25f6> <h2 class="card-title" data-astro-cid-j7pv25f6><svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><circle cx="12" cy="12" r="3" data-astro-cid-j7pv25f6></circle><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" data-astro-cid-j7pv25f6></path></svg>Tech Stack</h2> <button class="view-all" id="open-stack-modal" data-astro-cid-j7pv25f6>View All &rsaquo;</button> </div> `, ' </section> <!-- RECENT PROJECTS --> <section class="card reveal reveal-up" style="animation-delay:0.2s" data-astro-cid-j7pv25f6> <div class="card-title-row" data-astro-cid-j7pv25f6> <h2 class="card-title" data-astro-cid-j7pv25f6><svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-j7pv25f6></path></svg>Recent Projects</h2> <button class="view-all" id="open-projects-modal" data-astro-cid-j7pv25f6>View All &rsaquo;</button> </div> <div class="projects-grid" data-astro-cid-j7pv25f6> ', ' </div> </section> <!-- GALLERY --> <section class="card reveal reveal-up" style="animation-delay:0.25s" data-astro-cid-j7pv25f6> <h2 class="card-title" data-astro-cid-j7pv25f6><svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><rect x="3" y="3" width="18" height="18" rx="2" data-astro-cid-j7pv25f6></rect><circle cx="8.5" cy="8.5" r="1.5" data-astro-cid-j7pv25f6></circle><path d="M21 15l-5-5L5 21" data-astro-cid-j7pv25f6></path></svg>Gallery</h2> <p class="card-sub" data-astro-cid-j7pv25f6>Some photos of me.</p> <div class="gallery-grid" data-astro-cid-j7pv25f6> ', ' </div> </section> </div> <!-- RIGHT COLUMN --> <div class="col-right" data-astro-cid-j7pv25f6> <!-- EXPERIENCE --> <section class="card reveal reveal-left" style="animation-delay:0.1s" data-astro-cid-j7pv25f6> <div class="card-title-row" data-astro-cid-j7pv25f6> <h2 class="card-title" data-astro-cid-j7pv25f6><svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><rect x="2" y="7" width="20" height="14" rx="2" data-astro-cid-j7pv25f6></rect><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" data-astro-cid-j7pv25f6></path></svg>Experience</h2> <button class="view-all" id="open-experience-modal" data-astro-cid-j7pv25f6>View All &rsaquo;</button> </div> <div class="timeline" data-astro-cid-j7pv25f6> <div class="timeline-item" data-astro-cid-j7pv25f6> <div class="timeline-dot active" data-astro-cid-j7pv25f6></div> <div class="timeline-body" data-astro-cid-j7pv25f6> <span class="timeline-year" data-astro-cid-j7pv25f6>2024 \u2014 Present</span> <strong data-astro-cid-j7pv25f6>Freelance Full Stack Developer</strong> <p data-astro-cid-j7pv25f6>Building and deploying web solutions for local clients.</p> </div> </div> <div class="timeline-item" data-astro-cid-j7pv25f6> <div class="timeline-dot" data-astro-cid-j7pv25f6></div> <div class="timeline-body" data-astro-cid-j7pv25f6> <span class="timeline-year" data-astro-cid-j7pv25f6>2023 \u2014 Present</span> <strong data-astro-cid-j7pv25f6>IT Student</strong> <p data-astro-cid-j7pv25f6>Studying algorithms, system design, and software engineering.</p> </div> </div> </div> </section> <!-- GOALS --> <section class="card reveal reveal-left" style="animation-delay:0.15s" data-astro-cid-j7pv25f6> <h2 class="card-title" data-astro-cid-j7pv25f6><svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><circle cx="12" cy="12" r="10" data-astro-cid-j7pv25f6></circle><circle cx="12" cy="12" r="6" data-astro-cid-j7pv25f6></circle><circle cx="12" cy="12" r="2" data-astro-cid-j7pv25f6></circle></svg>Goals</h2> <div class="goals-list" data-astro-cid-j7pv25f6> <div class="goal-item" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Land My First Dev Role</strong> <p data-astro-cid-j7pv25f6>Looking for a junior position to contribute, learn, and grow fast.</p> </div> <div class="goal-item" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Ship a SaaS Product</strong> <p data-astro-cid-j7pv25f6>Take an idea from zero to paying users \u2014 owning the full stack.</p> </div> <div class="goal-item" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Go Deeper on System Design</strong> <p data-astro-cid-j7pv25f6>Understand how systems scale, where they break, and how to build for longevity.</p> </div> <div class="goal-item" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Build in Public</strong> <p data-astro-cid-j7pv25f6>Document projects and decisions openly to track growth and help others.</p> </div> </div> </section> <!-- CONTACT & SOCIALS --> <section id="contact" class="card reveal reveal-left" style="scroll-margin-top:5rem; animation-delay:0.2s" data-astro-cid-j7pv25f6> <h2 class="card-title" data-astro-cid-j7pv25f6>Contact & Socials</h2> <h3 class="contact-group-title" data-astro-cid-j7pv25f6>Contact</h3> <ul class="contact-list" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6> <span class="contact-icon" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.15a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.6.63A2 2 0 0 1 22 16.92z" data-astro-cid-j7pv25f6></path></svg> </span> <div data-astro-cid-j7pv25f6> <span class="contact-label" data-astro-cid-j7pv25f6>Phone</span> <a href="tel:+639XXXXXXXXX" class="contact-value" data-astro-cid-j7pv25f6>+63 9XX XXX XXXX</a> </div> </li> <li data-astro-cid-j7pv25f6> <span class="contact-icon" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><rect x="2" y="4" width="20" height="16" rx="2" data-astro-cid-j7pv25f6></rect><path d="m22 7-10 7L2 7" data-astro-cid-j7pv25f6></path></svg> </span> <div data-astro-cid-j7pv25f6> <span class="contact-label" data-astro-cid-j7pv25f6>Email</span> <a href="mailto:louijaynaquines@email.com" class="contact-value" data-astro-cid-j7pv25f6>louijaynaquines@email.com</a> </div> </li> <li data-astro-cid-j7pv25f6> <span class="contact-icon" data-astro-cid-j7pv25f6> <img src="https://cdn.simpleicons.org/messenger/0084FF" width="15" height="15" alt="Messenger" data-astro-cid-j7pv25f6> </span> <div data-astro-cid-j7pv25f6> <span class="contact-label" data-astro-cid-j7pv25f6>Messenger</span> <a href="https://m.me/yourusername" target="_blank" rel="noopener" class="contact-value" data-astro-cid-j7pv25f6>m.me/yourusername</a> </div> </li> </ul> <ul class="contact-list" style="margin-top:1.5rem" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6> <span class="contact-icon" data-astro-cid-j7pv25f6> <img src="https://cdn.simpleicons.org/facebook/1877F2" width="15" height="15" alt="Facebook" data-astro-cid-j7pv25f6> </span> <div data-astro-cid-j7pv25f6> <span class="contact-label" data-astro-cid-j7pv25f6>Facebook</span> <a href="https://facebook.com/yourusername" target="_blank" rel="noopener" class="contact-value" data-astro-cid-j7pv25f6>facebook.com/yourusername</a> </div> </li> <li data-astro-cid-j7pv25f6> <span class="contact-icon" data-astro-cid-j7pv25f6> <img src="https://cdn.simpleicons.org/instagram/E4405F" width="15" height="15" alt="Instagram" data-astro-cid-j7pv25f6> </span> <div data-astro-cid-j7pv25f6> <span class="contact-label" data-astro-cid-j7pv25f6>Instagram</span> <a href="https://instagram.com/yourusername" target="_blank" rel="noopener" class="contact-value" data-astro-cid-j7pv25f6>@yourusername</a> </div> </li> <li data-astro-cid-j7pv25f6> <span class="contact-icon" data-astro-cid-j7pv25f6> <img src="https://cdn.simpleicons.org/linkedin/0A66C2" width="15" height="15" alt="LinkedIn" data-astro-cid-j7pv25f6> </span> <div data-astro-cid-j7pv25f6> <span class="contact-label" data-astro-cid-j7pv25f6>LinkedIn</span> <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener" class="contact-value" data-astro-cid-j7pv25f6>linkedin.com/in/yourusername</a> </div> </li> <li data-astro-cid-j7pv25f6> <span class="contact-icon" data-astro-cid-j7pv25f6> <img src="https://cdn.simpleicons.org/github/000000" width="15" height="15" alt="GitHub" data-astro-cid-j7pv25f6> </span> <div data-astro-cid-j7pv25f6> <span class="contact-label" data-astro-cid-j7pv25f6>GitHub</span> <a href="https://github.com/yourusername" target="_blank" rel="noopener" class="contact-value" data-astro-cid-j7pv25f6>github.com/yourusername</a> </div> </li> </ul> </section> </div> </div> </main>  <div class="modal-overlay" id="stack-modal" data-astro-cid-j7pv25f6> <div class="modal-backdrop" id="stack-modal-backdrop" data-astro-cid-j7pv25f6></div> <div class="modal-panel" data-astro-cid-j7pv25f6> <div class="modal-header" data-astro-cid-j7pv25f6> <h2 class="modal-title" data-astro-cid-j7pv25f6> <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><circle cx="12" cy="12" r="3" data-astro-cid-j7pv25f6></circle><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" data-astro-cid-j7pv25f6></path></svg>\nFull Tech Stack\n</h2> <button class="modal-close" id="close-stack-modal" aria-label="Close" data-astro-cid-j7pv25f6>&times;</button> </div> <div class="modal-body" data-astro-cid-j7pv25f6> ', ' </div> </div> </div>  <div class="modal-overlay" id="experience-modal" data-astro-cid-j7pv25f6> <div class="modal-backdrop" id="experience-modal-backdrop" data-astro-cid-j7pv25f6></div> <div class="modal-panel modal-panel--narrow" data-astro-cid-j7pv25f6> <div class="modal-header" data-astro-cid-j7pv25f6> <h2 class="modal-title" data-astro-cid-j7pv25f6> <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><rect x="2" y="7" width="20" height="14" rx="2" data-astro-cid-j7pv25f6></rect><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" data-astro-cid-j7pv25f6></path></svg>\nFull Experience\n</h2> <button class="modal-close" id="close-experience-modal" aria-label="Close" data-astro-cid-j7pv25f6>&times;</button> </div> <div class="modal-body" data-astro-cid-j7pv25f6> <div class="timeline" data-astro-cid-j7pv25f6> <div class="timeline-item" data-astro-cid-j7pv25f6> <div class="timeline-dot active" data-astro-cid-j7pv25f6></div> <div class="timeline-body" data-astro-cid-j7pv25f6> <span class="timeline-year" data-astro-cid-j7pv25f6>2024 \u2014 Present</span> <strong data-astro-cid-j7pv25f6>Freelance Full Stack Developer</strong> <p data-astro-cid-j7pv25f6>Building and deploying web solutions for local clients. Working on real-world projects end-to-end, from design to deployment.</p> </div> </div> <div class="timeline-item" data-astro-cid-j7pv25f6> <div class="timeline-dot" data-astro-cid-j7pv25f6></div> <div class="timeline-body" data-astro-cid-j7pv25f6> <span class="timeline-year" data-astro-cid-j7pv25f6>2023 \u2014 Present</span> <strong data-astro-cid-j7pv25f6>IT Student</strong> <p data-astro-cid-j7pv25f6>Studying algorithms, system design, and software engineering principles. Applying academic knowledge to real projects.</p> </div> </div> <div class="timeline-item" data-astro-cid-j7pv25f6> <div class="timeline-dot" data-astro-cid-j7pv25f6></div> <div class="timeline-body" data-astro-cid-j7pv25f6> <span class="timeline-year" data-astro-cid-j7pv25f6>2022</span> <strong data-astro-cid-j7pv25f6>Started Learning Development</strong> <p data-astro-cid-j7pv25f6>Began self-studying web development \u2014 HTML, CSS, JavaScript, and basic backend concepts.</p> </div> </div> </div> </div> </div> </div>  <div class="modal-overlay" id="projects-modal" data-astro-cid-j7pv25f6> <div class="modal-backdrop" id="modal-backdrop" data-astro-cid-j7pv25f6></div> <div class="modal-panel" data-astro-cid-j7pv25f6> <div class="modal-header" data-astro-cid-j7pv25f6> <h2 class="modal-title" data-astro-cid-j7pv25f6> <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-j7pv25f6></path></svg>\nAll Projects\n</h2> <button class="modal-close" id="close-projects-modal" aria-label="Close" data-astro-cid-j7pv25f6>&times;</button> </div> <div class="modal-body" data-astro-cid-j7pv25f6> ', ` </div> </div> </div>  <div class="modal-overlay" id="schedule-modal" data-astro-cid-j7pv25f6> <div class="modal-backdrop" id="schedule-modal-backdrop" data-astro-cid-j7pv25f6></div> <div class="modal-panel modal-panel--schedule" data-astro-cid-j7pv25f6> <div class="modal-header" data-astro-cid-j7pv25f6> <h2 class="modal-title" data-astro-cid-j7pv25f6> <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><rect x="3" y="4" width="18" height="18" rx="2" data-astro-cid-j7pv25f6></rect><line x1="16" y1="2" x2="16" y2="6" data-astro-cid-j7pv25f6></line><line x1="8" y1="2" x2="8" y2="6" data-astro-cid-j7pv25f6></line><line x1="3" y1="10" x2="21" y2="10" data-astro-cid-j7pv25f6></line></svg>
Schedule a Call
</h2> <button class="modal-close" id="close-schedule-modal" aria-label="Close" data-astro-cid-j7pv25f6>&times;</button> </div> <div class="modal-body" data-astro-cid-j7pv25f6> <p class="sc-desc" data-astro-cid-j7pv25f6>Have a project in mind or want to discuss a collaboration? Book a quick call and we can talk about your idea, goals, and how I can help.</p> <div class="sc-layout" data-astro-cid-j7pv25f6> <!-- LEFT: info --> <div class="sc-info" data-astro-cid-j7pv25f6> <div class="sc-info-block" data-astro-cid-j7pv25f6> <h3 class="sc-block-title" data-astro-cid-j7pv25f6>What we can talk about</h3> <ul class="sc-list" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>Your project or product idea</li> <li data-astro-cid-j7pv25f6>Development requirements</li> <li data-astro-cid-j7pv25f6>Timeline and next steps</li> </ul> </div> <div class="sc-info-block" data-astro-cid-j7pv25f6> <h3 class="sc-block-title" data-astro-cid-j7pv25f6>Call details</h3> <ul class="sc-list sc-list--details" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6><span class="sc-detail-icon" data-astro-cid-j7pv25f6>\u23F1</span> Duration: 30 minutes</li> <li data-astro-cid-j7pv25f6><span class="sc-detail-icon" data-astro-cid-j7pv25f6>\u{1F4F9}</span> Platform: Google Meet</li> </ul> </div> </div> <!-- RIGHT: form --> <form class="sc-form" id="schedule-form" novalidate data-astro-cid-j7pv25f6> <div class="sc-field" data-astro-cid-j7pv25f6> <label class="sc-label" for="sc-name" data-astro-cid-j7pv25f6>Your Name</label> <input class="sc-input" type="text" id="sc-name" placeholder="Juan dela Cruz" required data-astro-cid-j7pv25f6> </div> <div class="sc-field" data-astro-cid-j7pv25f6> <label class="sc-label" for="sc-email" data-astro-cid-j7pv25f6>Email</label> <input class="sc-input" type="email" id="sc-email" placeholder="you@example.com" required data-astro-cid-j7pv25f6> </div> <div class="sc-field" data-astro-cid-j7pv25f6> <label class="sc-label" for="sc-details" data-astro-cid-j7pv25f6>Project details <span class="sc-optional" data-astro-cid-j7pv25f6>(optional)</span></label> <textarea class="sc-input sc-textarea" id="sc-details" placeholder="Brief description of your project or what you'd like to discuss..." rows="3" data-astro-cid-j7pv25f6></textarea> </div> <div class="sc-field" data-astro-cid-j7pv25f6> <label class="sc-label" data-astro-cid-j7pv25f6>\u{1F4C5} Choose Date & Time</label> <div class="sc-datetime-row" data-astro-cid-j7pv25f6> <div class="sc-field" data-astro-cid-j7pv25f6> <label class="sc-label sc-label--sub" for="sc-date" data-astro-cid-j7pv25f6>Date</label> <input class="sc-input" type="date" id="sc-date" required data-astro-cid-j7pv25f6> </div> <div class="sc-field" data-astro-cid-j7pv25f6> <label class="sc-label sc-label--sub" for="sc-time" data-astro-cid-j7pv25f6>Time</label> <input class="sc-input" type="time" id="sc-time" required data-astro-cid-j7pv25f6> </div> </div> </div> <button type="submit" class="sc-submit" id="schedule-submit" data-astro-cid-j7pv25f6>Schedule Call</button> <p class="sc-success" id="sc-success" style="display:none" data-astro-cid-j7pv25f6>\u2705 Request sent! I'll confirm via email within 24 hours.</p> <p class="sc-error" id="sc-error" style="display:none" data-astro-cid-j7pv25f6>Something went wrong. Email me at <a href="mailto:louinaquines@gmail.com" data-astro-cid-j7pv25f6>louinaquines@gmail.com</a></p> </form> </div> </div> </div> </div>  <div class="lightbox" id="lightbox" data-astro-cid-j7pv25f6> <div class="lightbox-backdrop" id="lightbox-backdrop" data-astro-cid-j7pv25f6></div> <button class="lightbox-close" id="lightbox-close" aria-label="Close" data-astro-cid-j7pv25f6>&times;</button> <button class="lightbox-prev" id="lightbox-prev" aria-label="Previous" data-astro-cid-j7pv25f6>&#8249;</button> <button class="lightbox-next" id="lightbox-next" aria-label="Next" data-astro-cid-j7pv25f6>&#8250;</button> <div class="lightbox-content" data-astro-cid-j7pv25f6> <img src="" alt="" class="lightbox-img" id="lightbox-img" data-astro-cid-j7pv25f6> </div> </div> <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"><\/script> `])), renderComponent($$result2, "StructuredData", $$StructuredData, { "type": "WebSite", "data-astro-cid-j7pv25f6": true }), renderComponent($$result2, "StructuredData", $$StructuredData, { "type": "Person", "data-astro-cid-j7pv25f6": true }), maybeRenderHead(), renderComponent($$result2, "Image", $$Image, { "src": profileImage, "alt": "Loui Jay Naquines", "class": "avatar", "data-astro-cid-j7pv25f6": true }), Object.entries(techStack).map(([category, tools]) => renderTemplate`<div class="stack-group" data-astro-cid-j7pv25f6> <h3 class="stack-category" data-astro-cid-j7pv25f6>${category}</h3> <div class="stack-tags" data-astro-cid-j7pv25f6> ${tools.map((tool) => renderTemplate`<span class="tag" data-astro-cid-j7pv25f6> <img${addAttribute(tool.icon, "src")}${addAttribute(tool.name, "alt")} class="tag-icon" width="13" height="13" loading="lazy" data-astro-cid-j7pv25f6> ${tool.name} </span>`)} </div> </div>`), featuredProjects.length > 0 ? featuredProjects.map((project) => renderTemplate`<a${addAttribute(`/projects/${project.id}`, "href")} class="project-card" data-astro-cid-j7pv25f6> <span class="project-role" data-astro-cid-j7pv25f6>${project.data.role}</span> <h3 class="project-title" data-astro-cid-j7pv25f6>${project.data.title}</h3> <p class="project-desc" data-astro-cid-j7pv25f6>${project.data.outcomeSummary}</p> </a>`) : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <div class="project-card" data-astro-cid-j7pv25f6> <span class="project-role" data-astro-cid-j7pv25f6>Full Stack</span> <h3 class="project-title" data-astro-cid-j7pv25f6>Project One</h3> <p class="project-desc" data-astro-cid-j7pv25f6>Replace with your project description.</p> </div> <div class="project-card" data-astro-cid-j7pv25f6> <span class="project-role" data-astro-cid-j7pv25f6>Frontend</span> <h3 class="project-title" data-astro-cid-j7pv25f6>Project Two</h3> <p class="project-desc" data-astro-cid-j7pv25f6>Replace with your project description.</p> </div> <div class="project-card" data-astro-cid-j7pv25f6> <span class="project-role" data-astro-cid-j7pv25f6>Backend</span> <h3 class="project-title" data-astro-cid-j7pv25f6>Project Three</h3> <p class="project-desc" data-astro-cid-j7pv25f6>Replace with your project description.</p> </div> <div class="project-card" data-astro-cid-j7pv25f6> <span class="project-role" data-astro-cid-j7pv25f6>Full Stack</span> <h3 class="project-title" data-astro-cid-j7pv25f6>Project Four</h3> <p class="project-desc" data-astro-cid-j7pv25f6>Replace with your project description.</p> </div> ` })}`, galleryImages.map((img, i) => renderTemplate`<div class="gallery-item"${addAttribute(i, "data-index")} data-astro-cid-j7pv25f6> ${img.src ? renderTemplate`<img${addAttribute(img.src.src ?? img.src, "src")}${addAttribute(img.alt, "alt")} class="gallery-img" loading="lazy" data-astro-cid-j7pv25f6>` : renderTemplate`<div class="gallery-placeholder" data-astro-cid-j7pv25f6><span data-astro-cid-j7pv25f6>📷</span></div>`} </div>`), Object.entries(techStack).map(([category, tools]) => renderTemplate`<div class="modal-stack-group" data-astro-cid-j7pv25f6> <h3 class="modal-stack-category" data-astro-cid-j7pv25f6>${category}</h3> <div class="stack-tags" data-astro-cid-j7pv25f6> ${tools.map((tool) => renderTemplate`<span class="tag" data-astro-cid-j7pv25f6> <img${addAttribute(tool.icon, "src")}${addAttribute(tool.name, "alt")} class="tag-icon" width="13" height="13" loading="lazy" data-astro-cid-j7pv25f6> ${tool.name} </span>`)} </div> </div>`), allProjectsSorted.length > 0 ? renderTemplate`<div class="modal-projects-grid" data-astro-cid-j7pv25f6> ${allProjectsSorted.map((project) => renderTemplate`<a${addAttribute(`/projects/${project.id}`, "href")} class="modal-project-card" data-astro-cid-j7pv25f6> <span class="project-role" data-astro-cid-j7pv25f6>${project.data.role}</span> <h3 class="project-title" data-astro-cid-j7pv25f6>${project.data.title}</h3> <p class="project-desc" data-astro-cid-j7pv25f6>${project.data.outcomeSummary}</p> </a>`)} </div>` : renderTemplate`<div class="modal-empty" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>No projects yet. Add your projects to the <code data-astro-cid-j7pv25f6>projects</code> content collection.</p> </div>`), "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SEO", $$SEO, { "slot": "head", "title": "Loui Jay Naquines \u2014 Full Stack Developer", "description": "Full stack developer and CS student based in Mandaue City, Cebu.", "type": "website", "noSuffix": true, "data-astro-cid-j7pv25f6": true })}` })} ${renderScript($$result, "C:/Users/laila/MyNewPortfolio/case/src/pages/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/laila/MyNewPortfolio/case/src/pages/index.astro", void 0);

const $$file = "C:/Users/laila/MyNewPortfolio/case/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
