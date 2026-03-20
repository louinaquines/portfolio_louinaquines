import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Incident Management: Lessons from 5 Years of On-Call",
  "description": "Practical insights on building effective incident response processes, reducing MTTR, and creating a sustainable on-call culture.",
  "publishDate": "2026-01-05T00:00:00.000Z",
  "updatedDate": "2026-01-06T00:00:00.000Z",
  "tags": ["incident-management", "on-call", "reliability", "team-culture"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "the-anatomy-of-effective-incident-response",
    "text": "The Anatomy of Effective Incident Response"
  }, {
    "depth": 3,
    "slug": "severity-levels-that-make-sense",
    "text": "Severity Levels That Make Sense"
  }, {
    "depth": 3,
    "slug": "the-first-5-minutes",
    "text": "The First 5 Minutes"
  }, {
    "depth": 2,
    "slug": "reducing-mttr-what-actually-works",
    "text": "Reducing MTTR: What Actually Works"
  }, {
    "depth": 3,
    "slug": "runbooks-that-get-used",
    "text": "Runbooks That Get Used"
  }, {
    "depth": 3,
    "slug": "common-fixes",
    "text": "Common fixes"
  }, {
    "depth": 3,
    "slug": "escalation",
    "text": "Escalation"
  }, {
    "depth": 3,
    "slug": "observability-for-incidents",
    "text": "Observability for Incidents"
  }, {
    "depth": 2,
    "slug": "building-sustainable-on-call",
    "text": "Building Sustainable On-Call"
  }, {
    "depth": 3,
    "slug": "the-on-call-contract",
    "text": "The On-Call Contract"
  }, {
    "depth": 3,
    "slug": "reducing-alert-fatigue",
    "text": "Reducing Alert Fatigue"
  }, {
    "depth": 3,
    "slug": "the-blameless-postmortem",
    "text": "The Blameless Postmortem"
  }, {
    "depth": 2,
    "slug": "incident-communication",
    "text": "Incident Communication"
  }, {
    "depth": 3,
    "slug": "internal-communication",
    "text": "Internal Communication"
  }, {
    "depth": 3,
    "slug": "external-communication",
    "text": "External Communication"
  }, {
    "depth": 2,
    "slug": "measuring-incident-response",
    "text": "Measuring Incident Response"
  }, {
    "depth": 3,
    "slug": "metrics-that-matter",
    "text": "Metrics That Matter"
  }, {
    "depth": 3,
    "slug": "trending-in-the-right-direction",
    "text": "Trending in the Right Direction"
  }, {
    "depth": 2,
    "slug": "lessons-learned",
    "text": "Lessons Learned"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }, {
    "depth": 2,
    "slug": "resources",
    "text": "Resources"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "After five years of being on-call across different organizations—from startups to large enterprises—I’ve learned that incident management is as much about people and processes as it is about technology."
    }), "\n", createVNode(_components.p, {
      children: "This post shares practical lessons on building incident response that actually works, reducing mean time to recovery (MTTR), and creating an on-call culture that doesn’t burn out your team."
    }), "\n", createVNode(_components.h2, {
      id: "the-anatomy-of-effective-incident-response",
      children: "The Anatomy of Effective Incident Response"
    }), "\n", createVNode(_components.h3, {
      id: "severity-levels-that-make-sense",
      children: "Severity Levels That Make Sense"
    }), "\n", createVNode(_components.p, {
      children: "Most teams overcomplicate severity levels. Here’s a simple framework that works:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Severity"
          }), createVNode(_components.th, {
            children: "Definition"
          }), createVNode(_components.th, {
            children: "Response Time"
          }), createVNode(_components.th, {
            children: "Example"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "SEV1"
          }), createVNode(_components.td, {
            children: "Complete service outage"
          }), createVNode(_components.td, {
            children: "Immediate"
          }), createVNode(_components.td, {
            children: "Payment system down"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "SEV2"
          }), createVNode(_components.td, {
            children: "Major feature degraded"
          }), createVNode(_components.td, {
            children: "15 minutes"
          }), createVNode(_components.td, {
            children: "Search returning errors"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "SEV3"
          }), createVNode(_components.td, {
            children: "Minor impact"
          }), createVNode(_components.td, {
            children: "1 hour"
          }), createVNode(_components.td, {
            children: "Slow dashboard loading"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "SEV4"
          }), createVNode(_components.td, {
            children: "No user impact"
          }), createVNode(_components.td, {
            children: "Next business day"
          }), createVNode(_components.td, {
            children: "Internal tool issue"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["The key insight: ", createVNode(_components.strong, {
        children: "severity is about user impact, not technical complexity"
      }), ". A simple bug affecting all users is higher severity than a complex issue affecting none."]
    }), "\n", createVNode(_components.h3, {
      id: "the-first-5-minutes",
      children: "The First 5 Minutes"
    }), "\n", createVNode(_components.p, {
      children: "The first five minutes of an incident determine its trajectory. Here’s what should happen:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "1."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Alert fires → On-call acknowledges (< 1 min)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "2."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Quick assessment: Is this real? What's the blast radius?"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "3."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Decide: Can I fix this alone, or do I need help?"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "4."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " If SEV1/SEV2: Start incident channel, page additional help"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "5."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Communicate: Post initial status update"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "I’ve seen teams waste 20+ minutes figuring out who should be involved. Pre-define escalation paths for common scenarios."
    }), "\n", createVNode(_components.h2, {
      id: "reducing-mttr-what-actually-works",
      children: "Reducing MTTR: What Actually Works"
    }), "\n", createVNode(_components.h3, {
      id: "runbooks-that-get-used",
      children: "Runbooks That Get Used"
    }), "\n", createVNode(_components.p, {
      children: "Most runbooks are write-only documents. Here’s how to make them useful:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Bad runbook:"
      })
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
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "If the database is slow, check the queries and optimize them."
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Good runbook:"
      })
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "## Symptom: Database latency > 500ms"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "### Quick diagnosis (< 2 min)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "1."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Check active connections: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "`SELECT count(*) FROM pg_stat_activity;`"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "   -"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Normal: < 100"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "   -"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Problem: > 200"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "2."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Check for long-running queries:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "   ```sql"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "   SELECT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pid, "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "now"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " pg_stat_activity"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "query_start"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " AS"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " duration, query"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "   FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pg_stat_activity"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "   WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " state"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " !="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'idle'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "   ORDER BY"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " duration "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "DESC"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "   LIMIT"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "common-fixes",
      children: "Common fixes"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Too many connections"
        }), ": Restart the connection pooler\n", createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word"
          },
          tabindex: "0",
          "data-language": "bash",
          children: createVNode(_components.code, {
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "kubectl"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " rollout"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " restart"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " deployment/pgbouncer"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Long-running query"
        }), ": Kill it (if safe)\n", createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word"
          },
          tabindex: "0",
          "data-language": "sql",
          children: createVNode(_components.code, {
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "SELECT"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " pg_terminate_backend("
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "pid"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ">"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ");"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "escalation",
      children: "Escalation"
    }), "\n", createVNode(_components.p, {
      children: "If not resolved in 15 min, page @database-team"
    }), "\n", createVNode(_components.p, {
      children: "The difference: specific commands, expected values, and clear escalation paths."
    }), "\n", createVNode(_components.h3, {
      id: "observability-for-incidents",
      children: "Observability for Incidents"
    }), "\n", createVNode(_components.p, {
      children: "During an incident, you need answers fast. Structure your observability around common questions:"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// What I want to know during an incident:"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " incidentQueries"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Is the problem getting worse or better?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  errorTrend: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'rate(http_errors_total[5m])'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // When did this start?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  changePoint: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'changes(deployment_timestamp[1h])'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // What's affected?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  affectedEndpoints: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'topk(10, sum by (endpoint) (http_errors_total))'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Is it one bad actor or widespread?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  errorsByUser: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'sum by (user_id) (http_errors_total)'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Build dashboards that answer these questions with one click, not five minutes of query writing."
    }), "\n", createVNode(_components.h2, {
      id: "building-sustainable-on-call",
      children: "Building Sustainable On-Call"
    }), "\n", createVNode(_components.h3, {
      id: "the-on-call-contract",
      children: "The On-Call Contract"
    }), "\n", createVNode(_components.p, {
      children: "Every team should have an explicit on-call contract:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "## On-Call Expectations"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Response time:**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " SEV1: Acknowledge within 5 minutes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " SEV2: Acknowledge within 15 minutes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " SEV3+: Next business day"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Compensation:**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $X per week of on-call"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Time off after incidents (1 hour off per hour of incident)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Support:**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Never expected to fix alone—escalation is encouraged"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " No blame for pages during off-hours"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Secondary on-call for backup"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Boundaries:**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " No on-call during PTO"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Maximum 1 week per month"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Quiet hours: 10pm-7am (SEV1 only)"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Making expectations explicit prevents burnout and resentment."
    }), "\n", createVNode(_components.h3, {
      id: "reducing-alert-fatigue",
      children: "Reducing Alert Fatigue"
    }), "\n", createVNode(_components.p, {
      children: "Alert fatigue is the silent killer of on-call effectiveness. Here’s how to fight it:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "The 80/20 rule for alerts:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "80% of pages should be actionable"
      }), "\n", createVNode(_components.li, {
        children: "If you’re ignoring alerts, delete them"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Weekly alert review:"
      })
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "## Alert Review - Week of Jan 15"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| Alert | Pages | Actionable | Action |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "|-------|-------|------------|--------|"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| High CPU | 12 | 2 | Raise threshold to 90% |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| Disk space | 8 | 8 | Keep |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| API latency | 15 | 3 | Add auto-scaling |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| Memory leak | 1 | 1 | Keep |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Decision:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Delete High CPU alert, implement auto-scaling for API"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "the-blameless-postmortem",
      children: "The Blameless Postmortem"
    }), "\n", createVNode(_components.p, {
      children: "Postmortems are where learning happens—or doesn’t. Here’s a template that works:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "## Incident: Payment Processing Outage"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Date:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " 2024-08-15"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Duration:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " 47 minutes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Severity:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " SEV1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Author:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#DBEDFF",
              textDecoration: "underline"
            },
            children: "Name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "### Summary"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Payment processing was unavailable for 47 minutes due to a "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "database connection pool exhaustion caused by a query regression "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "in the latest deployment."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "### Timeline"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " 14:23 - Deployment completed"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " 14:31 - First customer report"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " 14:35 - Alert fired, on-call paged"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " 14:42 - Root cause identified"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " 14:58 - Rollback completed"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " 15:10 - Full recovery confirmed"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "### Root Cause"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "A new query in the checkout flow was missing an index, causing "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "connections to be held for 30+ seconds instead of <100ms."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "### What Went Well"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Quick identification of root cause"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Rollback process worked smoothly"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Customer communication was timely"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "### What Could Be Improved"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Query performance wasn't caught in code review"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " No load testing for the new feature"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Alert fired 8 minutes after first customer report"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "### Action Items"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| Action | Owner | Due Date |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "|--------|-------|----------|"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| Add query performance CI check | @backend | 2024-08-22 |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| Implement synthetic monitoring | @sre | 2024-08-29 |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| Review alert thresholds | @on-call | 2024-08-18 |"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The key: focus on ", createVNode(_components.strong, {
        children: "systems"
      }), ", not people. “The deployment process allowed a slow query” not “John deployed a slow query.”"]
    }), "\n", createVNode(_components.h2, {
      id: "incident-communication",
      children: "Incident Communication"
    }), "\n", createVNode(_components.h3, {
      id: "internal-communication",
      children: "Internal Communication"
    }), "\n", createVNode(_components.p, {
      children: "During an incident, over-communicate:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "## Incident Update Template"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Status:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Investigating | Identified | Monitoring | Resolved"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Impact:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [Who is affected and how]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Current action:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [What we're doing right now]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Next update:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [When to expect the next update]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Example:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "🔴 "
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Status:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Identified"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Impact:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ~30% of checkout attempts failing"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Current action:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Rolling back deployment v2.3.4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              fontWeight: "bold"
            },
            children: "**Next update:**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " 10 minutes or when resolved"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "external-communication",
      children: "External Communication"
    }), "\n", createVNode(_components.p, {
      children: "For customer-facing incidents:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Do:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Acknowledge quickly, even if you don’t have details"
      }), "\n", createVNode(_components.li, {
        children: "Use plain language, not technical jargon"
      }), "\n", createVNode(_components.li, {
        children: "Provide regular updates, even if nothing changed"
      }), "\n", createVNode(_components.li, {
        children: "Share what you’re doing to prevent recurrence"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Don’t:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Blame third parties (even if it’s their fault)"
      }), "\n", createVNode(_components.li, {
        children: "Promise specific resolution times"
      }), "\n", createVNode(_components.li, {
        children: "Over-explain technical details"
      }), "\n", createVNode(_components.li, {
        children: "Disappear after resolution"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "measuring-incident-response",
      children: "Measuring Incident Response"
    }), "\n", createVNode(_components.h3, {
      id: "metrics-that-matter",
      children: "Metrics That Matter"
    }), "\n", createVNode(_components.p, {
      children: "Track these metrics monthly:"
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
            children: " incidentMetrics"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // How often are we having incidents?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  incidentCount: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'count by severity'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // How quickly do we respond?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  timeToAcknowledge: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'median time from alert to acknowledgment'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // How quickly do we fix things?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  timeToResolve: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'median time from alert to resolution'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Are we learning?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  repeatIncidents: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'incidents with same root cause as previous'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Is on-call sustainable?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pagesPerWeek: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'average pages per on-call shift'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "trending-in-the-right-direction",
      children: "Trending in the Right Direction"
    }), "\n", createVNode(_components.p, {
      children: "Good incident management shows:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Decreasing incident count over time"
      }), "\n", createVNode(_components.li, {
        children: "Stable or decreasing MTTR"
      }), "\n", createVNode(_components.li, {
        children: "Low repeat incident rate (< 10%)"
      }), "\n", createVNode(_components.li, {
        children: "Sustainable page volume (< 2 per night)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "lessons-learned",
      children: "Lessons Learned"
    }), "\n", createVNode(_components.p, {
      children: "After hundreds of incidents, here’s what I know for sure:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Preparation beats reaction"
        }), ". Time invested in runbooks and automation pays off 10x during incidents."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Communication is half the battle"
        }), ". Most incident stress comes from uncertainty, not the technical problem."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Blameless culture is non-negotiable."
        }), " The moment people fear blame, they stop reporting issues and sharing learnings."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "On-call sustainability matters."
        }), " Burned-out engineers make worse decisions and leave the company."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Every incident is a gift."
        }), " It’s a free stress test of your systems and processes. Learn from it."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Incident management isn’t about preventing all failures—that’s impossible. It’s about responding effectively when failures happen, learning from them, and building systems (both technical and human) that improve over time."
    }), "\n", createVNode(_components.p, {
      children: "The best incident response teams I’ve worked with share one trait: they treat incidents as opportunities to improve, not as failures to hide."
    }), "\n", createVNode(_components.h2, {
      id: "resources",
      children: "Resources"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://sre.google/sre-book/managing-incidents/",
          children: "Incident Management for Operations"
        }), " - Google SRE Book"]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://response.pagerduty.com/",
          children: "PagerDuty Incident Response Guide"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.learningfromincidents.io/",
          children: "Learning from Incidents"
        }), " - Community resources"]
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

const url = "src/content/writing/incident-management-lessons.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/writing/incident-management-lessons.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/writing/incident-management-lessons.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
