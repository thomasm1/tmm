angular.
  module('tmm').
  component('postList', {
    template:
    '<p>Total number of posts: {{$ctrl.posts.length}}</p>' + '<ul>' +
          '<li ng-repeat="post in $ctrl.posts">' +
            '<span>{{post.did}}</span>' +
            '<p>{{post.title}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PostListController() {
      this.posts = [
        {
          title: 'Nexus S',
          did: 'Fast just got faster with Nexus S.'
        }, {
          title: 'Motorola XOOM™ with Wi-Fi',
          did: 'The Next, Next Generation tablet.'
        }, {
          title: 'MOTOROLA XOOM™',
          did: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });