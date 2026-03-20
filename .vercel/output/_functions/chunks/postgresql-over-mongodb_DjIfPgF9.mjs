import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Choosing PostgreSQL Over MongoDB for New Services",
  "date": "2023-06-15T00:00:00.000Z",
  "context": "We were designing a new service for managing customer subscriptions with complex billing logic. The team debated between PostgreSQL and MongoDB, which we had used for other services.",
  "decision": "Use PostgreSQL for the subscription service and establish it as the default for new services with relational data",
  "alternatives": [{
    "option": "Use MongoDB (our existing default)",
    "pros": ["Team already experienced with MongoDB", "Flexible schema for evolving requirements", "Good for document-oriented data"],
    "cons": ["Transactions across collections are complex", "Joins require application-level logic", "Schema flexibility can lead to data inconsistencies"]
  }, {
    "option": "Use PostgreSQL",
    "pros": ["ACID transactions for billing accuracy", "Powerful query capabilities with JOINs", "Strong data integrity with constraints", "JSONB for flexible fields when needed"],
    "cons": ["Team needs to learn PostgreSQL", "Schema migrations require more planning", "Different operational model than MongoDB"]
  }],
  "reasoning": "Subscription billing requires strong consistency guarantees that are natural in PostgreSQL but require careful handling in MongoDB. The relational model fits our data (customers, plans, invoices, payments) better than documents. PostgreSQL's JSONB gives us schema flexibility where needed without sacrificing relational capabilities.",
  "tags": ["database", "postgresql", "architecture"],
  "relatedProjects": ["payment-system-rebuild", "data-pipeline-migration"],
  "relatedDecisions": ["event-driven-architecture"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-this-decision-mattered",
    "text": "Why This Decision Mattered"
  }, {
    "depth": 2,
    "slug": "the-mongodb-experience",
    "text": "The MongoDB Experience"
  }, {
    "depth": 2,
    "slug": "postgresql-evaluation",
    "text": "PostgreSQL Evaluation"
  }, {
    "depth": 2,
    "slug": "migration-path",
    "text": "Migration Path"
  }, {
    "depth": 2,
    "slug": "team-learning",
    "text": "Team Learning"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "why-this-decision-mattered",
      children: "Why This Decision Mattered"
    }), "\n", createVNode(_components.p, {
      children: "Billing systems have zero tolerance for inconsistency. A customer being charged twice or not at all is unacceptable. We needed:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Atomic transactions across multiple tables"
      }), "\n", createVNode(_components.li, {
        children: "Strong referential integrity"
      }), "\n", createVNode(_components.li, {
        children: "Complex queries for reporting"
      }), "\n", createVNode(_components.li, {
        children: "Audit trail for compliance"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "the-mongodb-experience",
      children: "The MongoDB Experience"
    }), "\n", createVNode(_components.p, {
      children: "We had used MongoDB for 3 years. It worked well for:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "User profiles (document-oriented)"
      }), "\n", createVNode(_components.li, {
        children: "Product catalogs (flexible schema)"
      }), "\n", createVNode(_components.li, {
        children: "Activity logs (append-heavy)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "But we struggled with:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Multi-document transactions (added in 4.0 but still awkward)"
      }), "\n", createVNode(_components.li, {
        children: "Reporting queries (aggregation pipeline is powerful but complex)"
      }), "\n", createVNode(_components.li, {
        children: "Data consistency (no foreign keys meant orphaned records)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "postgresql-evaluation",
      children: "PostgreSQL Evaluation"
    }), "\n", createVNode(_components.p, {
      children: "We ran a 2-week spike to evaluate PostgreSQL:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Modeled the subscription domain relationally"
      }), "\n", createVNode(_components.li, {
        children: "Implemented key billing operations"
      }), "\n", createVNode(_components.li, {
        children: "Tested transaction behavior under failure"
      }), "\n", createVNode(_components.li, {
        children: "Evaluated query performance for reporting"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The results were compelling. Complex billing queries that took 50+ lines of aggregation pipeline became 10-line SQL queries."
    }), "\n", createVNode(_components.h2, {
      id: "migration-path",
      children: "Migration Path"
    }), "\n", createVNode(_components.p, {
      children: "We didn’t migrate existing MongoDB services. Instead:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "New services with relational data use PostgreSQL"
      }), "\n", createVNode(_components.li, {
        children: "Existing MongoDB services remain (if working well)"
      }), "\n", createVNode(_components.li, {
        children: "Shared data accessed via APIs, not direct DB access"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "team-learning",
      children: "Team Learning"
    }), "\n", createVNode(_components.p, {
      children: "We invested in PostgreSQL training:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Internal workshops on SQL and PostgreSQL features"
      }), "\n", createVNode(_components.li, {
        children: "Pair programming during initial development"
      }), "\n", createVNode(_components.li, {
        children: "Documentation of patterns and best practices"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "After 6 months, the team is comfortable with both databases and can choose the right tool for each use case."
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

const url = "src/content/decisions/postgresql-over-mongodb.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/decisions/postgresql-over-mongodb.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/decisions/postgresql-over-mongodb.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
