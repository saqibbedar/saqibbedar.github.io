Here’s a **comprehensive Markdown test document** that exercises nearly all features commonly supported by `react-markdown` (and typical plugins like `remark-gfm`, `rehype-highlight`, etc.):

---

# 🧪 Markdown Feature Test Suite

## 1. Headings

# H1 Heading

## H2 Heading

### H3 Heading

#### H4 Heading

##### H5 Heading

###### H6 Heading

---

## 2. Text Formatting

**Bold text**
*Italic text*
***Bold + Italic***
~~Strikethrough~~ <u>Underline (HTML)</u>
`Inline code`

---

## 3. Blockquotes

> This is a blockquote
>
> > Nested blockquote
> >
> > > Deeply nested quote

---

## 4. Lists

### Unordered List

* Item 1
* Item 2

  * Nested Item

    * Deep Nested

### Ordered List

1. First
2. Second

   1. Sub-item
   2. Sub-item

### Task List (GFM)

* [x] Completed task
* [ ] Incomplete task

---

## 5. Links

[OpenAI](https://openai.com)
[https://example.com](https://example.com)

---

## 6. Images

![Sample Image](/public/images/author.png)

---

## 7. Code Blocks

### Fenced Code Block (JavaScript)

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("World"));
```

### Fenced Code Block (Python)

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

---

## 8. Tables (GFM)

| Name    | Age | Role      |
| ------- | --- | --------- |
| Alice   | 25  | Developer |
| Bob     | 30  | Designer  |
| Charlie | 35  | Manager   |

---

## 9. Horizontal Rule

---

## 10. Inline HTML

<div style="color: blue;">
  This is HTML inside Markdown
</div>

---

## 11. Escaping Characters

*This is not italic*
# Not a heading

---

## 12. Footnotes (if supported)

Here is a statement.[^1]

[^1]: This is a footnote.

---

## 13. Definition List (some plugins)

Term 1
: Definition 1

Term 2
: Definition 2

---

## 14. Emoji

😀 😎 🚀 🔥 💡

---

## 15. Math (if using remark-math + rehype-katex)

Inline: $E = mc^2$

Block:
$$
\int_{a}^{b} x^2 dx
$$

---

## 16. Nested Content

* Item

  > Quote inside list

  ```js
  console.log("Code inside list");
  ```

---

## 17. Mixed Formatting

**Bold *italic `code` mix* text**

---

## 18. Line Breaks

Line one
Line two (two spaces above)

---

## 19. Keyboard Input

Press <kbd>Ctrl</kbd> + <kbd>C</kbd>

---

## 20. Superscript / Subscript (HTML)

H<sub>2</sub>O
X<sup>2</sup>

---

## 21. Collapsible Section (HTML)

<details>
  <summary>Click to expand</summary>

Hidden content here 🎉

</details>

---

## 22. Highlight (if plugin or HTML)

<mark>Highlighted text</mark>

---

## 23. Abbreviations (plugin-based)

*[HTML]: HyperText Markup Language

HTML is cool.

---

## 24. Autolinks (GFM)

[www.google.com](http://www.google.com)
[email@example.com](mailto:email@example.com)

---

## 25. Thematic Combo Stress Test

> ### Complex Example
>
> * **Bold item**
> * *Italic item*
> * `Code item`
>
> ```json
> {
>   "name": "test",
>   "valid": true
> }
> ```

---

✅ This document should help you verify:

* Core Markdown parsing
* GFM features
* HTML support
* Plugin-dependent features (math, footnotes, etc.)

---

If you want, I can also generate a **React test page using `react-markdown` with all plugins wired up**.
