'use strict';

(function () {
  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');
  var url;

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var reader = new FileReader();

    reader.addEventListener('load', function () {
      url = reader.result;
      preview.src = url;

      window.avatar = {
        url: url
      };
    });

    reader.readAsDataURL(file);
  });
})();
