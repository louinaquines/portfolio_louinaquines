import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Transitioning to Remote-First Team Structure",
  "date": "2024-06-20T00:00:00.000Z",
  "context": "Post-pandemic, our team was split between office and remote workers. The hybrid model created two classes of employees and made collaboration inconsistent. We needed to decide on a deliberate approach.",
  "decision": "Adopt a remote-first model where all meetings and collaboration assume remote participation, with optional office space for those who prefer it",
  "alternatives": [{
    "option": "Return to office-first",
    "pros": ["Easier spontaneous collaboration", "Clearer work-life boundaries", "Existing office infrastructure"],
    "cons": ["Limits hiring to local candidates", "Some team members strongly prefer remote", "Commute time reduces productivity"]
  }, {
    "option": "Hybrid with required office days",
    "pros": ["Balance of remote and in-person", "Maintains some office culture"],
    "cons": ["Creates two-tier experience", "Remote workers miss hallway conversations", "Scheduling complexity"]
  }, {
    "option": "Remote-first with optional office",
    "pros": ["Equal experience for all team members", "Access to global talent pool", "Flexibility for individual preferences"],
    "cons": ["Requires intentional culture building", "Harder to onboard new team members", "Risk of isolation"]
  }],
  "reasoning": "Remote-first ensures everyone has the same experience regardless of location. This levels the playing field and allows us to hire the best talent regardless of geography. The key is being intentional about communication and culture rather than relying on office proximity.",
  "tags": ["team", "remote-work", "culture", "process"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-hybrid-problem",
    "text": "The Hybrid Problem"
  }, {
    "depth": 2,
    "slug": "remote-first-principles",
    "text": "Remote-First Principles"
  }, {
    "depth": 2,
    "slug": "implementation",
    "text": "Implementation"
  }, {
    "depth": 2,
    "slug": "results-after-6-months",
    "text": "Results After 6 Months"
  }, {
    "depth": 2,
    "slug": "challenges",
    "text": "Challenges"
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
      id: "the-hybrid-problem",
      children: "The Hybrid Problem"
    }), "\n", createVNode(_components.p, {
      children: "Our hybrid setup had issues:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Office workers had context from hallway conversations"
      }), "\n", createVNode(_components.li, {
        children: "Remote workers felt like second-class citizens"
      }), "\n", createVNode(_components.li, {
        children: "Meetings were awkward (half in room, half on screen)"
      }), "\n", createVNode(_components.li, {
        children: "Documentation was inconsistent (office folks just asked each other)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "remote-first-principles",
      children: "Remote-First Principles"
    }), "\n", createVNode(_components.p, {
      children: "We established core principles:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1. Default to Async"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Decisions documented in writing"
      }), "\n", createVNode(_components.li, {
        children: "Meetings have agendas and notes"
      }), "\n", createVNode(_components.li, {
        children: "No “you had to be there” moments"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2. Over-Communicate"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Daily standups in Slack (async)"
      }), "\n", createVNode(_components.li, {
        children: "Weekly team syncs (video)"
      }), "\n", createVNode(_components.li, {
        children: "Monthly all-hands with recordings"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3. Intentional Synchronous Time"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Pair programming sessions"
      }), "\n", createVNode(_components.li, {
        children: "Brainstorming calls"
      }), "\n", createVNode(_components.li, {
        children: "1:1s remain synchronous"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "4. Document Everything"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "ADRs for technical decisions"
      }), "\n", createVNode(_components.li, {
        children: "Runbooks for operations"
      }), "\n", createVNode(_components.li, {
        children: "Onboarding guides maintained"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Tooling upgrades:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Invested in good video conferencing"
      }), "\n", createVNode(_components.li, {
        children: "Adopted Notion for documentation"
      }), "\n", createVNode(_components.li, {
        children: "Slack channels for team communication"
      }), "\n", createVNode(_components.li, {
        children: "Loom for async video updates"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Process changes:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "All meetings have video links (even if some are in office)"
      }), "\n", createVNode(_components.li, {
        children: "Meeting notes required within 24 hours"
      }), "\n", createVNode(_components.li, {
        children: "“No meeting Wednesdays” for deep work"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Culture building:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Virtual coffee chats (random pairing)"
      }), "\n", createVNode(_components.li, {
        children: "Quarterly in-person offsites"
      }), "\n", createVNode(_components.li, {
        children: "Slack channels for non-work interests"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "results-after-6-months",
      children: "Results After 6 Months"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hiring"
        }), ": Expanded candidate pool significantly"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Documentation"
        }), ": 3x more written docs than before"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Meeting efficiency"
        }), ": Meetings shorter and more focused"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Team satisfaction"
        }), ": Survey scores improved"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "challenges",
      children: "Challenges"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Onboarding"
        }), ": New hires need more structured support"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Isolation"
        }), ": Some team members struggle with remote work"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Time zones"
        }), ": Global team means async by necessity"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Remote-first isn’t perfect, but it’s more equitable than hybrid and gives us access to talent we couldn’t reach before."
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

const url = "src/content/decisions/remote-first-team.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/decisions/remote-first-team.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/decisions/remote-first-team.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
