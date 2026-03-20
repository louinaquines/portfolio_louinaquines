import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "date": "2022-02-14T00:00:00.000Z",
  "title": "The Incident That Changed How I Think",
  "type": "learning",
  "description": "A major production incident caused by my code taught me the importance of defensive programming, proper testing, and the real cost of downtime. It was painful, but it made me a significantly better engineer.",
  "skills": ["Incident Response", "Debugging", "Testing", "Observability"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-happened",
    "text": "What Happened"
  }, {
    "depth": 2,
    "slug": "the-aftermath",
    "text": "The Aftermath"
  }, {
    "depth": 2,
    "slug": "how-it-changed-me",
    "text": "How It Changed Me"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "what-happened",
      children: "What Happened"
    }), "\n", createVNode(_components.p, {
      children: "I deployed a change that looked safe—a small optimization to a database query. It passed code review, passed tests, and worked fine in staging."
    }), "\n", createVNode(_components.p, {
      children: "In production, under real load, it caused a cascade of failures that took down the checkout flow for 45 minutes during peak hours."
    }), "\n", createVNode(_components.h2, {
      id: "the-aftermath",
      children: "The Aftermath"
    }), "\n", createVNode(_components.p, {
      children: "The blameless postmortem revealed several gaps:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Our staging environment didn’t reflect production load patterns"
      }), "\n", createVNode(_components.li, {
        children: "The query worked fine for small datasets but degraded exponentially"
      }), "\n", createVNode(_components.li, {
        children: "We lacked proper circuit breakers"
      }), "\n", createVNode(_components.li, {
        children: "Our alerting was too slow"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-it-changed-me",
      children: "How It Changed Me"
    }), "\n", createVNode(_components.p, {
      children: "This incident fundamentally changed how I approach code:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "I think about failure modes first."
      }), " What happens when this fails? What’s the blast radius?"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "I test with realistic data."
      }), " Small test datasets hide performance problems."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "I deploy incrementally."
      }), " Feature flags and gradual rollouts are non-negotiable."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "I invest in observability."
      }), " If you can’t see it, you can’t fix it."]
    }), "\n", createVNode(_components.p, {
      children: "The incident was painful, but I’m grateful for the lessons. I’ve prevented similar issues many times since by applying what I learned that day."
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

const url = "src/content/journey/production-incident-learning.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/production-incident-learning.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/production-incident-learning.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
