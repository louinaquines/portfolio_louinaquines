import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "date": "2025-06-15T00:00:00.000Z",
  "title": "First Conference Talk",
  "type": "milestone",
  "description": "Gave my first technical talk at a regional conference about lessons learned from migrating to microservices. Public speaking terrified me, but pushing through that fear opened new opportunities.",
  "skills": ["Public Speaking", "Technical Writing", "Communication"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-fear",
    "text": "The Fear"
  }, {
    "depth": 2,
    "slug": "preparation",
    "text": "Preparation"
  }, {
    "depth": 2,
    "slug": "the-day",
    "text": "The Day"
  }, {
    "depth": 2,
    "slug": "what-changed",
    "text": "What Changed"
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
      id: "the-fear",
      children: "The Fear"
    }), "\n", createVNode(_components.p, {
      children: "I’d avoided public speaking my entire career. The thought of standing in front of hundreds of people made me physically anxious."
    }), "\n", createVNode(_components.p, {
      children: "But I had a story worth telling—our microservices migration had hard-won lessons that could help others avoid our mistakes."
    }), "\n", createVNode(_components.h2, {
      id: "preparation",
      children: "Preparation"
    }), "\n", createVNode(_components.p, {
      children: "I spent three months preparing:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Wrote and rewrote the talk multiple times"
      }), "\n", createVNode(_components.li, {
        children: "Practiced in front of colleagues"
      }), "\n", createVNode(_components.li, {
        children: "Recorded myself and watched (painfully) to improve"
      }), "\n", createVNode(_components.li, {
        children: "Prepared for questions I hoped nobody would ask"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "the-day",
      children: "The Day"
    }), "\n", createVNode(_components.p, {
      children: "The first five minutes were terrifying. My voice shook, my hands trembled."
    }), "\n", createVNode(_components.p, {
      children: "Then something shifted. I saw people nodding, taking notes. They were engaged. The fear transformed into energy."
    }), "\n", createVNode(_components.h2, {
      id: "what-changed",
      children: "What Changed"
    }), "\n", createVNode(_components.p, {
      children: "The talk led to:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Conversations with engineers facing similar challenges"
      }), "\n", createVNode(_components.li, {
        children: "An invitation to write a blog post for a popular engineering blog"
      }), "\n", createVNode(_components.li, {
        children: "Confidence to share ideas more broadly"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Public speaking is still uncomfortable, but I’ve learned that growth happens outside the comfort zone. I’ve given several talks since, and each one gets a little easier."
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

const url = "src/content/journey/speaking-at-conference.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/speaking-at-conference.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/speaking-at-conference.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
