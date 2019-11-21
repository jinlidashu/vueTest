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
                        <div class="goods_flex1"></div>
                        <div class="goods_flex1"></div>
                        <div class="goods_flex1"></div>
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
                border-right 1px solid #f5f5f5
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
</style>
