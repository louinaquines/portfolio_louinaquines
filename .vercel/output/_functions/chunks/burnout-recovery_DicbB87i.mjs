import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "date": "2025-10-01T00:00:00.000Z",
  "title": "Recognizing and Recovering from Burnout",
  "type": "transition",
  "description": "Hit a wall after months of unsustainable pace. Learning to recognize burnout signs and establish better boundaries was crucial for long-term sustainability in this career.",
  "skills": ["Work-Life Balance", "Self-Awareness", "Boundary Setting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-signs-i-ignored",
    "text": "The Signs I Ignored"
  }, {
    "depth": 2,
    "slug": "the-breaking-point",
    "text": "The Breaking Point"
  }, {
    "depth": 2,
    "slug": "recovery",
    "text": "Recovery"
  }, {
    "depth": 2,
    "slug": "what-i-tell-others",
    "text": "What I Tell Others"
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
      id: "the-signs-i-ignored",
      children: "The Signs I Ignored"
    }), "\n", createVNode(_components.p, {
      children: "Looking back, the signs were obvious:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Dreading work I used to enjoy"
      }), "\n", createVNode(_components.li, {
        children: "Constant exhaustion despite sleeping"
      }), "\n", createVNode(_components.li, {
        children: "Cynicism about projects and people"
      }), "\n", createVNode(_components.li, {
        children: "Difficulty concentrating"
      }), "\n", createVNode(_components.li, {
        children: "Physical symptoms (headaches, tension)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "I kept pushing through, thinking it would pass. It didn’t."
    }), "\n", createVNode(_components.h2, {
      id: "the-breaking-point",
      children: "The Breaking Point"
    }), "\n", createVNode(_components.p, {
      children: "I made a significant error in a code review—something I would have caught easily before. That’s when I realized something was seriously wrong."
    }), "\n", createVNode(_components.h2, {
      id: "recovery",
      children: "Recovery"
    }), "\n", createVNode(_components.p, {
      children: "Recovery wasn’t quick or linear:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "I took time off."
      }), " Actually disconnected, not “working from vacation.”"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "I set boundaries."
      }), " No more late nights as the default. Sustainable pace became non-negotiable."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "I said no more often."
      }), " Not every opportunity needs to be seized. Some need to be declined."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "I rediscovered hobbies."
      }), " Coding stopped being my only identity."]
    }), "\n", createVNode(_components.h2, {
      id: "what-i-tell-others",
      children: "What I Tell Others"
    }), "\n", createVNode(_components.p, {
      children: "Burnout isn’t a badge of honor. It’s a signal that something is broken—in the environment, the expectations, or the boundaries."
    }), "\n", createVNode(_components.p, {
      children: "Sustainable careers are marathons, not sprints. I’m still learning to pace myself, but I’m much better at recognizing the warning signs now."
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

const url = "src/content/journey/burnout-recovery.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/burnout-recovery.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/burnout-recovery.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
