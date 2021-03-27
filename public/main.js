var heart = document.getElementsByClassName("fa-heart");
var trash = document.getElementsByClassName("fa-trash");

Array.from(heart).forEach(function(element) {
      element.addEventListener('click', function(){
        const _id = event.target.dataset.value;
        const heartvalue = document.querySelector(`.heart[data-value="${_id}"]`).innerText;
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            _id: _id,
            heart: heartvalue,

          })
        })
        .then(function (response) {
          window.location.reload();
        })
    });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
