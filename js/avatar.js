'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];

    if (!file) return;

    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });


    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        var url = reader.result;
        preview.src = url;

        window.avatar = {
          url: url
        };
      });

      reader.readAsDataURL(file);

      return;
    }

    var node = document.createElement('div');
    node.classList.add('error--popap');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; padding: 20px; border-radius: 10px';
    node.style.position = 'absolute';
    node.style.left = '50%';
    node.style.top = 0;
    node.style.transform = 'translateX(-50%) translateY(50%)';
    node.style.fontSize = '30px';

    node.textContent = 'Не допустимый формат файла';
    document.body.insertAdjacentElement('afterbegin', node);

    var onHiddenError = function () {
      document.querySelector('.error--popap').removeEventListener('click', onHiddenError);
      document.querySelector('.error--popap').remove();
    };

    document.querySelector('.error--popap').addEventListener('click', onHiddenError);
  });
})();
