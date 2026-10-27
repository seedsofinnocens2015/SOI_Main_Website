/**
 * Extracts FAQ items from blog HTML content so they can be rendered
 * using the standard FAQAccordion component instead of plain headings and paragraphs.
 *
 * Supported patterns:
 * 1) <h3>Frequently Asked Questions</h3> followed by <h4> or <h5> questions
 * 2) <h3>Frequently Asked Questions</h3> followed by <p><strong>1. Question</strong><br/>Answer</p>
 * 3) <p><strong>Frequently Asked Questions</strong></p> followed by <h4> questions
 */
export function extractFaqsFromBlogHtml(html) {
  if (!html || typeof html !== 'string') {
    return { beforeHtml: html, faqs: [], afterHtml: '' };
  }

  // Heading pattern matching "Frequently Asked Questions"
  const faqHeadingRegex = /(?:<(h[2-4])[^>]*>([\s\S]*?Frequently Asked Questions[\s\S]*?)<\/\1>|<p[^>]*>\s*<strong>\s*Frequently Asked Questions\s*<\/strong>\s*<\/p>)/i;
  const match = html.match(faqHeadingRegex);
  if (!match) {
    return { beforeHtml: html, faqs: [], afterHtml: '' };
  }

  const headingIndex = match.index;
  const beforeHtml = html.substring(0, headingIndex);
  const remaining = html.substring(headingIndex + match[0].length);

  // Check if there is another major section heading (h2 or h3) after FAQs
  const nextMajorHeadingRegex = /<(h[23])[^>]*>[\s\S]*?<\/\1>/i;
  const nextMatch = remaining.match(nextMajorHeadingRegex);

  const faqContent = nextMatch ? remaining.substring(0, nextMatch.index) : remaining;
  const afterHtml = nextMatch ? remaining.substring(nextMatch.index) : '';

  const faqs = [];

  // Pattern A: <h4> or <h5> questions
  if (/<(h[45])[^>]*>/i.test(faqContent)) {
    const itemRegex = /<(h[45])[^>]*>([\s\S]*?)<\/\1>([\s\S]*?)(?=(?:<(?:h[45])[^>]*>|$))/gi;
    let item;
    while ((item = itemRegex.exec(faqContent)) !== null) {
      const question = item[2].replace(/<[^>]+>/g, '').trim();
      const answer = item[3].trim();
      if (question) {
        faqs.push({ question, answer });
      }
    }
  } else {
    // Pattern B: <p><strong>Question</strong><br/>Answer</p> or consecutive <p>
    const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
    let pMatch;
    let currentQ = '';
    let currentA = [];

    while ((pMatch = pRegex.exec(faqContent)) !== null) {
      const pInner = pMatch[1].trim();
      const strongMatch = pInner.match(/^<strong>([\s\S]*?)<\/strong>(?:<br\s*\/?>)?([\s\S]*)$/i);
      if (strongMatch) {
        if (currentQ) {
          faqs.push({ question: currentQ, answer: currentA.join(' ') });
          currentA = [];
        }
        currentQ = strongMatch[1].replace(/<[^>]+>/g, '').trim();
        if (strongMatch[2].trim()) {
          currentA.push(strongMatch[2].trim());
        }
      } else if (/^\d+\.\s+/i.test(pInner.replace(/<[^>]+>/g, '').trim()) && !currentQ) {
        currentQ = pInner.replace(/<[^>]+>/g, '').trim();
      } else if (currentQ) {
        currentA.push(pInner);
      }
    }
    if (currentQ) {
      faqs.push({ question: currentQ, answer: currentA.join(' ') });
    }
  }

  return { beforeHtml, faqs, afterHtml };
}
