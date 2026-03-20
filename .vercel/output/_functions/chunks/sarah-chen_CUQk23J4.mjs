import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "name": "Sarah Chen",
  "role": "VP of Engineering",
  "company": "TechCorp",
  "relationship": "Direct manager, 2024-2026",
  "quote": "Erland is easily one of the most thoughtful engineers I've worked with. He doesn't just solve problems; he documents the 'why' behind them, which has helped our team scale much faster and avoid repeating past mistakes.",
  "linkedin": "https://linkedin.com/in/sarahchen",
  "featured": true,
  "date": "2026-01-05T00:00:00.000Z"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/testimonials/sarah-chen.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/testimonials/sarah-chen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/testimonials/sarah-chen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
