import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "date": "2026-01-05T00:00:00.000Z",
  "title": "Leveling Up System Design Skills",
  "type": "learning",
  "description": "Dedicated focused effort to improve system design skills after struggling in senior engineer interviews. Studied real-world architectures, practiced with peers, and started documenting design decisions systematically.",
  "skills": ["System Design", "Architecture", "Technical Documentation", "Trade-off Analysis"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-wake-up-call",
    "text": "The Wake-Up Call"
  }, {
    "depth": 2,
    "slug": "my-approach",
    "text": "My Approach"
  }, {
    "depth": 2,
    "slug": "the-shift",
    "text": "The Shift"
  }];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "the-wake-up-call",
      children: "The Wake-Up Call"
    }), "\n", createVNode(_components.p, {
      children: ["I failed a system design interview badly. I could code well, but when asked to design a large-scale system, I fumbled. I realized I’d been building systems without deeply understanding ", createVNode(_components.em, {
        children: "why"
      }), " they were designed that way."]
    }), "\n", createVNode(_components.h2, {
      id: "my-approach",
      children: "My Approach"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Studied real architectures."
      }), " Read engineering blogs from companies like Uber, Netflix, Stripe. Understanding how real systems evolved was more valuable than theoretical knowledge."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Practiced deliberately."
      }), " Found a study group and practiced designing systems weekly. Getting feedback from others revealed blind spots."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Started documenting."
      }), " Began writing design documents for my own projects, even small ones. The discipline of writing clarified my thinking."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Asked “why” more."
      }), " When encountering architectural decisions at work, I dug into the reasoning. Every system has trade-offs worth understanding."]
    }), "\n", createVNode(_components.h2, {
      id: "the-shift",
      children: "The Shift"
    }), "\n", createVNode(_components.p, {
      children: "System design went from my weakest area to one of my strongest. More importantly, I now approach problems differently:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "I think about scale and evolution from the start"
      }), "\n", createVNode(_components.li, {
        children: "I consider operational concerns alongside features"
      }), "\n", createVNode(_components.li, {
        children: "I document decisions so future engineers understand the context"
      }), "\n", createVNode(_components.li, {
        children: "I recognize that there’s rarely one “right” answer—only trade-offs"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This skill has been invaluable as I’ve taken on more technical leadership responsibilities."
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

const url = "src/content/journey/system-design-mastery.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/system-design-mastery.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/system-design-mastery.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
