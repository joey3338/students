$(function() {
  $('.js-student').each(function() {
    var $student = $(this);
    var username = $student.data('username');
    var $avatar = $student.find('.js-avatar');

    $.ajax({
      url: 'https://api.github.com/users/' + username,
      dataType: 'json',
      timeout: 2000,
      cache: true,
      headers: {
        // the following token has user:read scope
        "Authorization": "token e5080e688d8d5c7ce1f5211d642c12984236914a"
      },
      success: function(data) {
        console.log(data)
        $avatar.attr('src', data.avatar_url);
        var $name = $student.find('.js-name');
        $name.text(data.name || username);
      },
      error: function() {
        $avatar.attr('src', 'https://github.com/identicons/' + username + '.png');
      }
    })
  });
});
