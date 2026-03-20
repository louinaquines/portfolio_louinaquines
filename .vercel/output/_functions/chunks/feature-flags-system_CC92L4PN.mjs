import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Implementing Feature Flags for Safer Deployments",
  "date": "2023-11-08T00:00:00.000Z",
  "context": "Our deployment process was all-or-nothing. New features went live to all users immediately upon deployment, making rollbacks disruptive and limiting our ability to test in production.",
  "decision": "Implement a feature flag system using LaunchDarkly for gradual rollouts and instant kill switches",
  "alternatives": [{
    "option": "Build custom feature flag system",
    "pros": ["Full control over implementation", "No external dependency", "No per-seat licensing costs"],
    "cons": ["Significant development effort", "Need to build targeting, analytics, UI", "Maintenance burden on the team"]
  }, {
    "option": "Use LaunchDarkly",
    "pros": ["Battle-tested at scale", "Rich targeting capabilities", "Built-in analytics and experimentation", "Good SDK support"],
    "cons": ["Monthly cost (~$500/month for our scale)", "External dependency", "Data leaves our infrastructure"]
  }, {
    "option": "Use environment variables",
    "pros": ["Simple to implement", "No external dependencies"],
    "cons": ["Requires redeployment to change", "No gradual rollout capability", "No user targeting"]
  }],
  "reasoning": "The cost of LaunchDarkly is justified by the development time saved and the risk reduction from gradual rollouts. Building a comparable system in-house would take months and require ongoing maintenance. The ability to instantly disable problematic features without redeployment is invaluable.",
  "tags": ["deployment", "feature-flags", "risk-management", "tooling"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-problem",
    "text": "The Problem"
  }, {
    "depth": 2,
    "slug": "feature-flag-strategy",
    "text": "Feature Flag Strategy"
  }, {
    "depth": 2,
    "slug": "rollout-process",
    "text": "Rollout Process"
  }, {
    "depth": 2,
    "slug": "results",
    "text": "Results"
  }, {
    "depth": 2,
    "slug": "lessons-learned",
    "text": "Lessons Learned"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "the-problem",
      children: "The Problem"
    }), "\n", createVNode(_components.p, {
      children: "Our deployment anxiety was high:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Every deploy was a potential incident"
      }), "\n", createVNode(_components.li, {
        children: "Rollbacks required full redeployment (5-10 minutes)"
      }), "\n", createVNode(_components.li, {
        children: "No way to test features with subset of users"
      }), "\n", createVNode(_components.li, {
        children: "Product couldn’t run A/B tests"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "feature-flag-strategy",
      children: "Feature Flag Strategy"
    }), "\n", createVNode(_components.p, {
      children: "We established patterns for flag usage:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Release Flags"
      }), ": Temporary flags for new features"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "typescript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (flags."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "isEnabled"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'new-checkout-flow'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", user)) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " newCheckoutFlow"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " legacyCheckoutFlow"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Ops Flags"
      }), ": Permanent flags for operational control"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "typescript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (flags."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "isEnabled"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'enable-cache'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", { service: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'api'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " })) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " cachedResponse"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Experiment Flags"
      }), ": For A/B testing"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "typescript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " variant"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " flags."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getVariant"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'pricing-test'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", user);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pricingPages[variant];"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "rollout-process",
      children: "Rollout Process"
    }), "\n", createVNode(_components.p, {
      children: "New features now follow this process:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Deploy with flag disabled (0%)"
      }), "\n", createVNode(_components.li, {
        children: "Enable for internal users (dogfooding)"
      }), "\n", createVNode(_components.li, {
        children: "Enable for 1% of users, monitor"
      }), "\n", createVNode(_components.li, {
        children: "Gradually increase: 5% → 25% → 50% → 100%"
      }), "\n", createVNode(_components.li, {
        children: "Remove flag after feature is stable"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "results",
      children: "Results"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Deployment frequency"
        }), ": 3x increase (less fear)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Incident recovery time"
        }), ": 90% reduction (instant kill switch)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "A/B tests run"
        }), ": 12 in first quarter (previously 0)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Developer confidence"
        }), ": Significantly improved"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The $500/month cost has paid for itself many times over in reduced incident impact and faster iteration."
    }), "\n", createVNode(_components.h2, {
      id: "lessons-learned",
      children: "Lessons Learned"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Flag hygiene matters"
        }), ": We schedule flag cleanup to avoid technical debt"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Default to off"
        }), ": New flags should be disabled by default"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Document flag purpose"
        }), ": Every flag needs an owner and expiration date"]
      }), "\n"]
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

const url = "src/content/decisions/feature-flags-system.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/decisions/feature-flags-system.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/decisions/feature-flags-system.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
