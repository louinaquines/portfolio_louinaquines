import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Monorepo vs Polyrepo for Microservices",
  "date": "2023-09-20T00:00:00.000Z",
  "context": "Our microservices architecture had grown to 30+ services spread across separate repositories. Coordinating changes across services was becoming increasingly difficult.",
  "decision": "Consolidate all services into a monorepo using Nx",
  "alternatives": [{
    "option": "Keep separate repositories (polyrepo)",
    "pros": ["Clear ownership boundaries", "Independent deployment pipelines", "Smaller repository size"],
    "cons": ["Difficult to coordinate breaking changes", "Shared code requires separate npm packages", "Inconsistent tooling across repos", "Harder to enforce standards"]
  }, {
    "option": "Use Git submodules",
    "pros": ["Maintains separate repos while allowing unified view", "Can still have independent CI/CD"],
    "cons": ["Git submodules are notoriously difficult to work with", "Doesn't solve the shared code problem", "Added complexity without clear benefits"]
  }],
  "reasoning": "A monorepo with Nx provides the best of both worlds: atomic commits across services, shared tooling and standards, easy code sharing, while still maintaining independent deployment capabilities. The improved developer experience and ability to refactor across service boundaries outweighs the learning curve of adopting Nx.",
  "tags": ["architecture", "monorepo", "developer-experience", "tooling"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-problem",
    "text": "The Problem"
  }, {
    "depth": 2,
    "slug": "why-nx",
    "text": "Why Nx?"
  }, {
    "depth": 2,
    "slug": "migration-process",
    "text": "Migration Process"
  }, {
    "depth": 2,
    "slug": "results-after-3-months",
    "text": "Results After 3 Months"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "the-problem",
      children: "The Problem"
    }), "\n", createVNode(_components.p, {
      children: "With 30+ repositories, we faced several challenges:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Coordinating Changes"
        }), ": A breaking API change required PRs across 5-10 repos"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Shared Code"
        }), ": Common utilities were copy-pasted or published as npm packages"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inconsistent Tooling"
        }), ": Each repo had slightly different linting, testing, and build configs"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Onboarding"
        }), ": New developers needed to clone and set up multiple repos"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "why-nx",
      children: "Why Nx?"
    }), "\n", createVNode(_components.p, {
      children: "We evaluated several monorepo tools:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Lerna"
        }), ": Primarily for npm package management, less suited for services"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Turborepo"
        }), ": Good for build caching but less opinionated about structure"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Nx"
        }), ": Comprehensive tooling with great caching, code generation, and dependency graph"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Nx won because of its excellent TypeScript support, powerful caching, and active community."
    }), "\n", createVNode(_components.h2, {
      id: "migration-process",
      children: "Migration Process"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Created new monorepo with Nx"
      }), "\n", createVNode(_components.li, {
        children: "Migrated services one at a time, starting with least critical"
      }), "\n", createVNode(_components.li, {
        children: "Consolidated shared code into libraries"
      }), "\n", createVNode(_components.li, {
        children: "Updated CI/CD to use Nx’s affected commands"
      }), "\n", createVNode(_components.li, {
        children: "Trained team on monorepo workflows"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "results-after-3-months",
      children: "Results After 3 Months"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Cross-service refactoring time reduced by 70%"
      }), "\n", createVNode(_components.li, {
        children: "Build times improved 50% thanks to Nx caching"
      }), "\n", createVNode(_components.li, {
        children: "Shared code usage increased (less duplication)"
      }), "\n", createVNode(_components.li, {
        children: "Onboarding time for new developers cut in half"
      }), "\n", createVNode(_components.li, {
        children: "Team reports higher satisfaction with development workflow"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The migration was challenging but the benefits have been substantial."
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

const url = "src/content/decisions/monorepo-vs-polyrepo.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/decisions/monorepo-vs-polyrepo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/decisions/monorepo-vs-polyrepo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
