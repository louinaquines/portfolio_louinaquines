import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Adopting Event-Driven Architecture for Order Processing",
  "date": "2024-03-10T00:00:00.000Z",
  "context": "Our synchronous order processing pipeline was becoming a bottleneck. Long-running operations blocked the checkout flow, and failures in downstream services caused cascading issues.",
  "decision": "Migrate order processing to an event-driven architecture using Apache Kafka",
  "alternatives": [{
    "option": "Optimize existing synchronous flow",
    "pros": ["No architectural changes required", "Team already familiar with the codebase", "Lower risk"],
    "cons": ["Doesn't solve the fundamental coupling problem", "Still vulnerable to downstream failures", "Limited scalability improvements"]
  }, {
    "option": "Use a simple message queue (RabbitMQ/SQS)",
    "pros": ["Simpler than Kafka", "Easier to operate", "Good enough for basic async processing"],
    "cons": ["No event replay capability", "Limited retention", "Harder to add new consumers later"]
  }, {
    "option": "Use Kafka for event streaming",
    "pros": ["Event replay for debugging and recovery", "Easy to add new consumers", "High throughput and durability", "Natural audit log"],
    "cons": ["Operational complexity", "Learning curve for the team", "Eventual consistency challenges"]
  }],
  "reasoning": "Kafka's event log model provides capabilities we'll need as we grow: replay for debugging, easy addition of new consumers, and a natural audit trail. The operational complexity is manageable with modern tooling, and the team is ready to level up their distributed systems skills.",
  "tags": ["architecture", "event-driven", "kafka", "scalability"],
  "relatedProjects": ["payment-system-rebuild", "notification-system"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-breaking-point",
    "text": "The Breaking Point"
  }, {
    "depth": 2,
    "slug": "event-driven-design",
    "text": "Event-Driven Design"
  }, {
    "depth": 2,
    "slug": "implementation-challenges",
    "text": "Implementation Challenges"
  }, {
    "depth": 2,
    "slug": "results",
    "text": "Results"
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
      id: "the-breaking-point",
      children: "The Breaking Point"
    }), "\n", createVNode(_components.p, {
      children: "Our checkout flow was doing too much synchronously:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Validate inventory"
      }), "\n", createVNode(_components.li, {
        children: "Process payment"
      }), "\n", createVNode(_components.li, {
        children: "Update inventory"
      }), "\n", createVNode(_components.li, {
        children: "Send confirmation email"
      }), "\n", createVNode(_components.li, {
        children: "Notify warehouse"
      }), "\n", createVNode(_components.li, {
        children: "Update analytics"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "If any step failed or was slow, the entire checkout failed. During Black Friday, payment provider latency caused a 30% checkout failure rate."
    }), "\n", createVNode(_components.h2, {
      id: "event-driven-design",
      children: "Event-Driven Design"
    }), "\n", createVNode(_components.p, {
      children: "We redesigned around events:"
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Order Placed → [Kafka] → Multiple Consumers"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "                         ├── Inventory Service"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "                         ├── Payment Service"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "                         ├── Notification Service"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "                         ├── Warehouse Service"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "                         └── Analytics Service"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Each consumer processes independently. Failures are isolated and retried without affecting the user."
    }), "\n", createVNode(_components.h2, {
      id: "implementation-challenges",
      children: "Implementation Challenges"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Eventual Consistency"
      }), ": Users might see “order placed” before inventory is updated. We added optimistic UI updates and clear status indicators."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Idempotency"
      }), ": Consumers must handle duplicate events. We implemented idempotency keys for all operations."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Monitoring"
      }), ": Distributed tracing became essential. We invested heavily in observability."]
    }), "\n", createVNode(_components.h2, {
      id: "results",
      children: "Results"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Checkout success rate: 99.7% (up from 94%)"
      }), "\n", createVNode(_components.li, {
        children: "Average checkout time: 800ms (down from 3.2s)"
      }), "\n", createVNode(_components.li, {
        children: "Black Friday handled 3x previous peak with no issues"
      }), "\n", createVNode(_components.li, {
        children: "New features (fraud detection, loyalty points) added without touching checkout code"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The migration took 4 months but fundamentally improved our system’s resilience."
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

const url = "src/content/decisions/event-driven-architecture.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/decisions/event-driven-architecture.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/decisions/event-driven-architecture.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
