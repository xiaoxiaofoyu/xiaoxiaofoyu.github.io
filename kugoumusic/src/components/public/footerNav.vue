<template>
  <div>
    <div class="footerNav">
      <div class="fonav">
        <div class="fonav_con">
          <ul class="clearfix">
            <li>关于酷狗</li>
            <span>|</span>
            <li>监督举报</li>
            <span>|</span>
            <li>广告服务</li>
            <span>|</span>
            <li>投诉指引</li>
            <span>|</span>
            <li>隐私政策</li>
            <span>|</span>
            <li>儿童隐私政策</li>
            <span>|</span>
            <li>用户服务协议</li>
            <span>|</span>
            <li>酷狗音乐人</li>
            <span>|</span>
            <li>酷狗直通车</li>
            <span>|</span>
            <li>招聘信息</li>
            <span>|</span>
            <li>客服中心</li>
            <span>|</span>
            <li>用户体验提升计划</li>
          </ul>
        </div>
      </div>
      <div class="focon">
        <div class="focon_con">
          <p>我们致力于推动网络正版音乐发展，相关版权合作请联系copyrights@kugou.com</p>
          <p>
            信息网络传播视听节目许可证 1910564 增值电信业务经营许可证粤B2-20060339&nbsp;&nbsp;&nbsp;
            <a href>粤ICP备09017694号</a>
          </p>
          <p>
            广播电视节目制作经营许可证（粤）字第01270号&nbsp;&nbsp;&nbsp;&nbsp;营业性演出许可证穗天演440106026&nbsp;&nbsp;&nbsp;
            <a
              href
            ></a>营业执照
          </p>
          <p>
            穗公网监备案证第44010650010167&nbsp;&nbsp;&nbsp;&nbsp;互联网药品信息服务资格证编号（粤）-非经营性-2012-0018&nbsp;&nbsp;&nbsp;
            <a
              href
            >粤公网安备 44010602000141号</a>
          </p>
          <p>
            <a href>互联网不良信息举报中心：www.12377.cn</a>&nbsp;&nbsp;&nbsp;&nbsp;酷狗不良信息举报邮箱：jubao_music@kugou.net&nbsp;&nbsp;&nbsp;&nbsp;客服邮箱：kefu@kugou.net
          </p>
          <p>Copyright&nbsp;&nbsp;©&nbsp;&nbsp;2004-2020 KuGou-Inc.All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footerNav {
  width: 100%;
  height: 266px;
  padding-bottom: 50px;
  background-color: #2c323b;
  .fonav {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #3d424a;
    .fonav_con {
      width: 1000px;
      margin: 0 auto;
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          font-size: 12px;
          color: #b1b3b9;
          cursor: pointer;
          &:hover {
            color: #009af3;
          }
        }
        span {
          margin: 0 10px;
          font-size: 10px;
          color: #b1b3b9;
        }
      }
    }
  }
  .focon {
    width: 100%;
    margin-top: 40px;
    .focon_con {
      width: 1000px;
      margin: 0 auto;
      text-align: center;
      p {
        font-size: 13px;
        color: #b1b3b9;
        line-height: 30px;
        a {
          font-size: 13px;
          color: #b1b3b9;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            color: #009af3;
          }
        }
      }
    }
  }
}
</style>