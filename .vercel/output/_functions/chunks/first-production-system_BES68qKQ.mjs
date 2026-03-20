import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "date": "2020-03-15T00:00:00.000Z",
  "title": "Shipped First Production System",
  "type": "milestone",
  "description": "Deployed my first production system that handled real user traffic. A simple REST API for managing user profiles, but it taught me the difference between code that works on my laptop and code that works in production.",
  "skills": ["Node.js", "PostgreSQL", "Docker", "AWS"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-i-learned",
    "text": "What I Learned"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "what-i-learned",
      children: "What I Learned"
    }), "\n", createVNode(_components.p, {
      children: "This was a humbling experience. My code worked perfectly in development, but production revealed issues I hadn’t considered:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Database connection pooling and timeouts"
      }), "\n", createVNode(_components.li, {
        children: "Proper error handling and logging"
      }), "\n", createVNode(_components.li, {
        children: "Monitoring and alerting"
      }), "\n", createVNode(_components.li, {
        children: "Graceful shutdown and zero-downtime deploys"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The first production incident (a memory leak) was stressful but taught me more than months of tutorials ever could."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/journey/first-production-system.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/first-production-system.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/first-production-system.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
