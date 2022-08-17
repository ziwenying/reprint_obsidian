<template>
  <div class="container">
    <header>
      <!-- hamburger icon -->
      <label for="navbar-toggle-left" class="left-sidebar-icon">
        <span class="hamburger"></span>
      </label>
      <div class="title-wrapper">
        <img src="~@/assets/image/file.png" alt="file" class="icon" />
        <input
          v-model="currentEditFile.title"
          @blur="doneEdit"
          type="text"
          class="title"
          placeholder="請輸入標題"
        />
      </div>
      <!-- right icon -->
      <div class="right-sidebar-icon">
        <div class="icons">
          <img src="~@/assets/image/moon.png" alt="moon" class="icon" />
          <img src="~@/assets/image/glass.png" alt="glass" class="icon" />
          <img
            @click="closeFile"
            src="~@/assets/image/delete.png"
            alt="closeFile"
            class="icon"
          />
          <label for="navbar-toggle-right">
            <img
              src="~@/assets/image/three-dot.png"
              alt="three-dot"
              class="icon"
            />
          </label>
        </div>
      </div>
    </header>
    <!-- content -->
    <main class="d-flex">
      <!-- left & right  check -->
      <input
        type="checkbox"
        id="navbar-toggle-left"
        class="toggle-left d-none"
      />
      <input
        type="checkbox"
        name="left-btn"
        id="navbar-toggle-right"
        class="toggle-right d-none"
      />
      <!-- left sidebar -->
      <div class="left-side">
        <div class="sidebar">
          <div class="icons-above">
            <label
              for="navbar-toggle-left"
              class="icon web-left-sidebar-icon"
            ></label>
            <img src="~@/assets/image/import.png" alt="import" class="icon" />
            <img src="~@/assets/image/graph.png" alt="graph" class="icon" />
            <img src="~@/assets/image/paper.png" alt="paper" class="icon" />
            <img
              src="~@/assets/image/arrow-down.png"
              alt="arrow-down"
              class="icon"
            />
          </div>
          <div class="icons-bottom">
            <img src="~@/assets/image/board.png" alt="board" class="icon" />
            <img src="~@/assets/image/query.png" alt="query" class="icon" />
            <img src="~@/assets/image/set.png" alt="set" class="icon" />
          </div>
        </div>
        <div class="side-content">
          <!-- <h2 class="">Main Folder</h2> -->
          <div class="overview">
            <div class="overview-detail d-none">
              <img src="~@/assets/image/pin.png" alt="set" class="pin" />
            </div>
          </div>
          <!-- file-explorer -->
          <div class="d-none explorer file-explorer-btn">
            <div class="list file-explorer-btn file-explorer-pointer d-flex">
              <img
                src="~@/assets/image/folder-open.png"
                alt="folder-open"
                class="icon"
              />
              <p class="file-explorer-btn file-explorer-pointer">
                File explorer
              </p>
            </div>
            <div class="list file-search-pointer d-flex">
              <img src="~@/assets/image/search.png" alt="search" class="icon" />
              <p class="">search</p>
            </div>
          </div>
          <!-- file-explorer-detail -->
          <div class="explorer file-explorer-detail">
            <div class="list d-flex">
              <img src="~@/assets/image/file.png" alt="file" class="icon" />
              <p>File explorer</p>
              <img src="~@/assets/image/search.png" alt="search" class="icon" />
            </div>
            <div class="list d-flex control-file-folder">
              <img
                src="~@/assets/image/new-file.png"
                alt="new-file"
                class="icon"
              />
              <img
                src="~@/assets/image/folder-open.png"
                alt="folder-open"
                class="icon"
              />
              <img src="~@/assets/image/sort.png" alt="sort" class="icon" />
            </div>
            <div class="files scrollbar">
              <!-- 左邊欄的檔案名 -->
              <div
                v-for="file in files"
                :key="file.id"
                @click="fetchFileData(file.id)"
                class="file"
              >
                {{ file.title }}
              </div>
              <ContextMenu class="d-none" />
            </div>
          </div>
        </div>
        <div class="add-area"></div>
      </div>
      <!-- textarea -->
      <textarea
        v-model="currentEditFile.text"
        @blur="doneEdit"
        class="note"
        rows="10"
        placeholder="創建新筆記吧"
        autofocus
      ></textarea>
      <!-- right sidebar -->
      <div class="right-side">
        <div class="side-content scrollbar">
          <div class="list d-flex">
            <img
              src="~@/assets/image/delete.png"
              alt="close-file"
              class="icon"
            />
            <p class="right-sidebar-option">Close current pane</p>
          </div>
          <div class="list d-flex">
            <img src="~@/assets/image/delete.png" alt="delete" class="icon" />
            <p class="right-sidebar-option">Delete file</p>
          </div>
          <div class="list d-flex">
            <img src="~@/assets/image/link.png" alt="link" class="icon" />
            <p class="right-sidebar-option">Copy Obsidian URL</p>
          </div>
          <div class="list d-flex">
            <img src="~@/assets/image/fast.png" alt="fast" class="icon" />
            <p class="right-sidebar-option">Move file to...</p>
          </div>
          <div class="list d-flex">
            <img src="~@/assets/image/graph.png" alt="graph" class="icon" />
            <p class="right-sidebar-option">Open local graph</p>
          </div>
          <div class="list d-flex">
            <img src="~@/assets/image/code.png" alt="code" class="icon" />
            <p class="right-sidebar-option">Toggle backlinks in...</p>
          </div>
          <div class="list d-flex">
            <img src="~@/assets/image/share.png" alt="share" class="icon" />
            <p class="right-sidebar-option">Share</p>
          </div>
          <div class="list d-flex">
            <img src="~@/assets/image/merge.png" alt="merge" class="icon" />
            <p class="right-sidebar-option">Merge entire file with...</p>
          </div>
          <div class="list d-flex">
            <img src="~@/assets/image/search.png" alt="search" class="icon" />
            <p class="right-sidebar-option">Find...</p>
          </div>
          <div class="list d-flex">
            <img src="~@/assets/image/merge.png" alt="merge" class="icon" />
            <p class="right-sidebar-option">Replace...</p>
          </div>
          <div class="list d-flex">
            <img src="~@/assets/image/fast.png" alt="fast" class="icon" />
            <p class="right-sidebar-option">Toggle Live Preview</p>
          </div>
        </div>
      </div>
      <!-- web right-right sidebar no function -->
      <div class="right-right-side"></div>
    </main>
    <!-- footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="text">
          <span class="number">{{ currentEditFile.text.length }}</span>
          <span class="word">&nbsp;個字元</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import ContextMenu from "@/components/ContextMenu .vue";

