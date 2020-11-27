export default [
  {
    "name": "azimuth",
    "values": "<angle> | [[ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards | inherit",
    "initial": "center",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "background-attachment",
    "values": "scroll | fixed | inherit",
    "initial": "scroll",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "background-color",
    "values": "<color> | transparent | inherit",
    "initial": "transparent",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "background-image",
    "values": "<uri> | none | inherit",
    "initial": "none",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "background-position",
    "values": "[ [ <percentage> | <length> | left | center | right ] [ <percentage> | <length> | top | center | bottom ]? ] | [ [ left | center | right ] || [ top | center | bottom ] ] | inherit",
    "initial": "0% 0%",
    "appliesTo": "",
    "inherited": false,
    "percentages": "refer to the size of the box itself",
    "media": "visual"
  },
  {
    "name": "background-repeat",
    "values": "repeat | repeat-x | repeat-y | no-repeat | inherit",
    "initial": "repeat",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "background",
    "values": "['background-color' || 'background-image' || 'background-repeat' || 'background-attachment' || 'background-position'] | inherit",
    "initial": "see individual properties",
    "appliesTo": "",
    "inherited": false,
    "percentages": "allowed on 'background-position'",
    "media": "visual"
  },
  {
    "name": "border-collapse",
    "values": "collapse | separate | inherit",
    "initial": "separate",
    "appliesTo": "'table' and 'inline-table' elements",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "border-color",
    "values": "[ <color> | transparent ]{1,4} | inherit",
    "initial": "see individual properties",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "border-spacing",
    "values": "<length> <length>? | inherit",
    "initial": "0",
    "appliesTo": "'table' and 'inline-table' elements",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "border-style",
    "values": "<border-style>{1,4} | inherit",
    "initial": "see individual properties",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "border-top border-right border-bottom border-left",
    "values": "[ <border-width> || <border-style> || 'border-top-color' ] | inherit",
    "initial": "see individual properties",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "border-top-color border-right-color border-bottom-color border-left-color",
    "values": "<color> | transparent | inherit",
    "initial": "the value of the 'color' property",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "border-top-style border-right-style border-bottom-style border-left-style",
    "values": "<border-style> | inherit",
    "initial": "none",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "border-top-width border-right-width border-bottom-width border-left-width",
    "values": "<border-width> | inherit",
    "initial": "medium",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "border-width",
    "values": "<border-width>{1,4} | inherit",
    "initial": "see individual properties",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "border",
    "values": "[ <border-width> || <border-style> || 'border-top-color' ] | inherit",
    "initial": "see individual properties",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "bottom",
    "values": "<length> | <percentage> | auto | inherit",
    "initial": "auto",
    "appliesTo": "positioned elements",
    "inherited": false,
    "percentages": "refer to height of containing block",
    "media": "visual"
  },
  {
    "name": "caption-side",
    "values": "top | bottom | inherit",
    "initial": "top",
    "appliesTo": "'table-caption' elements",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "clear",
    "values": "none | left | right | both | inherit",
    "initial": "none",
    "appliesTo": "block-level elements",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "clip",
    "values": "<shape> | auto | inherit",
    "initial": "auto",
    "appliesTo": "absolutely positioned elements",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "color",
    "values": "<color> | inherit",
    "initial": "depends on user agent",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "content",
    "values": "normal | none | [ <string> | <uri> | <counter> | attr(<identifier>) | open-quote | close-quote | no-open-quote | no-close-quote ]+ | inherit",
    "initial": "normal",
    "appliesTo": ":before and :after pseudo-elements",
    "inherited": false,
    "percentages": "",
    "media": "all"
  },
  {
    "name": "counter-increment",
    "values": "[ <identifier> <integer>? ]+ | none | inherit",
    "initial": "none",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "all"
  },
  {
    "name": "counter-reset",
    "values": "[ <identifier> <integer>? ]+ | none | inherit",
    "initial": "none",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "all"
  },
  {
    "name": "cue-after",
    "values": "<uri> | none | inherit",
    "initial": "none",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "cue-before",
    "values": "<uri> | none | inherit",
    "initial": "none",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "cue",
    "values": "[ 'cue-before' || 'cue-after' ] | inherit",
    "initial": "see individual properties",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "cursor",
    "values": "[ [<uri> ,]* [ auto | crosshair | default | pointer | move | e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize | text | wait | help | progress ] ] | inherit",
    "initial": "auto",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "visual, interactive"
  },
  {
    "name": "direction",
    "values": "ltr | rtl | inherit",
    "initial": "ltr",
    "appliesTo": "all elements, but see prose",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "display",
    "values": "inline | block | list-item | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | none | inherit",
    "initial": "inline",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "all"
  },
  {
    "name": "elevation",
    "values": "<angle> | below | level | above | higher | lower | inherit",
    "initial": "level",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "empty-cells",
    "values": "show | hide | inherit",
    "initial": "show",
    "appliesTo": "'table-cell' elements",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "float",
    "values": "left | right | none | inherit",
    "initial": "none",
    "appliesTo": "all, but see 9.7",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "font-family",
    "values": "[[ <family-name> | <generic-family> ] [, [ <family-name>| <generic-family>] ]* ] | inherit",
    "initial": "depends on user agent",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "font-size",
    "values": "<absolute-size> | <relative-size> | <length> | <percentage> | inherit",
    "initial": "medium",
    "appliesTo": "",
    "inherited": true,
    "percentages": "refer to inherited font size",
    "media": "visual"
  },
  {
    "name": "font-style",
    "values": "normal | italic | oblique | inherit",
    "initial": "normal",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "font-variant",
    "values": "normal | small-caps | inherit",
    "initial": "normal",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "font-weight",
    "values": "normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | inherit",
    "initial": "normal",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "font",
    "values": "[ [ 'font-style' || 'font-variant' || 'font-weight' ]? 'font-size' [ / 'line-height' ]? 'font-family' ] | caption | icon | menu | message-box | small-caption | status-bar | inherit",
    "initial": "see individual properties",
    "appliesTo": "",
    "inherited": true,
    "percentages": "see individual properties",
    "media": "visual"
  },
  {
    "name": "height",
    "values": "<length> | <percentage> | auto | inherit",
    "initial": "auto",
    "appliesTo": "all elements but non-replaced inline elements, table columns, and column groups",
    "inherited": false,
    "percentages": "see prose",
    "media": "visual"
  },
  {
    "name": "left",
    "values": "<length> | <percentage> | auto | inherit",
    "initial": "auto",
    "appliesTo": "positioned elements",
    "inherited": false,
    "percentages": "refer to width of containing block",
    "media": "visual"
  },
  {
    "name": "letter-spacing",
    "values": "normal | <length> | inherit",
    "initial": "normal",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "line-height",
    "values": "normal | <number> | <length> | <percentage> | inherit",
    "initial": "normal",
    "appliesTo": "",
    "inherited": true,
    "percentages": "refer to the font size of the element itself",
    "media": "visual"
  },
  {
    "name": "list-style-image",
    "values": "<uri> | none | inherit",
    "initial": "none",
    "appliesTo": "elements with 'display: list-item'",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "list-style-position",
    "values": "inside | outside | inherit",
    "initial": "outside",
    "appliesTo": "elements with 'display: list-item'",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "list-style-type",
    "values": "disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none | inherit",
    "initial": "disc",
    "appliesTo": "elements with 'display: list-item'",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "list-style",
    "values": "[ 'list-style-type' || 'list-style-position' || 'list-style-image' ] | inherit",
    "initial": "see individual properties",
    "appliesTo": "elements with 'display: list-item'",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "margin-right margin-left",
    "values": "<margin-width> | inherit",
    "initial": "0",
    "appliesTo": "all elements except elements with table display types other than table-caption, table and inline-table",
    "inherited": false,
    "percentages": "refer to width of containing block",
    "media": "visual"
  },
  {
    "name": "margin-top margin-bottom",
    "values": "<margin-width> | inherit",
    "initial": "0",
    "appliesTo": "all elements except elements with table display types other than table-caption, table and inline-table",
    "inherited": false,
    "percentages": "refer to width of containing block",
    "media": "visual"
  },
  {
    "name": "margin",
    "values": "<margin-width>{1,4} | inherit",
    "initial": "see individual properties",
    "appliesTo": "all elements except elements with table display types other than table-caption, table and inline-table",
    "inherited": false,
    "percentages": "refer to width of containing block",
    "media": "visual"
  },
  {
    "name": "max-height",
    "values": "<length> | <percentage> | none | inherit",
    "initial": "none",
    "appliesTo": "all elements but non-replaced inline elements, table columns, and column groups",
    "inherited": false,
    "percentages": "see prose",
    "media": "visual"
  },
  {
    "name": "max-width",
    "values": "<length> | <percentage> | none | inherit",
    "initial": "none",
    "appliesTo": "all elements but non-replaced inline elements, table rows, and row groups",
    "inherited": false,
    "percentages": "refer to width of containing block",
    "media": "visual"
  },
  {
    "name": "min-height",
    "values": "<length> | <percentage> | inherit",
    "initial": "0",
    "appliesTo": "all elements but non-replaced inline elements, table columns, and column groups",
    "inherited": false,
    "percentages": "see prose",
    "media": "visual"
  },
  {
    "name": "min-width",
    "values": "<length> | <percentage> | inherit",
    "initial": "0",
    "appliesTo": "all elements but non-replaced inline elements, table rows, and row groups",
    "inherited": false,
    "percentages": "refer to width of containing block",
    "media": "visual"
  },
  {
    "name": "orphans",
    "values": "<integer> | inherit",
    "initial": "2",
    "appliesTo": "block container elements",
    "inherited": true,
    "percentages": "",
    "media": "visual, paged"
  },
  {
    "name": "outline-color",
    "values": "<color> | invert | inherit",
    "initial": "invert",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual, interactive"
  },
  {
    "name": "outline-style",
    "values": "<border-style> | inherit",
    "initial": "none",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual, interactive"
  },
  {
    "name": "outline-width",
    "values": "<border-width> | inherit",
    "initial": "medium",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual, interactive"
  },
  {
    "name": "outline",
    "values": "[ 'outline-color' || 'outline-style' || 'outline-width' ] | inherit",
    "initial": "see individual properties",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual, interactive"
  },
  {
    "name": "overflow",
    "values": "visible | hidden | scroll | auto | inherit",
    "initial": "visible",
    "appliesTo": "block containers and boxes that establish a formatting context",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "padding-top padding-right padding-bottom padding-left",
    "values": "<padding-width> | inherit",
    "initial": "0",
    "appliesTo": "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column",
    "inherited": false,
    "percentages": "refer to width of containing block",
    "media": "visual"
  },
  {
    "name": "padding",
    "values": "<padding-width>{1,4} | inherit",
    "initial": "see individual properties",
    "appliesTo": "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column",
    "inherited": false,
    "percentages": "refer to width of containing block",
    "media": "visual"
  },
  {
    "name": "page-break-after",
    "values": "auto | always | avoid | left | right | inherit",
    "initial": "auto",
    "appliesTo": "block-level elements (but see text)",
    "inherited": false,
    "percentages": "",
    "media": "visual, paged"
  },
  {
    "name": "page-break-before",
    "values": "auto | always | avoid | left | right | inherit",
    "initial": "auto",
    "appliesTo": "block-level elements (but see text)",
    "inherited": false,
    "percentages": "",
    "media": "visual, paged"
  },
  {
    "name": "page-break-inside",
    "values": "avoid | auto | inherit",
    "initial": "auto",
    "appliesTo": "block-level elements (but see text)",
    "inherited": false,
    "percentages": "",
    "media": "visual, paged"
  },
  {
    "name": "pause-after",
    "values": "<time> | <percentage> | inherit",
    "initial": "0",
    "appliesTo": "",
    "inherited": false,
    "percentages": "see prose",
    "media": "aural"
  },
  {
    "name": "pause-before",
    "values": "<time> | <percentage> | inherit",
    "initial": "0",
    "appliesTo": "",
    "inherited": false,
    "percentages": "see prose",
    "media": "aural"
  },
  {
    "name": "pause",
    "values": "[ [<time> | <percentage>]{1,2} ] | inherit",
    "initial": "see individual properties",
    "appliesTo": "",
    "inherited": false,
    "percentages": "see descriptions of 'pause-before' and 'pause-after'",
    "media": "aural"
  },
  {
    "name": "pitch-range",
    "values": "<number> | inherit",
    "initial": "50",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "pitch",
    "values": "<frequency> | x-low | low | medium | high | x-high | inherit",
    "initial": "medium",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "play-during",
    "values": "<uri> [ mix || repeat ]? | auto | none | inherit",
    "initial": "auto",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "position",
    "values": "static | relative | absolute | fixed | inherit",
    "initial": "static",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "quotes",
    "values": "[<string> <string>]+ | none | inherit",
    "initial": "depends on user agent",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "richness",
    "values": "<number> | inherit",
    "initial": "50",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "right",
    "values": "<length> | <percentage> | auto | inherit",
    "initial": "auto",
    "appliesTo": "positioned elements",
    "inherited": false,
    "percentages": "refer to width of containing block",
    "media": "visual"
  },
  {
    "name": "speak-header",
    "values": "once | always | inherit",
    "initial": "once",
    "appliesTo": "elements that have table header information",
    "inherited": true,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "speak-numeral",
    "values": "digits | continuous | inherit",
    "initial": "continuous",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "speak-punctuation",
    "values": "code | none | inherit",
    "initial": "none",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "speak",
    "values": "normal | none | spell-out | inherit",
    "initial": "normal",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "speech-rate",
    "values": "<number> | x-slow | slow | medium | fast | x-fast | faster | slower | inherit",
    "initial": "medium",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "stress",
    "values": "<number> | inherit",
    "initial": "50",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "table-layout",
    "values": "auto | fixed | inherit",
    "initial": "auto",
    "appliesTo": "'table' and 'inline-table' elements",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "text-align",
    "values": "left | right | center | justify | inherit",
    "initial": "a nameless value that acts as 'left' if 'direction' is 'ltr', 'right' if 'direction' is 'rtl'",
    "appliesTo": "block containers",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "text-decoration",
    "values": "none | [ underline || overline || line-through || blink ] | inherit",
    "initial": "none",
    "appliesTo": "",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "text-indent",
    "values": "<length> | <percentage> | inherit",
    "initial": "0",
    "appliesTo": "block containers",
    "inherited": true,
    "percentages": "refer to width of containing block",
    "media": "visual"
  },
  {
    "name": "text-transform",
    "values": "capitalize | uppercase | lowercase | none | inherit",
    "initial": "none",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "top",
    "values": "<length> | <percentage> | auto | inherit",
    "initial": "auto",
    "appliesTo": "positioned elements",
    "inherited": false,
    "percentages": "refer to height of containing block",
    "media": "visual"
  },
  {
    "name": "unicode-bidi",
    "values": "normal | embed | bidi-override | inherit",
    "initial": "normal",
    "appliesTo": "all elements, but see prose",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "vertical-align",
    "values": "baseline | sub | super | top | text-top | middle | bottom | text-bottom | <percentage> | <length> | inherit",
    "initial": "baseline",
    "appliesTo": "inline-level and 'table-cell' elements",
    "inherited": false,
    "percentages": "refer to the 'line-height' of the element itself",
    "media": "visual"
  },
  {
    "name": "visibility",
    "values": "visible | hidden | collapse | inherit",
    "initial": "visible",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "voice-family",
    "values": "[[<specific-voice> | <generic-voice> ],]* [<specific-voice> | <generic-voice> ] | inherit",
    "initial": "depends on user agent",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "aural"
  },
  {
    "name": "volume",
    "values": "<number> | <percentage> | silent | x-soft | soft | medium | loud | x-loud | inherit",
    "initial": "medium",
    "appliesTo": "",
    "inherited": true,
    "percentages": "refer to inherited value",
    "media": "aural"
  },
  {
    "name": "white-space",
    "values": "normal | pre | nowrap | pre-wrap | pre-line | inherit",
    "initial": "normal",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "widows",
    "values": "<integer> | inherit",
    "initial": "2",
    "appliesTo": "block container elements",
    "inherited": true,
    "percentages": "",
    "media": "visual, paged"
  },
  {
    "name": "width",
    "values": "<length> | <percentage> | auto | inherit",
    "initial": "auto",
    "appliesTo": "all elements but non-replaced inline elements, table rows, and row groups",
    "inherited": false,
    "percentages": "refer to width of containing block",
    "media": "visual"
  },
  {
    "name": "word-spacing",
    "values": "normal | <length> | inherit",
    "initial": "normal",
    "appliesTo": "",
    "inherited": true,
    "percentages": "",
    "media": "visual"
  },
  {
    "name": "z-index",
    "values": "auto | <integer> | inherit",
    "initial": "auto",
    "appliesTo": "positioned elements",
    "inherited": false,
    "percentages": "",
    "media": "visual"
  }
]
