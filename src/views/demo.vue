<template>
    <div class="monitor_goods">
        <el-container>
            <el-aside>
                <h5 class="goodsTit">我的商品</h5>
                <ul class="goodsMenu">
                    <li class="active">
                        <img class="headPortrait" src="http://dy.liweiliang.com/temp/temp_01.jpeg" alt="">
                        <span class="goodsTitle">日本进口redearth 红地球养肤粉底红地球养肤粉底红地球养肤粉底</span>
                        <el-dropdown size="small" style="float:right;height: 36px;">
                                <span class="el-dropdown-link">
                                <i class="el-icon-more"></i>
                                </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>置顶</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                    <li>
                        <img class="headPortrait" src="http://dy.liweiliang.com/temp/temp_01.jpeg" alt="">
                        <span class="goodsTitle">日本进口redearth 红地球养肤粉底红地球养肤粉底红地球养肤粉底</span>
                        <el-dropdown size="small" style="float:right;height: 36px;">
                                <span class="el-dropdown-link">
                                <i class="el-icon-more"></i>
                                </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>置顶</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                </ul>

            </el-aside>
            <el-main>
                <div class="monitor_goods_info">
                    <div class="monitor_goods_flex">
                        <img src="http://dy.liweiliang.com/temp/temp_03.jpeg" alt="">
                        <div class="goods_flex1">
                            <h5>保温杯男便携大容量智能测温杯女简约水杯个性潮流创意茶杯子定制</h5>
                            <p class="brand">品牌：<span class="b1">西艾</span>售价：<span class="b2">￥14.9</span></p>
                        </div>
                    </div>
                    <div class="monitor_goodsNum_flex">
                        <div class="goods_flex1">
                            抖音浏览量
                            <span>432.6w</span>
                        </div>
                        <div class="goods_flex1">
                            全网销量
                            <span>14.5w</span>
                        </div>
                        <div class="goods_flex1">
                            关联视频数
                            <span>171</span>
                        </div>
                        <div class="goods_flex1">
                            关联播主数
                            <span>92</span>
                        </div>
                    </div>
                    <div class="monitor_charts_box">
                        <h5>今日实时数据 <span class="time">数据更新时间：<em>2019-11-23 20:10:20</em></span></h5>
                        <div class="monitor_content_box">
                            <div class="monitor_left_content">
                                <dl>
                                    <dt>
                                        <i class="el-icon-document-add"></i>
                                        抖音浏览量增量
                                        <el-tooltip class="item" effect="dark" content="抖音浏览量增量：<br>商品在抖音上的总观看人数减前一天的总观看人数" placement="top"><i class="el-icon-question"></i></el-tooltip>
                                    </dt>
                                    <dd><span>1.9w</span></dd>
                                    <dd>昨日全天：3945</dd>
                                </dl>
                                <dl>
                                    <dt>
                                        <i class="el-icon-view"></i>
                                        全网销量增量
                                        <el-tooltip class="item" effect="dark" content="全网销量增量：<br>该商品的总销量减前一天的总销量" placement="top"><i class="el-icon-question"></i></el-tooltip>
                                    </dt>
                                    <dd><span>-17</span></dd>
                                    <dd>昨日全天：21</dd>
                                </dl>
                                <dl>
                                    <dt>
                                        <i class="el-icon-link"></i>
                                        关联视频数
                                        <el-tooltip class="item" effect="dark" content="全网销量增量：<br>该商品的总销量减前一天的总销量" placement="top"><i class="el-icon-question"></i></el-tooltip>
                                    </dt>
                                    <dd><span>279</span></dd>
                                    <dd>昨日全天：273</dd>
                                </dl>
                                <dl>
                                    <dt>
                                        <i class="el-icon-s-marketing"></i>
                                        关联视频点赞增量
                                        <el-tooltip class="item" effect="dark" content="全网销量增量：<br>该商品的总销量减前一天的总销量" placement="top"><i class="el-icon-question"></i></el-tooltip>
                                    </dt>
                                    <dd><span>3923</span></dd>
                                    <dd>昨日全天：1203</dd>
                                </dl>



                            </div>
                            <div class="monitor_right_content"></div>
                        </div>

                    </div>
                </div>
            </el-main>
        </el-container>

    </div>

</template>

<script>
    export default {
        name: "monitor_goods"
    }
</script>



<style lang="stylus" scoped>
    .goodsTit
        height 42px
        line-height 42px
        font-weight normal
        padding 15px 20px
        margin 0
        color #333
        font-size 14px
        background #fff
        box-shadow 0 1px 0 0 #f5f5f5
    .goodsMenu
        list-style none
        margin 0
        padding 0
        overflow auto
        background #fff
        li
            height 42px
            padding 15px 20px
            &.active
                background #52c41a
                span
                    color #fff
            .goodsTitle
                float left
                width 180px
                height 42px
                line-height 21px
                text-align left
                text-overflow -o-ellipsis-lastline
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical

            .headPortrait
                display inline-block
                float left
                width 42px
                height 42px
                margin-right 10px
                vertical-align middle
    .monitor_goods_info
        background #fff
        border-radius 4px
        min-height 96px
        margin-bottom 24px
        padding 24px
        border-bottom 1px solid #f5f5f5
        .monitor_goods_flex
            display flex
            margin-bottom 20px
            img
                width 60px
                height 60px
                border-radius 1px
                float left
                margin-right 14px
                vertical-align middle
        .monitor_goodsNum_flex
            display flex
            padding 20px 0
            >.goods_flex1
                font-size 14px
                color #8c8c8c
                line-height 1.8
                padding 0 20px
                text-align center
                border-right 1px solid #f5f5f5
                span
                    display block
                    font-size 16px
                    color #333
                    font-weight bold
        .goods_flex1
            flex 1
            h5
                color #333
                line-height 25px
                margin-bottom 15px
            .brand
                color #8c8c8c
                font-size 14px
                .b1
                    color #333
                    margin-right 20px
                .b2
                    font-size 16px
                    color #ff5000
                    font-weight bold
    .monitor_charts_box
        background #fff
        border-radius 4px
        min-height 96px
        margin-bottom 24px
        padding 24px
        h5
            border-bottom 1px solid #f5f5f5
            font-size 14px
            color #333
            padding-bottom 20px
            position relative
            .time
                float right
                color #999
        .monitor_content_box
            display flex
            .monitor_left_content
                border-right 1px solid #f5f5f5
                width 400px
                margin-top 24px
                dl
                    float left
                    width 50%
                    border-bottom 1px solid #f5f5f5
                    padding 0 0 24px 0
                    margin-bottom 24px
                    box-sizing border-box
                  dt
                    font-size 14px
                    color #595959
                    margin-bottom 8px
                    border-right 1px solid #f5f5f5
                  dd
                    font-size 12px
                    color #8c8c8c
                    line-height 1.8
                    span
                      font-size 16px
                      color #333
                      margin-bottom 8px
                      font-weight bold
            .monitor_right_content
                flex 1
</style>
