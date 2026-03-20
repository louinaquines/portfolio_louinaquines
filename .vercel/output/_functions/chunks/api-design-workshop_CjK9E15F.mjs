import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Designing APIs That Last: A Hands-On Workshop",
  "description": "A hands-on workshop where participants design, review, and iterate on API designs. Covers versioning strategies, error handling patterns, and building APIs developers actually want to use.",
  "event": "API World",
  "eventUrl": "https://apiworld.co",
  "date": "2024-06-25T00:00:00.000Z",
  "location": "Santa Clara, CA",
  "type": "workshop",
  "slides": "https://speakerdeck.com/example/api-design-workshop",
  "duration": "3 hours",
  "topics": ["api-design", "REST", "versioning", "developer-experience"],
  "featured": false
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

const url = "src/content/speaking/api-design-workshop.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/speaking/api-design-workshop.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/speaking/api-design-workshop.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
