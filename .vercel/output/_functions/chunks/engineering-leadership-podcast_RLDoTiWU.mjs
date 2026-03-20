import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "From IC to Tech Lead: Lessons Learned",
  "description": "A candid conversation about the transition from individual contributor to technical leadership—the skills that transfer, the ones you need to develop, and common mistakes new tech leads make.",
  "event": "The Engineering Leadership Podcast",
  "eventUrl": "https://engineeringleadership.com/podcast",
  "date": "2025-02-10T00:00:00.000Z",
  "location": "Remote",
  "type": "podcast",
  "video": "https://youtube.com/watch?v=example3",
  "duration": "60 min",
  "topics": ["leadership", "career", "management", "tech-lead"],
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

const url = "src/content/speaking/engineering-leadership-podcast.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/speaking/engineering-leadership-podcast.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/speaking/engineering-leadership-podcast.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
