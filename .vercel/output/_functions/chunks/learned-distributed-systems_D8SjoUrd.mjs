import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "date": "2022-06-10T00:00:00.000Z",
  "title": "Deep Dive into Distributed Systems",
  "type": "learning",
  "description": "Spent 6 months studying distributed systems fundamentals after struggling with consistency issues in a microservices project. Read papers on consensus algorithms, studied CAP theorem, and implemented a simple distributed key-value store.",
  "skills": ["Distributed Systems", "Consensus Algorithms", "System Design"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-catalyst",
    "text": "The Catalyst"
  }, {
    "depth": 2,
    "slug": "what-i-studied",
    "text": "What I Studied"
  }, {
    "depth": 2,
    "slug": "impact",
    "text": "Impact"
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
      id: "the-catalyst",
      children: "The Catalyst"
    }), "\n", createVNode(_components.p, {
      children: "A production incident where our microservices got into an inconsistent state made me realize I didn’t understand distributed systems well enough. I was building distributed systems without understanding the fundamental challenges."
    }), "\n", createVNode(_components.h2, {
      id: "what-i-studied",
      children: "What I Studied"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Martin Kleppmann’s “Designing Data-Intensive Applications”"
      }), "\n", createVNode(_components.li, {
        children: "Raft consensus algorithm paper"
      }), "\n", createVNode(_components.li, {
        children: "Various distributed systems papers from MIT 6.824"
      }), "\n", createVNode(_components.li, {
        children: "Built a toy distributed key-value store to understand the concepts hands-on"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", createVNode(_components.p, {
      children: "This deep dive transformed how I approach system design. I now think carefully about:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Consistency vs availability trade-offs"
      }), "\n", createVNode(_components.li, {
        children: "Failure modes and partial failures"
      }), "\n", createVNode(_components.li, {
        children: "Idempotency and retry logic"
      }), "\n", createVNode(_components.li, {
        children: "Event ordering and causality"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These concepts have been invaluable in every distributed system I’ve worked on since."
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

const url = "src/content/journey/learned-distributed-systems.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/learned-distributed-systems.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/learned-distributed-systems.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
