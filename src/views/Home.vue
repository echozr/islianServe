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
        <el-upload action="#"  list-type="picture-card" :limit="1" :auto-upload="false" style="float:left">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img  class="el-upload-list__item-thumbnail" :src="bgImage" alt="" >
            <span class="el-upload-list__item-actions">
              <span  class="el-upload-list__item-preview"  @click="handlePictureCardPreview(file)" >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span  v-if="!disabled"   class="el-upload-list__item-delete"  @click="handleDownload(file)">
                <i class="el-icon-download"></i>
              </span>
              <span v-if="!disabled" class="el-upload-list__item-delete"  @click="handleRemove(file)" >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="添加资源" v-show="form.addType === 'music' || form.addType === 'video'">
        <el-upload  action="#"  list-type="picture-card"  :auto-upload="false" style="float:left">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img v-if="file.raw.type==='audio/mp3'" class="el-upload-list__item-thumbnail" src="" alt="" >
            <span class="el-upload-list__item-actions">
              <span v-if="!disabled"  class="el-upload-list__item-delete" @click="handleDownload(file)">
                <i class="el-icon-download"></i>
              </span>
              <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
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
      disabled: false
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
</style>
