import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Testing Strategies for the Real World",
  "description": "A practical look at testing strategies that balance confidence with development speed—when to write unit tests vs integration tests, and patterns for testing distributed systems.",
  "event": "Seattle Software Crafters Meetup",
  "eventUrl": "https://meetup.com/seattle-software-crafters",
  "date": "2024-04-18T00:00:00.000Z",
  "location": "Seattle, WA",
  "type": "meetup",
  "slides": "https://speakerdeck.com/example/testing-strategies",
  "duration": "30 min",
  "topics": ["testing", "TDD", "integration-testing", "best-practices"],
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

const url = "src/content/speaking/local-meetup-testing.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/speaking/local-meetup-testing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/speaking/local-meetup-testing.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
