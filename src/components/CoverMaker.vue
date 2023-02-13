
<!--
 * @Description: Description
 * @Author: Kerwin
 * @Date: 2023-02-12 20:56:28
 * @LastEditTime: 2023-02-13 17:58:35
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import html2canvas from "html2canvas";
import { pinyinUtil }:any from '@/plugin/pinyin_withtone.js'
const name = ref("默认成语");
const form = reactive({
  name: "阳和启蛰",
  py: "yáng hé qǐ zhé",
  desc: "指恶劣困苦的日子过去，顺利和美好的时光开始了",
});
const reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
const py = computed(() => {
  if (!form.name) {
    form.py = ''
    return
  }
  if (reg.test(form.name)) {
    form.py = pinyinUtil.getPinyin(form.name, ' ', true)
  }
})

const loading = ref(false)
// 图片生成
const imageWrapper = ref(null) as any;
function clickGeneratePicture() {
  loading.value = true
  html2canvas(imageWrapper.value, {
    logging: false,
    allowTaint: true,
    scale: window.devicePixelRatio * 2,
    // width: shareContent.clientWidth, //dom 原始宽度
    // height: shareContent.clientHeight,
    scrollY: 0,
    scrollX: 0,
    useCORS: true,
    backgroundColor: '#ffffff',
  }).then(function (canvas: { toDataURL: (arg0: string) => any; }) {
    // console.log(canvas);
    let imgUrl = canvas.toDataURL("image/png");
    var tempLink = document.createElement('a');// 创建一个a标签
    tempLink.style.display = 'none';
    tempLink.href = imgUrl;
    tempLink.setAttribute('download', form.name);// 给a标签添加下载属性
    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank');
    }
    document.body.appendChild(tempLink);// 将a标签添加到body当中
    tempLink.click();// 启动下载
    document.body.removeChild(tempLink);// 下载完毕删除a标签
    window.URL.revokeObjectURL(imgUrl);
    loading.value = false
  });
};

</script>

<template>
  <div class="container">
    <h3 class="tit">成语图片基本生成器 {{ py }}</h3>
    <div class="cBody">
      <div class="operationPanel">
        <el-form :model="form">
          <el-form-item label="成语名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="成语拼音">
            <el-input v-model="form.py" />
          </el-form-item>
          <el-form-item label="成语释义">
            <el-input v-model="form.desc" type="textarea" rows="5" />
          </el-form-item>
          <el-form-item>
            <el-button class="screenshotBtn button" type="primary" @click="clickGeneratePicture"
              :loading="loading">生成图片</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="imgBox" ref="imageWrapper">
        <center class="top">
          <p>每天坚持学一句成语</p>
          <p>一百天以后你将才华横溢出口成章</p>
        </center>
        <center class="cen">
          <p class="py">{{ form.py }}</p>
          <p class="name">{{ form.name }}</p>
        </center>
        <center class="bot">
          <p>【释义】：</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp; {{ form.desc }}</p>
        </center>
      </div>
    </div>

  </div>

</template>

<style scoped>
.container {
  padding: 30px 0;
}

.operationPanel {
  margin-right: 30px;
  min-width: 30%;
}

.cBody {
  display: flex;
}


.tit {
  margin-bottom: 20px;
}

.imgBox {
  width: 375px;
  height: 640px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80");
  /* background-image: url("https://media.istockphoto.com/id/509784301/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E8%8C%B6%E8%89%B2%E3%81%AE%E7%B4%99%E3%81%AE%E8%B3%AA%E6%84%9F.jpg?s=612x612&w=0&k=20&c=XhyNZxwtjFEYlo8HeR_Ov5HVCi4UH8y1l8bqO5TzsWw="); */
}

.screenshotBtn {
  margin: 20px 0;
}

.top {
  margin-top: 30px;
  color: rgb(18, 2, 247);
  font-weight: 800;
  font-size: 16px;
}

.cen .py {
  color: blue;
  font-size: 16px;
  word-spacing: 30px;
}

.cen .name {
  font-size: 56px;
  font-weight: 800;
  font-family: "ShangShouZhiZun";
  /* text-decoration: underline; */
}

.bot {
  width: 70%;
  text-align: left;
  margin-bottom: 145px;
}
</style>

