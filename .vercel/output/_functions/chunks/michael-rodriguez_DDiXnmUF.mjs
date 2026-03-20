import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "name": "Michael Rodriguez",
  "role": "Staff Engineer",
  "company": "DataFlow",
  "relationship": "Worked together on Platform team, 2021-2024",
  "quote": "His documentation on architectural decisions saved us so much time during recent incidents. Erland has such a clear approach to decision-making that I’ve actually started adopting his methods in my own daily workflow.",
  "linkedin": "https://linkedin.com/in/michaelrodriguez",
  "featured": true,
  "date": "2024-09-28T00:00:00.000Z"
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

const url = "src/content/testimonials/michael-rodriguez.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/testimonials/michael-rodriguez.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/testimonials/michael-rodriguez.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
