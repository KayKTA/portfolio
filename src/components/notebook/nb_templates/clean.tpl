{% extends 'lab/index.html.j2' %}

{% block header %}
{{ super() }}
<style>
`
/* global layout */
body { background: transparent !important; }
.container, .jp-Notebook { max-width: 980px; margin: 0 auto; background: none; }

/* headings */
h1,h2,h3 { font-weight: 600; }

/* code cells */
.input, .jp-Cell-inputWrapper, .input_area, .jp-InputPrompt {
  border-radius: 4px !important;
}
.input_area, .jp-InputArea-editor {
  background: rgba(2, 6, 23, 0.04) !important;
  border: 1px solid rgba(2, 6, 23, 0.08) !important;
}

/* outputs */
.output, .output_area, .jp-OutputArea, .jp-OutputArea-output {
  border-radius: 4px !important;
  border: 1px solid rgba(2, 6, 23, 0.08) !important;
}

/* prompts (In [1], Out[1]) — hide if you prefer */
.prompt, .input_prompt, .output_prompt,
.jp-InputPrompt, .jp-OutputPrompt { display: none !important; }

/* tables
table { border-collapse: collapse; width: 100%; }
th, td { padding: 6px 8px; border-bottom: 1px solid rgba(2,6,23,0.08); }
th { text-align: left; }
*/

/* images/plots */
img, canvas, svg { border-radius: 4px; }
`
</style>
{% endblock header %}