export default {
  name: "Main",
  components: {
    ContextMenu,
  },
  data() {
    return {
      thisTitle: "",
      fileStatus: false,
      currentEditFile: {
        id: -1,
        title: "",
        text: "",
      },
      files: [
        {
          id: -1,
          title: "",
          text: "",
          wordCount: 0,
          linkCount: 0,
        },
      ],
    };
  },
  watch: {
    files: {
      handler: function () {
        console.log("save");
        this.saveStorage();
      },
      deep: true,
    },
  },
  created() {
    this.fetchFiles();
  },
  methods: {
    fetchFiles() {
      this.files = JSON.parse(localStorage.getItem("files", this.files)) || [];
    },
    fetchFileData(fileId) {
      this.fileStatus = true;
      this.currentEditFile = this.files.find((file) => {
        return fileId === file.id;
      });
      this.editText = this.currentEditFile.text;
    },
    doneEdit() {
      if (!this.currentEditFile.title) {
        return;
      }
      if (this.currentEditFile.id === -1) {
        const sameTitle = this.files.some((file) => {
          return file.title.trim() === this.currentEditFile.title.trim();
        });
        if (sameTitle) {
          this.currentEditFile.title = "";
          return alert("標題重複");
        }
        const id = uuidv4();
        this.files.unshift({
          id: id,
          title: this.currentEditFile.title,
          text: this.currentEditFile.text,
          wordCount: 0,
        });
        this.currentEditFile = {
          id: id,
          title: this.currentEditFile.title,
          text: this.currentEditFile.text,
          wordCount: 0,
        };
      } else {
        this.files = this.files.map((file) => {
          return file.id === this.currentEditFile.id
            ? this.currentEditFile
            : file;
        });
      }
    },
    closeFile() {
      this.currentEditFile = {
        id: -1,
        title: "",
        text: "",
        termCount: 0,
        wordCount: 0,
        linkCount: 0,
      };
    },
    saveStorage() {
      localStorage.setItem("files", JSON.stringify(this.files));
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/application.scss";

/* starting */
.container {
  position: relative;
  height: 100%;
  margin: 0 1rem;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background: $nav-sidebar;
    .title-wrapper {
      .icon {
        display: none;
      }
      .title {
        width: 60%;
        height: 60px;
        border: 0;
        font-size: 1.5rem;
        margin: 0 0 0 5px;
        color: $font;
        background: $nav-sidebar;
      }
    }
    .left-sidebar-icon {
      width: 25px;
      height: 20px;
      margin: 0 3rem 0 0.5rem;
      cursor: pointer;
      .hamburger {
        position: relative;
        line-height: 60px;
      }
      .hamburger,
      .hamburger::before,
      .hamburger::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 2px;
        background: #000;
      }
      .hamburger::before {
        top: 10px;
      }
      .hamburger::after {
        top: 21px;
      }
    }
    .right-sidebar-icon {
      .icons {
        display: flex;
        .icon {
          @extend %icon-setting;
          background-size: 20px;
        }
      }
    }
  }
  main {
    position: relative;
    height: 90vh;
    // control left sidebar
    .toggle-left:checked ~ .left-side {
      transform: scale(1, 1);
      opacity: 1;
    }
    // control right sidebar
    .toggle-right:checked ~ .right-side {
      transform: scale(1, 1);
      opacity: 1;
    }
    // left sidebar
    .left-side {
      display: flex;
      position: absolute;
      top: 0;
      width: 100%;
      height: 90vh;
      transform: scale(0, 1);
      transform-origin: left;
      transition: transform 0.3s ease-out;
      .sidebar {
        position: relative;
        width: 30px;
        height: 90vh;
        background: $nav-sidebar;
        .icons-above,
        .icons-bottom {
          .icon {
            @extend %icon-setting;
            background-size: 20px;
          }
        }
        .icons-above {
          position: absolute;
          top: 0;
        }
        .icons-bottom {
          position: absolute;
          bottom: 0;
        }
      }
      .side-content {
        width: 80%;
        height: 100%;
        .overview {
          position: relative;
          margin: 10px 0 0 0;
          .overview-detail {
            display: flex;
            font-size: 0.8rem;
            .pin {
              position: absolute;
              right: 10px;
              @extend %icon-setting;
              background-size: 20px;
            }
          }
        }
        .explorer {
          background: $body-bg;

          .files {
            background: $body-bg;
          }
          .list {
            justify-content: start;
            margin: 0 0 0 20px;
            font-size: 1.2rem;
            .icon {
              @extend %icon-setting;
              background-size: 20px;
            }
            p {
              margin: 0 5px;
            }
          }
          .control-file-folder {
            justify-content: start;
            margin: 0 0 0 20px;
            .icon {
              margin: 0 5px;
            }
          }
          .files {
            overflow-y: auto;
            overflow-x: hidden;
            padding: 10px 5px;
            background: $body-bg;
            .file {
              width: 100%;
              margin: 0 20px 0 0;
              padding: 10px 20px;
              color: $icon-and-light-font;
            }
            .file:hover {
              border-radius: 10px;
              color: $font;
              background: $file;
              cursor: pointer;
            }
          }
        }
      }
      // 打開 left-sidebar 後，最右黑色區塊
      .add-area {
        width: 20%;
        background: black;
        opacity: 0.9;
      }
    }
    // textarea
    .note {
      resize: none;
      width: 100%;
      height: 90vh;
      padding: 1rem;
      border: 0;
      color: $font;
      font-size: 2rem;
    }
    // right sidebar
    .right-side {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 90vh;
      transform: scale(1, 0);
      transform-origin: bottom;
      transition: transform 0.3s ease-out;
      .side-content {
        position: absolute;
        right: 31px;
        top: 5px;
        height: 85vh;
        background: $body-bg;
        box-shadow: 0px 0px 5px 0px $icon-and-light-font;
        border-radius: 5px;
        overflow-y: auto;
        .list {
          justify-content: start;
          width: 300px;
          height: 40px;
          padding: 10px;
          .icon {
            @extend %icon-setting;
            background-size: 20px;
          }
          .right-sidebar-option {
            width: 100%;
            padding: 10px 20px;
            cursor: pointer;
          }
          &:hover {
            width: 290px;
            border-radius: 5px;
            color: $font;
            background: $file-selected;
          }
        }
      }
    }
  }
}
.footer {
  position: relative;
  width: 100%;
  height: 2rem;
  color: $icon-and-light-font;
  background: $nav-sidebar;
  .footer-container {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    .text {
      margin: 5px 30px 5px 5px;
      padding: 0 0 0 3px;
      font-weight: 800;
    }
  }
}

@media screen and (min-width: 576px) {
  .container {
    max-width: 1280px;
    margin: auto;
    header {
      .left-sidebar-icon {
        display: none;
      }
      .title-wrapper {
        display: flex;
        align-items: center;
        margin: 50px;
        .icon {
          display: block;
          width: 25px;
          height: 25px;
          margin: 0 5px 0 0;
        }
      }
      .right-sidebar-icon {
        .icons {
          margin: 0 50px 0 0;
        }
      }
    }
    main {
      display: flex;
      .toggle-left:checked ~ .left-side {
        transform: scale(1, 1);
        opacity: 1;
        width: 28%;
        .side-content {
          transform: scale(1, 1);
          transform-origin: left;
          transition: transform 0.2s ease-out;
          opacity: 1;
        }
      }
      .left-side {
        all: unset;
        display: flex;
        width: 30px;
        height: 90vh;
        opacity: 1;
        background: $nav-sidebar;
        .sidebar {
          width: 30px;
          .icons-above {
            .web-left-sidebar-icon {
              display: block;
              width: 20px;
              height: 20px;
              margin: 20px 5px;
              background: $open-left-url;
              background-size: 20px;
              cursor: pointer;
            }
          }
        }
        .side-content {
          transform: scale(0, 1);
          opacity: 0;
          background: $file;
          .folder-name {
            display: none;
          }
          .overview {
            display: none;
          }
          .explorer {
            height: 80vh;
            &.file-explorer-btn {
              display: none;
            }
            .control-file-folder {
              justify-content: start;
            }
            .files {
              height: 80vh;
            }
          }
          .file-explorer-detail {
            display: block;
            .list {
              display: flex;
              justify-content: center;
              margin: 0 0 20px 0;
              padding: 20px 0 0 0;
            }
            .list:nth-child(1) {
              display: none;
            }
          }
        }
        .add-area {
          display: none;
        }
      }
      // textarea
      .note {
        width: 95%;
        padding: 1rem 3rem;
        background: $transparent;
        z-index: 1;
      }
      .right-side {
        transform: scale(1, 0);
        transform-origin: top;
        transition: transform 0.3s ease-out;
        opacity: 1;
        z-index: 2;
      }
      .right-right-side {
        position: absolute;
        right: 0;
        width: 30px;
        height: 100%;
        background: $nav-sidebar;
        .open-right {
          width: 20px;
          height: 20px;
          background: $open-right-url;
          background-size: 20px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
