import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "date": "2023-04-01T00:00:00.000Z",
  "title": "Started Mentoring Junior Engineers",
  "type": "milestone",
  "description": "Began formally mentoring two junior engineers. Teaching others forced me to articulate concepts I'd internalized, and watching them grow became one of the most rewarding parts of my job.",
  "skills": ["Mentoring", "Communication", "Technical Leadership", "Feedback"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-i-started",
    "text": "Why I Started"
  }, {
    "depth": 2,
    "slug": "what-i-learned-about-teaching",
    "text": "What I Learned About Teaching"
  }, {
    "depth": 2,
    "slug": "the-multiplier-effect",
    "text": "The Multiplier Effect"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "why-i-started",
      children: "Why I Started"
    }), "\n", createVNode(_components.p, {
      children: "I remembered how lost I felt as a junior engineer. Good mentors accelerated my growth tremendously, and I wanted to pay it forward."
    }), "\n", createVNode(_components.h2, {
      id: "what-i-learned-about-teaching",
      children: "What I Learned About Teaching"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Explaining reveals gaps."
      }), " When I couldn’t explain something clearly, it meant I didn’t understand it well enough myself."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Everyone learns differently."
      }), " Some people need to see code, others need diagrams, others need to talk through problems verbally."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Ask, don’t tell."
      }), " Guiding someone to discover the answer themselves is more effective than just giving them the solution."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Celebrate small wins."
      }), " Progress isn’t always visible day-to-day, but looking back over months shows tremendous growth."]
    }), "\n", createVNode(_components.h2, {
      id: "the-multiplier-effect",
      children: "The Multiplier Effect"
    }), "\n", createVNode(_components.p, {
      children: "One of my mentees is now mentoring others. Seeing the knowledge and practices spread through the organization has been incredibly fulfilling."
    }), "\n", createVNode(_components.p, {
      children: "Mentoring isn’t just about helping others—it’s made me a better engineer and communicator too."
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

const url = "src/content/journey/mentoring-junior-engineers.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/mentoring-junior-engineers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/journey/mentoring-junior-engineers.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
