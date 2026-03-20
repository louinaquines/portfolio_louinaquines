import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Data Pipeline Migration to Real-Time",
  "role": "Data Engineer",
  "year": 2022,
  "duration": "1.5 years",
  "teamSize": 20,
  "outcomeSummary": "Migrated batch data pipelines to real-time streaming, reducing data freshness from 24 hours to under 5 minutes",
  "overview": "Led the transformation of legacy batch ETL pipelines to a modern real-time streaming architecture, enabling near-instant analytics and ML model updates",
  "problem": "Business decisions were based on day-old data. The nightly batch jobs took 6+ hours to complete, frequently failed, and couldn't scale with growing data volumes. Data scientists waited 24+ hours to see the impact of model changes.",
  "constraints": ["Must process 500GB+ of daily data", "Cannot lose data during migration", "Existing downstream consumers must continue working", "Team unfamiliar with streaming technologies"],
  "approach": "Implemented a hybrid architecture using Apache Flink for stream processing while maintaining batch capabilities for historical reprocessing. Used the Kappa architecture pattern where streaming is the primary path and batch is derived from the stream.",
  "keyDecisions": [{
    "decision": "Choose Apache Flink over Spark Streaming",
    "reasoning": "Flink's true streaming model (vs Spark's micro-batch) provides lower latency and better exactly-once semantics. The savepoint mechanism enables safe deployments and schema evolution.",
    "alternatives": ["Apache Spark Structured Streaming", "Apache Kafka Streams", "AWS Kinesis"]
  }, {
    "decision": "Implement schema registry for data contracts",
    "reasoning": "Schema evolution is inevitable. A central schema registry with compatibility checks prevents breaking changes from propagating through the pipeline. Enables safe, independent evolution of producers and consumers.",
    "alternatives": ["Schema embedded in messages", "Schema-less JSON"]
  }, {
    "decision": "Use Delta Lake for the data lakehouse",
    "reasoning": "Delta Lake provides ACID transactions on data lake storage, enabling reliable upserts and time travel. The unified batch and streaming support aligns with our hybrid architecture."
  }],
  "techStack": ["Apache Flink", "Apache Kafka", "Delta Lake", "AWS S3", "Apache Airflow", "dbt", "Python", "Kubernetes"],
  "impact": {
    "metrics": [{
      "label": "Data Freshness",
      "value": "Under 5 minutes (down from 24 hours)"
    }, {
      "label": "Pipeline Reliability",
      "value": "99.9% (up from 85%)"
    }, {
      "label": "Processing Cost",
      "value": "40% reduction"
    }, {
      "label": "Data Team Productivity",
      "value": "50% more experiments per quarter"
    }],
    "qualitative": "Real-time data has transformed how the business operates. Marketing can see campaign performance immediately. Fraud detection models update continuously. The data team spends time on analysis instead of babysitting pipelines."
  },
  "learnings": ["Streaming adds operational complexity—invest in observability and alerting", "Exactly-once semantics are hard—understand the guarantees your tools actually provide", "Schema management is critical—treat schemas as code with versioning and reviews", "Hybrid batch+streaming is pragmatic—pure streaming isn't always necessary or cost-effective"],
  "featured": false,
  "status": "archived",
  "order": 7
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "migration-strategy",
    "text": "Migration Strategy"
  }, {
    "depth": 2,
    "slug": "operational-challenges",
    "text": "Operational Challenges"
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
      id: "migration-strategy",
      children: "Migration Strategy"
    }), "\n", createVNode(_components.p, {
      children: "We couldn’t switch everything to streaming overnight. Instead, we ran batch and streaming pipelines in parallel, comparing outputs to validate correctness. This “shadow mode” ran for 4 weeks before we trusted the streaming pipeline enough to make it primary."
    }), "\n", createVNode(_components.p, {
      children: "The key insight was treating the Kafka topic as the source of truth. Both real-time and batch consumers read from the same stream, ensuring consistency."
    }), "\n", createVNode(_components.h2, {
      id: "operational-challenges",
      children: "Operational Challenges"
    }), "\n", createVNode(_components.p, {
      children: "Flink’s stateful processing required careful capacity planning. Checkpointing to S3 added latency during backpressure situations. We spent significant time tuning checkpoint intervals and state backend configurations."
    }), "\n", createVNode(_components.p, {
      children: "The schema registry became a critical piece of infrastructure. We implemented CI/CD checks that validate schema compatibility before allowing merges, preventing breaking changes from reaching production."
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

const url = "src/content/projects/data-pipeline-migration.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/projects/data-pipeline-migration.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/projects/data-pipeline-migration.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
