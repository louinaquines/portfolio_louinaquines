import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Event Sourcing in Practice: Patterns and Pitfalls",
  "description": "After implementing event sourcing in three production systems over five years, I share what actually works, what doesn't, and when you should (and shouldn't) reach for this pattern.",
  "event": "QCon San Francisco",
  "eventUrl": "https://qconsf.com",
  "date": "2025-11-15T00:00:00.000Z",
  "location": "San Francisco, CA",
  "type": "conference",
  "slides": "https://speakerdeck.com/example/event-sourcing-patterns",
  "video": "https://youtube.com/watch?v=example2",
  "duration": "50 min",
  "topics": ["event-sourcing", "architecture", "distributed-systems", "CQRS"],
  "featured": true
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

const url = "src/content/speaking/event-sourcing-patterns.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/speaking/event-sourcing-patterns.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/speaking/event-sourcing-patterns.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
