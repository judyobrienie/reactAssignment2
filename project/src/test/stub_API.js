// JavaScript source code
import _ from 'lodash';

class StubAPI {

    constructor() {
        this.posts = [];
    }

    initialize(posts) {
        this.posts = posts;
        return true;
    }

    getAll() {
        return this.posts;
    }


    setOrUpdate(post) {
        var index = _.findIndex(this.posts, { _id: post._id });
        if (index !== -1) {
            this.posts.splice(index, 1, post);
        } else {
            this.posts.push(post);
        }
        return true;
    }

    getPost(id) {
        var result = null;
        var index = _.findIndex(this.posts, { '_id': id });
        if (index !== -1) {
            result = this.posts[index];
        }
        return result;
    }



    downvote(id) {
        let index = _.findIndex(this.posts,
            function (post) {
                return post.id === id;
            });
        if (index !== -1) {
            this.posts[index].upvotes -= 1;
            return true;
        }
        return false;
    }



    addComment(postId, c, n) {
        let post = this.getPost(postId);
        let id = 1;
        let last = _.last(post.comments);
        if (last) {
            id = last.id + 1;
        }
        post.comments.push({
            'id': id,
            comment: c, author: n, upvotes: 0
        });
    }

    upvoteComment(postId, commentId) {
        let post = this.getPost(postId);
        let index = _.findIndex(post.comments, function (c) {
            return c.id === commentId;
        });
        if (index !== -1) {
            post.comments[index].upvotes += 1;
        }

    }
}

export default (new StubAPI());