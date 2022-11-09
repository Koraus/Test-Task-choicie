<template>
  <div class="header">
    <div :class="{ bg: isInfoWindow }"></div>
    <div v-if="isInfoWindow" class="info-window">
      <h3>post added</h3>
      <vue-button
        class="post__btn"
        :size="'s'"
        :btnType="'secondary'"
        @click.native="close()"
      >
        ok
      </vue-button>
    </div>

    <nav-bar
      v-if="!isBurger"
      :colorMode="'dark'"
      class="header__nav-bar"
    ></nav-bar>
    <burger-menu v-if="isBurger" class="request__burger"> </burger-menu>
    <div class="request">
      <b-container fluid="xl">
        <h2 class="h1 header__title">Add new post</h2>

        <b-row class="posts-list">
          <b-col cols="12">
            <div v-if="!isPostEdit" class="add-new-post">
              <div class="posts-list__input-wrapper">
                <input
                  type="text"
                  class="posts-list__input"
                  v-model="postTitle"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  class="posts-list__textarea"
                  v-model="postBody"
                ></textarea>
              </div>
              <vue-button class="posts-list__btn" @click.native="addPosts()">
                Add Post
              </vue-button>
            </div>

            <div v-if="isPostEdit" class="edit-post">
              <div class="posts-list__input-wrapper">
                <input
                  type="text"
                  class="posts-list__input"
                  v-model="postTitle"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  class="posts-list__textarea"
                  v-model="postBody"
                ></textarea>
              </div>
              <vue-button
                class="posts-list__btn"
                @click.native="addChangedPost()"
              >
                Send edit post
              </vue-button>
              <vue-button
                class="posts-list__btn"
                @click.native="cancelСhanges()"
              >
                Cancel changes
              </vue-button>
            </div>
          </b-col>
          <b-col cols="12">
            <h1 class="h1 posts-list__title">Posts list</h1>
            <vue-button
              class="post__btn"
              :size="'s'"
              @click.native="getPosts()"
            >
              Load Post
            </vue-button>

            <ul class="posts-list__list" v-if="isListLoaded">
              <li
                class="posts-list__item"
                v-for="item of postsList"
                :key="item.id"
              >
                <div class="posts-list__btn-wrap">
                  <p
                    style="
                      text-align: left;
                      margin-left: 20px;
                      margin-top: 20px;
                    "
                  >
                    post id {{ item.id }}
                  </p>
                  <h1 class="post__title">{{ item.title }}</h1>
                  <p class="post__body">{{ item.body }}</p>
                </div>
                <div class="post__management">
                  <vue-button
                    class="post__btn"
                    :size="'s'"
                    :disabled="isPostEdit"
                    @click.native="editPost(item.id, item.title, item.body)"
                  >
                    Edit Post
                  </vue-button>
                  <vue-button
                    class="post__btn"
                    :size="'s'"
                    :disabled="isPostEdit"
                    @click.native="deletePost(item.id)"
                  >
                    Delete Post
                  </vue-button>
                </div>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import BurgerMenu from "../components/BurgerMenu.vue";
import VueButton from "../components/UI/VueButton.vue";

export default {
  name: "Contacts",
  components: { NavBar, BurgerMenu, VueButton },
  data() {
    return {
      windowWidth: window.innerWidth,
      reqURL: "https://jsonplaceholder.typicode.com/posts",
      postTitle: "",
      postBody: "",
      postId: 1,
      isInfoWindow: false,
      isPostEdit: false,
      isListLoaded: false,
      postEditId: "",
      changePost: {
        title: "",
        body: "",
      },
      postsList: [
        {
          title: "",
          body: "",
          id: "",
        },
      ],
    };
  },
  methods: {
    close() {
      this.isInfoWindow = false;
      this.isPostEdit = false;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    async getPosts() {
      const response = await fetch(this.reqURL);
      const data = await response.json(response);
      const shortData = data.slice(90);
      this.postsList = shortData;
      this.isListLoaded = true;
    },
    async addPosts() {
      if (this.postTitle && this.postBody) {
        await fetch(this.reqURL, {
          method: "POST",
          body: JSON.stringify({
            title: this.postTitle,
            body: this.postBody,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));

        this.isInfoWindow = true;
        this.postTitle = "";
        this.postBody = "";
      }
    },
    async addChangedPost() {
      await fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.postEditId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: this.postEditId,
            title: this.postTitle,
            body: this.postBody,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => console.log(json));

      this.postTitle = "";
      this.postBody = "";
      this.isInfoWindow = true;
      this.postEditId = "";
    },
    editPost(postID, title, body) {
      this.isPostEdit = !this.isPostEdit;
      this.postTitle = title;
      this.postBody = body;
      this.postEditId = postID;
      window.scrollTo({
        top: 20,
        behavior: "smooth",
      });
    },
    async cancelСhanges() {
      this.isPostEdit = !this.isPostEdit;
      this.postTitle = "";
      this.postBody = "";
    },
    async deletePost(postID) {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`, {
        method: "DELETE",
      });
      console.log(postID + " deleted" + " reload list ");
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    isBurger() {
      return this.windowWidth < 992;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";

.header {
  padding-top: 40px;
  position: relative;

  &__title {
    padding-top: 80px;
  }
}

.request {
  margin-bottom: 40px;

  &__burger {
  }
}

.posts-list {
  &__btn {
    display: inline-block;
    width: 400px;
    margin-bottom: 20px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 30px;

    @include max720 {
      width: 200px;
      margin-top: 10px;
    }

    @include max540 {
      width: 120px;
      margin-bottom: 10px;
      width: 100%;
      margin-top: 10px;
    }
  }

  &__input-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 90px;
    margin-right: 90px;

    @include max720 {
      margin-left: 40px;
      margin-right: 40px;
    }

    @include max540 {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  &__input {
    margin-right: 20px;
    height: 40px;
    border-radius: 10px;
    width: 100%;
  }

  &__textarea {
    border-radius: 10px;
    margin-top: 20px;
  }
}

.posts-list {
  &__list {
    list-style: none;
    padding: 0;
  }

  &__item {
    border: solid 1px rgb(178, 99, 59);
    margin-bottom: 20px;
    padding: 15px;
  }
}

.post {
  &__title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 34px;
  }

  &__body {
  }

  &__btn {
    display: inline-block;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #bc78ff3f;
}

.info-window {
  color: white;
  display: flex;
  position: absolute;
  width: 200px;
  height: 200px;
  background: var(--brand-blue);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 200px;
  left: 50%;
  transform: translate(-50%);
  border-radius: 10px;
}
</style>
