$(() => {
  let entries = $(".entries");
  let history = $('.history');

  $('.num-btn').on('click', function () {
    entries.append(entries.val() + $(this).html());
    history.append(history.val() + $(this).html());
  });

  $('.math-btn').on('click', function () {
    entries.html("");
    entries.html($(this).html());
    history.append($(this).html());
  });

  $('.all-clear').on('click', function () {
    history.html('');
    entries.html('');
  });

  $('.clear').on('click', function () {
    history.html(previous(history.html()));
    entries.html('');
  });

  $('.equals').on('click', function () {
    let calc = math.eval(history.html());
    if (calc === Infinity) {
      entries.html("Cannot divide by zero");
      history.html('');
    } else {
      history.html(calc);
      entries.html(calc);
    }
  });
});

let previous = (str) => {
  let arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    let res = arr[i].match(/[+\-*\/]/g);
    if (res) {
      arr.pop();
      break;
    }
    arr.pop();
  }
  let newStr = arr.join('');
  return newStr;
};