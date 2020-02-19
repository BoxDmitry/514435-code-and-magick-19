'use strict';

(function () {
  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];

    var reader = new FileReader();

    reader.addEventListener('load', function () {
      var url = reader.result;
      preview.src = url;

      window.avatar = {
        url: url
      };
    });

    reader.readAsDataURL(file);
  });
})();
