import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Zero-Downtime Database Migrations: A Practical Guide",
  "description": "How to evolve your database schema without taking your application offline, with real examples from PostgreSQL migrations.",
  "publishDate": "2025-10-20T00:00:00.000Z",
  "tags": ["database", "migrations", "postgresql", "devops"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "the-golden-rule",
    "text": "The Golden Rule"
  }, {
    "depth": 2,
    "slug": "safe-operations",
    "text": "Safe Operations"
  }, {
    "depth": 3,
    "slug": "adding-a-nullable-column",
    "text": "Adding a Nullable Column"
  }, {
    "depth": 3,
    "slug": "adding-an-index-concurrently",
    "text": "Adding an Index Concurrently"
  }, {
    "depth": 3,
    "slug": "adding-a-new-table",
    "text": "Adding a New Table"
  }, {
    "depth": 2,
    "slug": "dangerous-operations",
    "text": "Dangerous Operations"
  }, {
    "depth": 3,
    "slug": "renaming-a-column",
    "text": "Renaming a Column"
  }, {
    "depth": 3,
    "slug": "adding-a-not-null-constraint",
    "text": "Adding a NOT NULL Constraint"
  }, {
    "depth": 3,
    "slug": "changing-column-type",
    "text": "Changing Column Type"
  }, {
    "depth": 2,
    "slug": "large-table-migrations",
    "text": "Large Table Migrations"
  }, {
    "depth": 3,
    "slug": "batched-backfills",
    "text": "Batched Backfills"
  }, {
    "depth": 3,
    "slug": "monitoring-during-migrations",
    "text": "Monitoring During Migrations"
  }, {
    "depth": 2,
    "slug": "testing-migrations",
    "text": "Testing Migrations"
  }, {
    "depth": 3,
    "slug": "local-testing",
    "text": "Local Testing"
  }, {
    "depth": 3,
    "slug": "staging-testing",
    "text": "Staging Testing"
  }, {
    "depth": 3,
    "slug": "production-dry-run",
    "text": "Production Dry Run"
  }, {
    "depth": 2,
    "slug": "rollback-strategy",
    "text": "Rollback Strategy"
  }, {
    "depth": 2,
    "slug": "real-example-adding-a-foreign-key",
    "text": "Real Example: Adding a Foreign Key"
  }, {
    "depth": 2,
    "slug": "tools-and-automation",
    "text": "Tools and Automation"
  }, {
    "depth": 3,
    "slug": "migration-linters",
    "text": "Migration Linters"
  }, {
    "depth": 3,
    "slug": "deployment-integration",
    "text": "Deployment Integration"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "“We need to take the site down for maintenance” is a phrase that should be extinct in 2024. Yet I still see teams scheduling downtime for database migrations that could be done safely online."
    }), "\n", createVNode(_components.p, {
      children: "This guide covers the patterns I use to migrate databases without downtime, even for tables with millions of rows."
    }), "\n", createVNode(_components.h2, {
      id: "the-golden-rule",
      children: "The Golden Rule"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Never make a change that’s incompatible with the currently running application code."
      })
    }), "\n", createVNode(_components.p, {
      children: "This means migrations happen in multiple phases:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Deploy code that works with both old and new schema"
      }), "\n", createVNode(_components.li, {
        children: "Run the migration"
      }), "\n", createVNode(_components.li, {
        children: "Deploy code that only works with new schema"
      }), "\n", createVNode(_components.li, {
        children: "Clean up (optional)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "safe-operations",
      children: "Safe Operations"
    }), "\n", createVNode(_components.p, {
      children: "These operations are generally safe to run without downtime:"
    }), "\n", createVNode(_components.h3, {
      id: "adding-a-nullable-column",
      children: "Adding a Nullable Column"
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ADD"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " COLUMN middle_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "VARCHAR"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This is safe because:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Existing code doesn’t know about the column (ignores it)"
      }), "\n", createVNode(_components.li, {
        children: "New code can handle NULL values"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "adding-an-index-concurrently",
      children: "Adding an Index Concurrently"
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "CREATE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " INDEX"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " CONCURRENTLY"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " idx_users_email "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ON"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users(email);"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "CONCURRENTLY"
      }), " keyword is crucial—without it, the table is locked during index creation."]
    }), "\n", createVNode(_components.h3, {
      id: "adding-a-new-table",
      children: "Adding a New Table"
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "CREATE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " user_preferences"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  user_id "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "INTEGER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " REFERENCES"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users(id),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  preferences JSONB"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "New tables don’t affect existing code."
    }), "\n", createVNode(_components.h2, {
      id: "dangerous-operations",
      children: "Dangerous Operations"
    }), "\n", createVNode(_components.p, {
      children: "These require careful handling:"
    }), "\n", createVNode(_components.h3, {
      id: "renaming-a-column",
      children: "Renaming a Column"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Wrong way"
      }), " (causes downtime):"]
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users RENAME COLUMN "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TO"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " full_name;"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Right way"
      }), " (zero downtime):"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Add new column:"
      }), "\n"]
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ADD"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " COLUMN full_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "VARCHAR"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: "Deploy code that writes to both columns:"
      }), "\n"]
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
            children: "await"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " db."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "query"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  'UPDATE users SET name = $1, full_name = $1 WHERE id = $2'"
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
            children: "  [name, userId]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: "Backfill existing data:"
      }), "\n"]
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "UPDATE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "SET"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " full_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " full_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "IS"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " NULL"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Deploy code that reads from new column, writes to both"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Deploy code that only uses new column"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Drop old column:"
        }), "\n"]
      }), "\n"]
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "DROP"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " COLUMN "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "adding-a-not-null-constraint",
      children: "Adding a NOT NULL Constraint"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Wrong way"
      }), ":"]
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " COLUMN email "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "SET"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " NOT NULL"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This scans the entire table and locks it."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Right way"
      }), ":"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Add a check constraint (doesn’t lock):"
      }), "\n"]
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ADD"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " CONSTRAINT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users_email_not_null "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  CHECK"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (email "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "IS NOT NULL"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "NOT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " VALID;"
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: "Validate the constraint (scans but doesn’t lock):"
      }), "\n"]
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users VALIDATE "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "CONSTRAINT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users_email_not_null;"
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: "Convert to NOT NULL (instant, uses existing constraint):"
      }), "\n"]
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " COLUMN email "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "SET"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " NOT NULL"
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
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "DROP"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " CONSTRAINT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " users_email_not_null;"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "changing-column-type",
      children: "Changing Column Type"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Wrong way"
      }), ":"]
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " orders "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " COLUMN amount "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "TYPE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " DECIMAL"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Right way"
      }), ": Same pattern as renaming—add new column, migrate data, switch over."]
    }), "\n", createVNode(_components.h2, {
      id: "large-table-migrations",
      children: "Large Table Migrations"
    }), "\n", createVNode(_components.p, {
      children: "For tables with millions of rows, even “safe” operations need care."
    }), "\n", createVNode(_components.h3, {
      id: "batched-backfills",
      children: "Batched Backfills"
    }), "\n", createVNode(_components.p, {
      children: "Never update millions of rows in one transaction:"
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
            children: "async"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " backfillInBatches"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "batchSize"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1000"
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
            children: "  let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " processed "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  while"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: " result"
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
              color: "#E1E4E8"
            },
            children: " db."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "query"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      UPDATE users "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      SET full_name = name "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      WHERE id IN ("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        SELECT id FROM users "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        WHERE full_name IS NULL "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        LIMIT $1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      RETURNING id"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    `"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", [batchSize]);"
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
              color: "#E1E4E8"
            },
            children: "    processed "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " result.rowCount;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`Processed ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "processed"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "} rows`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
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
            children: " (result.rowCount "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " batchSize) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "break"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Small delay to reduce load"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    await"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " sleep"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
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
      id: "monitoring-during-migrations",
      children: "Monitoring During Migrations"
    }), "\n", createVNode(_components.p, {
      children: "Watch these metrics:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Database CPU and I/O"
      }), "\n", createVNode(_components.li, {
        children: "Replication lag"
      }), "\n", createVNode(_components.li, {
        children: "Query latency"
      }), "\n", createVNode(_components.li, {
        children: "Lock wait times"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "testing-migrations",
      children: "Testing Migrations"
    }), "\n", createVNode(_components.h3, {
      id: "local-testing",
      children: "Local Testing"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Dump production schema (not data)"
      }), "\n", createVNode(_components.li, {
        children: "Apply migration locally"
      }), "\n", createVNode(_components.li, {
        children: "Run application tests"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "staging-testing",
      children: "Staging Testing"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Restore recent production backup to staging"
      }), "\n", createVNode(_components.li, {
        children: "Run migration"
      }), "\n", createVNode(_components.li, {
        children: "Verify application works"
      }), "\n", createVNode(_components.li, {
        children: "Check migration duration"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "production-dry-run",
      children: "Production Dry Run"
    }), "\n", createVNode(_components.p, {
      children: "For critical migrations:"
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "BEGIN"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-- Run migration"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-- Check results"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ROLLBACK"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "rollback-strategy",
      children: "Rollback Strategy"
    }), "\n", createVNode(_components.p, {
      children: "Always have a rollback plan:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Additive changes"
        }), ": Usually don’t need rollback (new columns are ignored)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data migrations"
        }), ": Keep old column until confident"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Destructive changes"
        }), ": Have a restore plan"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "real-example-adding-a-foreign-key",
      children: "Real Example: Adding a Foreign Key"
    }), "\n", createVNode(_components.p, {
      children: ["We needed to add a foreign key from ", createVNode(_components.code, {
        children: "orders"
      }), " to ", createVNode(_components.code, {
        children: "customers"
      }), " on a table with 50M rows."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Approach"
      }), ":"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Add constraint without validation:"
      }), "\n"]
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " orders "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ADD"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " CONSTRAINT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " fk_orders_customer "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "FOREIGN KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (customer_id) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "REFERENCES"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " customers(id) "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "NOT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " VALID;"
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: "Validate in batches during low-traffic period:"
      }), "\n"]
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
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ALTER"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " orders VALIDATE "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "CONSTRAINT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " fk_orders_customer;"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Result"
      }), ": Zero downtime, completed in 45 minutes during normal traffic."]
    }), "\n", createVNode(_components.h2, {
      id: "tools-and-automation",
      children: "Tools and Automation"
    }), "\n", createVNode(_components.h3, {
      id: "migration-linters",
      children: "Migration Linters"
    }), "\n", createVNode(_components.p, {
      children: "Use tools that catch dangerous patterns:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://github.com/ankane/strong_migrations",
          children: "strong_migrations"
        }), " (Ruby)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://github.com/sbdchd/squawk",
          children: "squawk"
        }), " (PostgreSQL)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "deployment-integration",
      children: "Deployment Integration"
    }), "\n", createVNode(_components.p, {
      children: "Make migrations part of your deployment pipeline:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Run migrations before deploying new code"
      }), "\n", createVNode(_components.li, {
        children: "Verify migrations succeeded"
      }), "\n", createVNode(_components.li, {
        children: "Deploy new application code"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Zero-downtime migrations require more planning and multiple deployments, but the payoff is worth it. Your users don’t experience interruptions, and you can deploy with confidence at any time."
    }), "\n", createVNode(_components.p, {
      children: "The key principles:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Never break compatibility with running code"
      }), "\n", createVNode(_components.li, {
        children: "Make changes in small, reversible steps"
      }), "\n", createVNode(_components.li, {
        children: "Test thoroughly before production"
      }), "\n", createVNode(_components.li, {
        children: "Monitor during and after migrations"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Start treating database changes with the same care as application code, and “scheduled maintenance” becomes a thing of the past."
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

const url = "src/content/writing/database-migrations-zero-downtime.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/writing/database-migrations-zero-downtime.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/writing/database-migrations-zero-downtime.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
