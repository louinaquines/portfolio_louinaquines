import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-11-01T00:00:00.000Z",
  "title": "Transition to Lead Engineer Role",
  "type": "transition",
  "description": "Moved from individual contributor to lead engineer role, responsible for technical direction of a team of 5 engineers. Had to learn that leadership is less about writing code and more about enabling others to write great code.",
  "skills": ["Technical Leadership", "Mentoring", "System Design", "Communication"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-challenge",
    "text": "The Challenge"
  }, {
    "depth": 2,
    "slug": "key-learnings",
    "text": "Key Learnings"
  }, {
    "depth": 2,
    "slug": "growth-areas",
    "text": "Growth Areas"
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
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode(_components.p, {
      children: "The transition was harder than I expected. I was used to being valued for my code output, but as a lead, my impact comes from:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Making good architectural decisions"
      }), "\n", createVNode(_components.li, {
        children: "Unblocking team members"
      }), "\n", createVNode(_components.li, {
        children: "Reviewing code and providing feedback"
      }), "\n", createVNode(_components.li, {
        children: "Communicating with stakeholders"
      }), "\n", createVNode(_components.li, {
        children: "Planning and prioritizing work"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "key-learnings",
      children: "Key Learnings"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Write Less Code"
      }), ": My job is to enable the team to write great code, not to write all the code myself. This was a hard mental shift."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Document Decisions"
      }), ": Architecture decisions need to be documented and communicated clearly. I started writing ADRs (Architecture Decision Records) for major decisions."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Invest in People"
      }), ": Spending time mentoring junior engineers has a multiplier effect. Their growth is my growth."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Say No"
      }), ": Protecting the team from scope creep and unrealistic deadlines is part of the job."]
    }), "\n", createVNode(_components.h2, {
      id: "growth-areas",
      children: "Growth Areas"
    }), "\n", createVNode(_components.p, {
      children: "I’m still learning how to:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Balance technical work with leadership responsibilities"
      }), "\n", createVNode(_components.li, {
        children: "Give constructive feedback effectively"
      }), "\n", createVNode(_components.li, {
        children: "Navigate organizational politics"
      }), "\n", createVNode(_components.li, {
        children: "Advocate for the team’s needs"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Leadership is a continuous learning journey, not a destination."
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

const url = "src/content/journey/transition-to-lead-engineer.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/transition-to-lead-engineer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/transition-to-lead-engineer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
