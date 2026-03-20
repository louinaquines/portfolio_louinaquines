import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Multi-Channel Notification System",
  "role": "Senior Backend Engineer",
  "year": 2023,
  "outcomeSummary": "Built unified notification platform handling 50M+ notifications/day across email, push, SMS, and in-app channels with 99.95% delivery rate",
  "overview": "Designed and built a centralized notification system to replace fragmented, channel-specific implementations scattered across multiple services",
  "problem": "Notifications were implemented inconsistently across services. Some used third-party APIs directly, others had custom implementations. This led to duplicate notifications, inconsistent user preferences, no delivery tracking, and difficulty adding new channels.",
  "constraints": ["Must handle 50M+ notifications per day at peak", "Delivery latency under 30 seconds for time-sensitive notifications", "Must support user preferences and quiet hours", "Budget constraints on third-party provider costs"],
  "approach": "Built a unified notification service with a clean API that abstracts channel-specific complexity. Implemented intelligent routing that respects user preferences, handles retries, and optimizes for cost across providers. Used event-driven architecture for scalability.",
  "keyDecisions": [{
    "decision": "Use multi-provider strategy with intelligent routing",
    "reasoning": "No single provider is best for all use cases. SendGrid for transactional email, Twilio for SMS, Firebase for push. Intelligent routing optimizes for cost and deliverability based on notification type and recipient.",
    "alternatives": ["Single provider for all channels", "Build in-house delivery infrastructure"]
  }, {
    "decision": "Implement notification deduplication at the platform level",
    "reasoning": "Duplicate notifications were a major user complaint. Platform-level deduplication with configurable windows prevents duplicates regardless of how many times upstream services trigger the same notification.",
    "alternatives": ["Rely on upstream services to deduplicate", "Client-side deduplication"]
  }, {
    "decision": "Use Apache Kafka for notification queue",
    "reasoning": "Kafka's durability guarantees and replay capability are essential for notifications. We can't lose notifications, and we need the ability to replay failed batches. The partitioning model also enables parallel processing."
  }],
  "techStack": ["Go", "Apache Kafka", "PostgreSQL", "Redis", "SendGrid", "Twilio", "Firebase", "Kubernetes"],
  "impact": {
    "metrics": [{
      "label": "Delivery Rate",
      "value": "99.95% (up from 94%)"
    }, {
      "label": "Daily Volume",
      "value": "50M+ notifications"
    }, {
      "label": "Duplicate Complaints",
      "value": "Reduced by 95%"
    }, {
      "label": "Provider Costs",
      "value": "30% reduction through smart routing"
    }],
    "qualitative": "Product teams can now add notifications to features in minutes instead of days. User preference management has dramatically reduced notification fatigue complaints. The delivery analytics have enabled data-driven optimization of notification strategies."
  },
  "learnings": ["Notification fatigue is real—build preference management from day one", "Delivery tracking is essential for debugging and optimization", "Provider failover needs to be automatic—manual intervention is too slow", "Template management becomes complex at scale—invest in good tooling"],
  "featured": false,
  "order": 6
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "handling-scale",
    "text": "Handling Scale"
  }, {
    "depth": 2,
    "slug": "user-preference-complexity",
    "text": "User Preference Complexity"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "handling-scale",
      children: "Handling Scale"
    }), "\n", createVNode(_components.p, {
      children: "The system processes 50M+ notifications daily with significant spikes during marketing campaigns. Kafka partitioning by user ID ensures ordering guarantees while enabling horizontal scaling."
    }), "\n", createVNode(_components.p, {
      children: "We implemented backpressure mechanisms to prevent overwhelming downstream providers during spikes. The system automatically queues lower-priority notifications when approaching rate limits."
    }), "\n", createVNode(_components.h2, {
      id: "user-preference-complexity",
      children: "User Preference Complexity"
    }), "\n", createVNode(_components.p, {
      children: "User preferences turned out to be surprisingly complex. Users want different settings per channel, per notification type, and even per time of day. We built a flexible preference model that supports these combinations without becoming unwieldy."
    }), "\n", createVNode(_components.p, {
      children: "The quiet hours feature was particularly appreciated—no more 3 AM push notifications for non-urgent updates."
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

const url = "src/content/projects/notification-system.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/projects/notification-system.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/projects/notification-system.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
