import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "API Versioning Strategies That Actually Work",
  "description": "A practical comparison of API versioning approaches with recommendations based on real-world experience.",
  "publishDate": "2025-04-05T00:00:00.000Z",
  "tags": ["api-design", "versioning", "best-practices"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "why-version-apis",
    "text": "Why Version APIs?"
  }, {
    "depth": 2,
    "slug": "the-main-approaches",
    "text": "The Main Approaches"
  }, {
    "depth": 3,
    "slug": "url-path-versioning",
    "text": "URL Path Versioning"
  }, {
    "depth": 3,
    "slug": "query-parameter-versioning",
    "text": "Query Parameter Versioning"
  }, {
    "depth": 3,
    "slug": "header-versioning",
    "text": "Header Versioning"
  }, {
    "depth": 3,
    "slug": "date-based-versioning",
    "text": "Date-Based Versioning"
  }, {
    "depth": 2,
    "slug": "my-recommendation",
    "text": "My Recommendation"
  }, {
    "depth": 3,
    "slug": "the-strategy",
    "text": "The Strategy"
  }, {
    "depth": 3,
    "slug": "why-this-works",
    "text": "Why This Works"
  }, {
    "depth": 2,
    "slug": "making-changes-without-breaking-clients",
    "text": "Making Changes Without Breaking Clients"
  }, {
    "depth": 3,
    "slug": "safe-changes-no-version-bump",
    "text": "Safe Changes (No Version Bump)"
  }, {
    "depth": 3,
    "slug": "breaking-changes-require-version-bump",
    "text": "Breaking Changes (Require Version Bump)"
  }, {
    "depth": 2,
    "slug": "implementing-versioning",
    "text": "Implementing Versioning"
  }, {
    "depth": 3,
    "slug": "router-level-versioning",
    "text": "Router-Level Versioning"
  }, {
    "depth": 3,
    "slug": "controller-level-versioning",
    "text": "Controller-Level Versioning"
  }, {
    "depth": 3,
    "slug": "shared-logic-different-serialization",
    "text": "Shared Logic, Different Serialization"
  }, {
    "depth": 2,
    "slug": "deprecation-strategy",
    "text": "Deprecation Strategy"
  }, {
    "depth": 3,
    "slug": "communicate-early",
    "text": "Communicate Early"
  }, {
    "depth": 3,
    "slug": "provide-migration-guides",
    "text": "Provide Migration Guides"
  }, {
    "depth": 2,
    "slug": "common-mistakes",
    "text": "Common Mistakes"
  }, {
    "depth": 3,
    "slug": "too-many-versions",
    "text": "Too Many Versions"
  }, {
    "depth": 3,
    "slug": "inconsistent-versioning",
    "text": "Inconsistent Versioning"
  }, {
    "depth": 3,
    "slug": "no-deprecation-period",
    "text": "No Deprecation Period"
  }, {
    "depth": 3,
    "slug": "versioning-internal-apis",
    "text": "Versioning Internal APIs"
  }, {
    "depth": 2,
    "slug": "real-world-example",
    "text": "Real-World Example"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
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
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "“How should we version our API?” is a question that sparks surprisingly heated debates. After building and maintaining APIs used by thousands of developers, I’ve learned that the best approach depends on your context—but some strategies are clearly better than others."
    }), "\n", createVNode(_components.h2, {
      id: "why-version-apis",
      children: "Why Version APIs?"
    }), "\n", createVNode(_components.p, {
      children: "APIs are contracts. When you change an API, you risk breaking clients that depend on the old behavior. Versioning lets you:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Evolve your API without breaking existing clients"
      }), "\n", createVNode(_components.li, {
        children: "Deprecate old functionality gracefully"
      }), "\n", createVNode(_components.li, {
        children: "Support multiple client versions simultaneously"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "the-main-approaches",
      children: "The Main Approaches"
    }), "\n", createVNode(_components.h3, {
      id: "url-path-versioning",
      children: "URL Path Versioning"
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
            children: "GET /v1/users/123"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "GET /v2/users/123"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Pros:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Extremely clear and visible"
      }), "\n", createVNode(_components.li, {
        children: "Easy to route at load balancer level"
      }), "\n", createVNode(_components.li, {
        children: "Simple to implement"
      }), "\n", createVNode(_components.li, {
        children: "Easy to document"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Cons:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Clutters URLs"
      }), "\n", createVNode(_components.li, {
        children: "Can lead to code duplication"
      }), "\n", createVNode(_components.li, {
        children: "Makes it tempting to create too many versions"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "When to use:"
      }), " Public APIs, APIs with many external consumers, when you want maximum clarity."]
    }), "\n", createVNode(_components.h3, {
      id: "query-parameter-versioning",
      children: "Query Parameter Versioning"
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
            children: "GET /users/123?version=1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "GET /users/123?api-version=2023-01-15"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Pros:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Keeps URLs clean"
      }), "\n", createVNode(_components.li, {
        children: "Optional parameter (can default to latest)"
      }), "\n", createVNode(_components.li, {
        children: "Easy to add to existing APIs"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Cons:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Easy to forget"
      }), "\n", createVNode(_components.li, {
        children: "Can be cached incorrectly"
      }), "\n", createVNode(_components.li, {
        children: "Less visible in logs and documentation"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "When to use:"
      }), " Internal APIs, when you want versioning to be optional."]
    }), "\n", createVNode(_components.h3, {
      id: "header-versioning",
      children: "Header Versioning"
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
            children: "GET /users/123"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Accept: application/vnd.myapi.v1+json"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "GET /users/123"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "X-API-Version: 2"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Pros:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Clean URLs"
      }), "\n", createVNode(_components.li, {
        children: "Follows HTTP semantics (content negotiation)"
      }), "\n", createVNode(_components.li, {
        children: "Separates versioning from resource identification"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Cons:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Hidden from casual inspection"
      }), "\n", createVNode(_components.li, {
        children: "Harder to test in browser"
      }), "\n", createVNode(_components.li, {
        children: "More complex client implementation"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "When to use:"
      }), " When you care about REST purity, sophisticated API consumers."]
    }), "\n", createVNode(_components.h3, {
      id: "date-based-versioning",
      children: "Date-Based Versioning"
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
            children: "GET /users/123"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Stripe-Version: 2023-10-16"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Pros:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Clear timeline of changes"
      }), "\n", createVNode(_components.li, {
        children: "Encourages incremental evolution"
      }), "\n", createVNode(_components.li, {
        children: "No arbitrary version numbers"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Cons:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Requires tracking what changed when"
      }), "\n", createVNode(_components.li, {
        children: "Can be confusing (which date do I use?)"
      }), "\n", createVNode(_components.li, {
        children: "Harder to communicate major changes"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "When to use:"
      }), " APIs that evolve frequently with small changes (Stripe’s approach)."]
    }), "\n", createVNode(_components.h2, {
      id: "my-recommendation",
      children: "My Recommendation"
    }), "\n", createVNode(_components.p, {
      children: ["For most APIs, I recommend ", createVNode(_components.strong, {
        children: "URL path versioning with a twist"
      }), ":"]
    }), "\n", createVNode(_components.h3, {
      id: "the-strategy",
      children: "The Strategy"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Use URL versioning for major versions only"
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
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                children: "/v1/users"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                children: "/v2/users  # Only when breaking changes are unavoidable"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Evolve within versions using additive changes"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Add new fields (don’t remove old ones)"
          }), "\n", createVNode(_components.li, {
            children: "Add new endpoints"
          }), "\n", createVNode(_components.li, {
            children: "Add new optional parameters"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Use feature flags for gradual rollouts"
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
                children: "GET /v1/users/123?include=new_profile_fields"
              })
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "why-this-works",
      children: "Why This Works"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Clarity"
        }), ": Developers immediately see which version they’re using"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Stability"
        }), ": Major versions are rare, so clients don’t need to update often"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Flexibility"
        }), ": Additive changes let you evolve without breaking anyone"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "making-changes-without-breaking-clients",
      children: "Making Changes Without Breaking Clients"
    }), "\n", createVNode(_components.h3, {
      id: "safe-changes-no-version-bump",
      children: "Safe Changes (No Version Bump)"
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
            children: "// Adding a new optional field"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " User"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  id"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  email"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  avatar"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";  "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// New field, optional"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Adding a new endpoint"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "GET"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "v1"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "users"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "123"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "preferences  "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// New endpoint"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Adding a new optional parameter"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "GET"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "v1"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "users"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "include_inactive"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // New parameter"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "breaking-changes-require-version-bump",
      children: "Breaking Changes (Require Version Bump)"
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
            children: "// Removing a field"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// v1: { id, name, email }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// v2: { id, name }  // email removed"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Changing field type"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// v1: { age: \"25\" }  // string"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// v2: { age: 25 }    // number"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Changing endpoint behavior"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// v1: GET /users returns all users"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// v2: GET /users returns paginated users"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "implementing-versioning",
      children: "Implementing Versioning"
    }), "\n", createVNode(_components.h3, {
      id: "router-level-versioning",
      children: "Router-Level Versioning"
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
            children: "// Express example"
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
            children: " v1Router"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " express."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Router"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
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
            children: " v2Router"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " express."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Router"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "v1Router."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'/users/:id'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", v1UserController.get);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "v2Router."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'/users/:id'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", v2UserController.get);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "app."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "use"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'/v1'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", v1Router);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "app."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "use"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'/v2'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", v2Router);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "controller-level-versioning",
      children: "Controller-Level Versioning"
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
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserController"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  async"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getUser"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "req"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Request"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "res"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Response"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " version"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getVersion"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(req);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".userService."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "findById"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(req.params.id);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (version "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "      return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "serializeV1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(user));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "else"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "      return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "serializeV2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(user));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  private"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " serializeV1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "user"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " User"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
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
              color: "#E1E4E8"
            },
            children: "      id: user.id,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      name: user.name,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      email: user.email"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  private"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " serializeV2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "user"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " User"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
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
              color: "#E1E4E8"
            },
            children: "      id: user.id,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      fullName: user.name,  "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Renamed field"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      emailAddress: user.email,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      createdAt: user.createdAt  "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// New field"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
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
    }), "\n", createVNode(_components.h3, {
      id: "shared-logic-different-serialization",
      children: "Shared Logic, Different Serialization"
    }), "\n", createVNode(_components.p, {
      children: "The key is to share business logic while varying the API contract:"
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
            children: "// Shared service layer"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserService"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  async"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " findById"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "id"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "User"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "> {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Same logic for all versions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Version-specific serializers"
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
            children: " serializers"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  v1: "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserSerializerV1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  v2: "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserSerializerV2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Controller uses appropriate serializer"
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
            children: " serializer"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " serializers[version];"
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
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(serializer."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "serialize"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(user));"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "deprecation-strategy",
      children: "Deprecation Strategy"
    }), "\n", createVNode(_components.h3, {
      id: "communicate-early",
      children: "Communicate Early"
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
      "data-language": "http",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "HTTP"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1.1"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 200"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " OK"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "Deprecation"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Sun, 01 Jan 2025 00:00:00 GMT"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "Sunset"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Sun, 01 Jul 2025 00:00:00 GMT"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "Link"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " </v2/users>; rel=\"successor-version\""
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "provide-migration-guides",
      children: "Provide Migration Guides"
    }), "\n", createVNode(_components.p, {
      children: "Document exactly what changed and how to migrate:"
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
            children: "## Migrating from v1 to v2"
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
            children: "### User endpoint changes"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| v1 | v2 | Notes |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "|----|----|----|"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "`name`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "`fullName`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " | Renamed for clarity |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "`email`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "`emailAddress`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " | Renamed for clarity |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "| - | "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "`createdAt`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " | New field |"
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
            children: "### Code changes required"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "```diff"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "- const name = user.name;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "+ const name = user.fullName;"
          })
        })]
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
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "### Monitor Usage"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Track which versions are being used:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "```typescript"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "app.use((req, res, next) => {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  const version = extractVersion(req);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  metrics.increment('api.requests', { version });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  next();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", createVNode(_components.h3, {
      id: "too-many-versions",
      children: "Too Many Versions"
    }), "\n", createVNode(_components.p, {
      children: "If you have v1, v2, v3, v4, v5… you’re versioning too aggressively. Each version has maintenance cost."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Fix:"
      }), " Use additive changes within versions. Only bump for truly breaking changes."]
    }), "\n", createVNode(_components.h3, {
      id: "inconsistent-versioning",
      children: "Inconsistent Versioning"
    }), "\n", createVNode(_components.p, {
      children: "Different endpoints using different versioning schemes."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Fix:"
      }), " Pick one approach and stick with it across your entire API."]
    }), "\n", createVNode(_components.h3, {
      id: "no-deprecation-period",
      children: "No Deprecation Period"
    }), "\n", createVNode(_components.p, {
      children: "Removing old versions without warning."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Fix:"
      }), " Announce deprecation at least 6-12 months in advance. Monitor usage before removal."]
    }), "\n", createVNode(_components.h3, {
      id: "versioning-internal-apis",
      children: "Versioning Internal APIs"
    }), "\n", createVNode(_components.p, {
      children: "Adding versioning overhead to APIs only used by your own team."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Fix:"
      }), " Internal APIs can often just evolve with coordinated deployments."]
    }), "\n", createVNode(_components.h2, {
      id: "real-world-example",
      children: "Real-World Example"
    }), "\n", createVNode(_components.p, {
      children: "Here’s how I structured versioning for a payment API:"
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
            children: "/v1/payments          # Original API (2020)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "/v1/payments/intents  # Added 2021, no version bump"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "/v1/refunds           # Added 2021, no version bump"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "/v2/payments          # Breaking changes (2023)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "                      # - Changed amount from cents to decimal"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "                      # - Restructured error responses"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "                      # - Removed deprecated fields"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Timeline:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "2023-01: Announced v2, v1 deprecation"
      }), "\n", createVNode(_components.li, {
        children: "2023-06: v2 released, v1 still supported"
      }), "\n", createVNode(_components.li, {
        children: "2024-01: v1 sunset warning emails"
      }), "\n", createVNode(_components.li, {
        children: "2024-06: v1 removed"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "API versioning doesn’t have to be complicated:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Use URL path versioning for clarity"
      }), "\n", createVNode(_components.li, {
        children: "Evolve within versions using additive changes"
      }), "\n", createVNode(_components.li, {
        children: "Only create new versions for breaking changes"
      }), "\n", createVNode(_components.li, {
        children: "Deprecate gracefully with long notice periods"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The goal is to give your API consumers stability while allowing your API to evolve. A well-versioned API builds trust and makes integration easier for everyone."
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

const url = "src/content/writing/api-versioning-strategies.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/writing/api-versioning-strategies.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/writing/api-versioning-strategies.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
