import { Marked } from 'marked';

// Habit descriptions are user content shown on public profiles, so the rendered
// HTML must never contain raw tags or script-capable URLs.
const SAFE_LINK = /^(https?:|mailto:)/i;
const SAFE_IMAGE = /^https:/i;

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const md = new Marked({
  async: false,
  renderer: {
    // Show raw HTML as literal text instead of injecting it.
    html: ({ text }) => escapeHtml(text),
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      if (!SAFE_LINK.test(href.trim())) return text;
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : '';
      return `<a href="${escapeHtml(href.trim())}"${titleAttr} target="_blank" rel="noopener noreferrer nofollow">${text}</a>`;
    },
    image({ href, title, text }) {
      if (!SAFE_IMAGE.test(href.trim())) return escapeHtml(text);
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : '';
      return `<img src="${escapeHtml(href.trim())}" alt="${escapeHtml(text)}"${titleAttr} loading="lazy">`;
    },
  },
});

export const renderMarkdown = (text: string) => md.parse(text) as string;
