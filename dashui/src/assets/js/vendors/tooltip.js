//
// Tooltip
//

'use strict';

(function () {

  // img tooltip
  if ($(".imgtooltip").length) {
    tippy('.imgtooltip', {
      content(reference) {
        const id = reference.getAttribute('data-template');
        const template = document.getElementById(id);
        return template.innerHTML;
      },
      allowHTML: true,
      animation: 'scale',
      theme: 'light',
    });
  }

  // bookmark
  if ($(".bookmark").length) {
    tippy('.bookmark', {
      content: "Add to Bookmarks",
      animation: 'scale',
    });

  }

  // remove bookmark
  if ($(".removeBookmark").length) {
    tippy('.removeBookmark', {
      content: "Remove Bookmarks",
      animation: 'scale',
    });
  }

    // img tooltip
    if ($(".texttooltip").length) {
    tippy('.texttooltip', {
      content(reference) {
        const id = reference.getAttribute('data-template');
        const template = document.getElementById(id);
        return template.innerHTML;
      },
      allowHTML: true,
      animation: 'scale',
      theme: 'light',
    });
  }

 // dropdown tooltip
 if ($(".dropdownTooltip").length) {
 tippy('.dropdownTooltip', {
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  allowHTML: true,
  animation: 'scale',
  placement: 'right',
  theme: 'lightPurple',
});
 }



})();