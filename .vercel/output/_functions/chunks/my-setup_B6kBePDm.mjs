import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_ZuFn58mt.mjs';
import 'clsx';

const frontmatter = {
  "category": "tools",
  "items": [{
    "name": "Visual Studio Code",
    "description": "Primary code editor. Lightweight, extensible, and great TypeScript support.",
    "url": "https://code.visualstudio.com/"
  }, {
    "name": "iTerm2",
    "description": "Terminal emulator with split panes, search, and customization.",
    "url": "https://iterm2.com/"
  }, {
    "name": "Obsidian",
    "description": "Note-taking and knowledge management. Great for documenting decisions and learnings.",
    "url": "https://obsidian.md/"
  }, {
    "name": "Postman",
    "description": "API testing and documentation. Essential for working with REST APIs.",
    "url": "https://www.postman.com/"
  }, {
    "name": "TablePlus",
    "description": "Database GUI client. Clean interface and supports multiple databases.",
    "url": "https://tableplus.com/"
  }],
  "order": 1
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/uses/my-setup.mdx";
const file = "C:/Users/laila/MyNewPortfolio/case/src/content/uses/my-setup.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/laila/MyNewPortfolio/case/src/content/uses/my-setup.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
