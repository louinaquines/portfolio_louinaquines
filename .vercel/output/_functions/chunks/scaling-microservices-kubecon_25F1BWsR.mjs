import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Scaling Microservices Without Losing Your Mind",
  "description": "Practical lessons from scaling a platform from 10 to 200+ microservices, covering patterns that worked, anti-patterns we discovered, and organizational changes that made it possible.",
  "event": "KubeCon Europe 2026",
  "eventUrl": "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/",
  "date": "2026-01-05T00:00:00.000Z",
  "location": "London, UK",
  "type": "conference",
  "slides": "https://speakerdeck.com/example/scaling-microservices",
  "video": "https://youtube.com/watch?v=example",
  "duration": "45 min",
  "topics": ["microservices", "kubernetes", "scaling", "observability"],
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

const url = "src/content/speaking/scaling-microservices-kubecon.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/speaking/scaling-microservices-kubecon.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/speaking/scaling-microservices-kubecon.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
