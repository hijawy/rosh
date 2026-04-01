function highlight_text() {
  const selection = window.getSelection().toString();
  if (selection.length > 0) {
    const span = document.createElement("span");
    span.style.backgroundColor = "#ffff66"; // لون التمييز الأصفر
    span.textContent = selection;

    const range = window.getSelection().getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
  }
}

const NormalLabValues = {
  close_values_popup_on_click: function () {
    $("#close_values_popup").on("click", close_values_popup);
  },
  open_values_popup_on_click: function () {
    $("#open_values_popup").on("click", lab_values_popup);
  }
};

const Formatting = {
  init: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    $("#highlight").on("click", highlight_text);
    $("#strikeout").on("click", strikeout_text);
    $("#erase").on("click", erase_text);
    $("#flag_question").on("click", flag_this_question);
    $("#normal_lab_values").on("click", lab_values_popup);
  }
};

const Review = {
  init: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    NormalLabValues.open_values_popup_on_click();
    NormalLabValues.close_values_popup_on_click();
  }
};

$(function () {
  Review.init();
  Formatting.init();
});
