import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "date": "2021-09-20T00:00:00.000Z",
  "title": "First Open Source Contribution",
  "type": "milestone",
  "description": "Submitted my first pull request to a popular open source project. It was a small documentation fix, but it opened the door to understanding how large-scale collaborative software development works.",
  "skills": ["Git", "Open Source", "Technical Writing", "Code Review"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-story",
    "text": "The Story"
  }, {
    "depth": 2,
    "slug": "what-surprised-me",
    "text": "What Surprised Me"
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
      id: "the-story",
      children: "The Story"
    }), "\n", createVNode(_components.p, {
      children: "I was using a library at work and found a confusing section in the documentation. Instead of just complaining, I decided to fix it myself."
    }), "\n", createVNode(_components.p, {
      children: "The PR was tiny—maybe 20 lines of markdown—but the process taught me:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "How to read and follow contribution guidelines"
      }), "\n", createVNode(_components.li, {
        children: "The importance of clear commit messages"
      }), "\n", createVNode(_components.li, {
        children: "How maintainers think about changes"
      }), "\n", createVNode(_components.li, {
        children: "The value of good documentation"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "what-surprised-me",
      children: "What Surprised Me"
    }), "\n", createVNode(_components.p, {
      children: "The maintainers were incredibly welcoming. They thanked me for the contribution and gave constructive feedback. This positive experience encouraged me to contribute more."
    }), "\n", createVNode(_components.p, {
      children: "Since then, I’ve contributed to several projects and even maintain a small library myself. Open source has been one of the best ways to learn from experienced developers."
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

const url = "src/content/journey/first-open-source-contribution.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/first-open-source-contribution.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/first-open-source-contribution.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
