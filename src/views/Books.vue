<template>
  <div class="home">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="form.addType" placeholder="请选择类型" style="float:left">
          <el-option label="电影" value="movie"></el-option>
          <el-option label="诗句" value="verse"></el-option>
          <el-option label="音乐" value="music"></el-option>
          <el-option label="视频" value="video"></el-option>
          <el-option label="书籍" value="book"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择时间">
        <el-col>
          <el-date-picker type="month" placeholder="选择时间" v-model="form.creationTime" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="添加图片">
        <el-upload class="avatar-uploader" :headers="headers"  action="/api/upload/fileImg" :show-file-list="false"  accept="image/*" :on-success="upSuccess">
          <img v-if="form.bgImage" :src="form.bgImage" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="添加资源" v-show="form.addType === 'music' || form.addType === 'video'">
        <el-upload class="avatar-uploader" :headers="headers"  action="/api/upload/fileImg" :show-file-list="false"  accept="audio/mp3 ,audio/mp4, video/mp4  " :on-success="upSuccess">
          <video v-if="form.resources"  :src="form.resources" controls="controls" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <div v-show="form.addType === 'book'">
        <el-form-item label="作者">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="出版社">
          <el-input v-model="form.publicHouse"></el-input>
        </el-form-item>
        <el-form-item label="出版年">
          <el-input v-model="form.PublicYear"></el-input>
        </el-form-item>
        <el-form-item label="页数">
          <el-input v-model="form.pages"></el-input>
        </el-form-item>
        <el-form-item label="定价">
          <el-input v-model="form.pricing"></el-input>
        </el-form-item>
        <el-form-item label="书本类型">
          <el-select v-model="form.bookType" placeholder="请选择类型" style="float:left">
            <el-option label="精装" value="movie"></el-option>
            <el-option label="普装" value="verse"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即发布</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <!-- 图片放大框 -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      type: '',
      form: {
        title: '',
        content: '',
        addType: '',
        creationTime: '',
        bgImage: '',
        resources: '',
        author: '',
        publicHouse: '',
        PublicYear: '',
        pages: '',
        pricing: '',
        bookType: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    }
  },
  methods: {
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    },
    upSuccess (res, file) {
      this.type = file.raw.type
      if (this.type.indexOf('image/') > -1) {
        this.form.bgImage = res.data.url
      } else {
        this.form.resources = res.data.url
      }
      console.log(file)
    },
    onSubmit () {
      console.log(this.data.form)
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  padding: 30px;
}
.avatar-uploader .el-upload {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
