function convertMarkdown() {
    // 1. Get the value from the input element
    const markdownText = document.getElementById('markdown-input').value;
    let html = markdownText;

    // 2. Headings (H1 - H3)
    // We use the 'm' flag for multiline matching so ^ matches start of lines
    html = html.replace(/^ *### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^ *## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^ *# (.*$)/gim, '<h1>$1</h1>');

    // 3. Blockquotes
    html = html.replace(/^ *> (.*$)/gim, '<blockquote>$1</blockquote>');

    // 4. Images
    // IMPORTANT: Images must be processed BEFORE links to avoid conflict
    // Pattern: ![alt](src)
    html = html.replace(/!\[([^\]]*)\]\(([^)]*)\)/gim, '<img alt="$1" src="$2" />');

    // 5. Links
    // Pattern: [text](href)
    html = html.replace(/\[([^\]]*)\]\(([^)]*)\)/gim, '<a href="$2">$1</a>');

    // 6. Bold
    // IMPORTANT: Bold must be processed BEFORE italics
    // Pattern: **text** or __text__
    html = html.replace(/\*\*([^*]+)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/__([^_]+)__/gim, '<strong>$1</strong>');

    // 7. Italic
    // Pattern: *text* or _text_
    html = html.replace(/\*([^*]+)\*/gim, '<em>$1</em>');
    html = html.replace(/_([^_]+)_/gim, '<em>$1</em>');

    return html;
}

// Event Listener Setup
const inputElement = document.getElementById('markdown-input');
const htmlOutputElement = document.getElementById('html-output');
const previewElement = document.getElementById('preview');

inputElement.addEventListener('input', () => {
    const htmlCode = convertMarkdown();

    // Update raw HTML display
    htmlOutputElement.innerText = htmlCode;

    // Update rendered preview
    previewElement.innerHTML = htmlCode;
});