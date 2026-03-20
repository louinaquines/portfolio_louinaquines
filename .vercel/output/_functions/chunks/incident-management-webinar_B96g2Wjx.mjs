import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Building a Blameless Incident Culture",
  "description": "How to build an incident response culture that learns from failures instead of assigning blame. Practical frameworks for running effective postmortems and creating lasting improvements.",
  "event": "PagerDuty Summit Webinar Series",
  "eventUrl": "https://pagerduty.com/summit",
  "date": "2023-12-04T00:00:00.000Z",
  "location": "Remote",
  "type": "webinar",
  "video": "https://youtube.com/watch?v=example4",
  "duration": "45 min",
  "topics": ["incident-management", "SRE", "culture", "postmortems"],
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

const url = "src/content/speaking/incident-management-webinar.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/speaking/incident-management-webinar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/speaking/incident-management-webinar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
